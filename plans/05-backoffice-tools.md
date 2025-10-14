# Ferramentas de Backoffice - Vilanova

## 🔒 Visão Geral

O backoffice do Vilanova contém ferramentas privadas (privateTool) para administradores e moderadores gerenciarem o conteúdo do sistema, incluindo upload de áudio, transcrição automática e catalogação de repentes.

## 🛠️ Tools Privadas

### 1. UPLOAD_AUDIO (Upload de Arquivo de Áudio)

Permite fazer upload de arquivos MP3/WAV para posterior transcrição.

**Tool Definition:**
```typescript
const createUploadAudioTool = (env: Env) =>
  createPrivateTool({
    id: "UPLOAD_AUDIO",
    description: "Upload audio file (MP3, WAV) for transcription. Only accessible to admins and moderators.",
    inputSchema: z.object({
      fileName: z.string().describe("Name of the audio file"),
      fileData: z.string().describe("Base64 encoded audio file data"),
      mimeType: z.string().describe("MIME type (audio/mpeg, audio/wav)"),
      
      // Metadados opcionais
      suggestedTitle: z.string().optional().describe("Suggested title for the repente"),
      suggestedCantadores: z.array(z.string()).optional().describe("Array of cantador names"),
      suggestedDate: z.string().optional().describe("ISO date string of the performance"),
      suggestedLocation: z.string().optional().describe("City, State of the performance"),
      eventId: z.number().optional().describe("ID of related event if exists"),
      notes: z.string().optional().describe("Additional notes about the audio"),
    }),
    outputSchema: z.object({
      audioFileId: z.number(),
      fileUrl: z.string(),
      fileSize: z.number(),
      duration: z.number().optional(),
      status: z.string(),
      message: z.string(),
    }),
    execute: async ({ context, runtimeContext }) => {
      const db = await getDb(env);
      
      // Validar tamanho do arquivo (max 100MB)
      const buffer = Buffer.from(context.fileData, 'base64');
      const fileSizeBytes = buffer.length;
      
      if (fileSizeBytes > 100 * 1024 * 1024) {
        throw new Error("File size exceeds 100MB limit");
      }
      
      // Validar MIME type
      if (!['audio/mpeg', 'audio/wav', 'audio/mp3'].includes(context.mimeType)) {
        throw new Error("Invalid audio format. Only MP3 and WAV are supported.");
      }
      
      // Upload para R2 (Cloudflare Object Storage)
      const fileKey = `audio/${Date.now()}-${context.fileName}`;
      await env.R2_BUCKET.put(fileKey, buffer, {
        httpMetadata: {
          contentType: context.mimeType,
        },
      });
      
      const fileUrl = `https://storage.vilanova.deco.page/${fileKey}`;
      
      // Extrair duração do áudio (se possível)
      // Nota: Implementar com biblioteca de análise de áudio
      const duration = undefined; // TODO: Implementar extração de duração
      
      // Salvar no banco de dados
      const [audioFile] = await db.insert(audioFilesTable).values({
        fileName: context.fileName,
        fileUrl,
        fileSize: fileSizeBytes,
        duration,
        mimeType: context.mimeType,
        uploadedBy: context.userId, // Pegar do contexto de autenticação
        uploadedAt: Date.now(),
        transcriptionStatus: 'pending',
        suggestedTitle: context.suggestedTitle,
        suggestedCantadores: context.suggestedCantadores ? JSON.stringify(context.suggestedCantadores) : null,
        suggestedDate: context.suggestedDate ? new Date(context.suggestedDate).getTime() : null,
        suggestedLocation: context.suggestedLocation,
        eventId: context.eventId,
        notes: context.notes,
      }).returning();
      
      return {
        audioFileId: audioFile.id,
        fileUrl,
        fileSize: fileSizeBytes,
        duration,
        status: 'uploaded',
        message: 'Audio file uploaded successfully. Transcription will start automatically.',
      };
    },
  });
```

---

### 2. TRANSCRIBE_AUDIO (Transcrição com Whisper)

Inicia o processo de transcrição de um arquivo de áudio usando OpenAI Whisper.

**Tool Definition:**
```typescript
const createTranscribeAudioTool = (env: Env) =>
  createPrivateTool({
    id: "TRANSCRIBE_AUDIO",
    description: "Transcribe audio file using OpenAI Whisper. Automatically called after upload or can be triggered manually.",
    inputSchema: z.object({
      audioFileId: z.number().describe("ID of the audio file to transcribe"),
      language: z.string().default('pt').describe("Language code (pt for Portuguese)"),
      prompt: z.string().optional().describe("Optional prompt to guide transcription with specific terms"),
    }),
    outputSchema: z.object({
      transcriptionId: z.number(),
      audioFileId: z.number(),
      status: z.string(),
      message: z.string(),
      estimatedTime: z.number().optional().describe("Estimated time in seconds"),
    }),
    execute: async ({ context }) => {
      const db = await getDb(env);
      
      // Buscar arquivo de áudio
      const [audioFile] = await db.select()
        .from(audioFilesTable)
        .where(eq(audioFilesTable.id, context.audioFileId))
        .limit(1);
      
      if (!audioFile) {
        throw new Error("Audio file not found");
      }
      
      if (audioFile.transcriptionStatus === 'processing') {
        throw new Error("Transcription already in progress");
      }
      
      // Atualizar status para processing
      await db.update(audioFilesTable)
        .set({
          transcriptionStatus: 'processing',
          transcriptionStartedAt: Date.now(),
        })
        .where(eq(audioFilesTable.id, context.audioFileId));
      
      // Baixar arquivo do R2
      const audioObject = await env.R2_BUCKET.get(extractKeyFromUrl(audioFile.fileUrl));
      if (!audioObject) {
        throw new Error("Audio file not found in storage");
      }
      
      const audioBuffer = await audioObject.arrayBuffer();
      
      // Chamar OpenAI Whisper API
      // Nota: Whisper aceita FormData com arquivo
      const formData = new FormData();
      formData.append('file', new Blob([audioBuffer], { type: audioFile.mimeType }), audioFile.fileName);
      formData.append('model', 'whisper-1');
      formData.append('language', context.language);
      formData.append('response_format', 'verbose_json'); // Inclui timestamps
      
      if (context.prompt) {
        formData.append('prompt', context.prompt);
      }
      
      const whisperResponse = await fetch('https://api.openai.com/v1/audio/transcriptions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
        },
        body: formData,
      });
      
      if (!whisperResponse.ok) {
        const error = await whisperResponse.text();
        await db.update(audioFilesTable)
          .set({
            transcriptionStatus: 'failed',
            transcriptionError: error,
          })
          .where(eq(audioFilesTable.id, context.audioFileId));
        
        throw new Error(`Whisper API error: ${error}`);
      }
      
      const whisperResult = await whisperResponse.json();
      
      // Criar transcrição no banco
      const [transcription] = await db.insert(transcriptionsTable).values({
        repenteId: null, // Ainda não vinculado a um repente
        fullText: whisperResult.text,
        segments: JSON.stringify(whisperResult.segments), // Array de {start, end, text}
        method: 'ai_whisper',
        quality: 'draft',
      }).returning();
      
      // Atualizar audio file
      await db.update(audioFilesTable)
        .set({
          transcriptionStatus: 'completed',
          transcriptionId: transcription.id,
          transcriptionCompletedAt: Date.now(),
        })
        .where(eq(audioFilesTable.id, context.audioFileId));
      
      return {
        transcriptionId: transcription.id,
        audioFileId: context.audioFileId,
        status: 'completed',
        message: 'Transcription completed successfully',
      };
    },
  });
```

---

### 3. CREATE_REPENTE_FROM_TRANSCRIPTION (Criar Repente)

Cria um repente completo a partir de uma transcrição, incluindo cantadores, evento, etc.

**Tool Definition:**
```typescript
const createRepenteFromTranscriptionTool = (env: Env) =>
  createPrivateTool({
    id: "CREATE_REPENTE_FROM_TRANSCRIPTION",
    description: "Create a complete repente entry from transcription, including cantadores, event, and metadata.",
    inputSchema: z.object({
      transcriptionId: z.number(),
      
      // Informações do Repente
      title: z.string().describe("Title of the repente"),
      description: z.string().optional(),
      eventName: z.string().optional(),
      date: z.string().describe("ISO date string"),
      location: z.string().describe("City, State"),
      venue: z.string().optional().describe("Specific venue name"),
      
      // Cantadores
      cantadores: z.array(z.object({
        name: z.string(),
        role: z.string().optional(), // 'cantador_1', 'cantador_2'
      })).describe("Array of cantadores in this repente"),
      
      // Mídia
      videoUrl: z.string().optional(),
      audioUrl: z.string().optional(),
      thumbnailUrl: z.string().optional(),
    }),
    outputSchema: z.object({
      repenteId: z.number(),
      cantadorIds: z.array(z.number()),
      transcriptionLinked: z.boolean(),
      message: z.string(),
    }),
    execute: async ({ context }) => {
      const db = await getDb(env);
      
      // Buscar transcrição
      const [transcription] = await db.select()
        .from(transcriptionsTable)
        .where(eq(transcriptionsTable.id, context.transcriptionId))
        .limit(1);
      
      if (!transcription) {
        throw new Error("Transcription not found");
      }
      
      // Criar ou buscar cantadores
      const cantadorIds: number[] = [];
      
      for (const cantadorData of context.cantadores) {
        const slug = cantadorData.name
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9]+/g, '-');
        
        // Verificar se cantador já existe
        const [existing] = await db.select()
          .from(cantadoresTable)
          .where(eq(cantadoresTable.slug, slug))
          .limit(1);
        
        if (existing) {
          cantadorIds.push(existing.id);
        } else {
          // Criar novo cantador
          const [newCantador] = await db.insert(cantadoresTable).values({
            name: cantadorData.name,
            slug,
          }).returning();
          cantadorIds.push(newCantador.id);
        }
      }
      
      // Criar slug para o repente
      const repenteSlug = context.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        + '-' + Date.now();
      
      // Criar repente
      const [repente] = await db.insert(repentesTable).values({
        title: context.title,
        slug: repenteSlug,
        description: context.description,
        eventName: context.eventName,
        date: new Date(context.date).getTime(),
        location: context.location,
        venue: context.venue,
        videoUrl: context.videoUrl,
        audioUrl: context.audioUrl,
        thumbnailUrl: context.thumbnailUrl,
        hasTranscription: 1,
        transcriptionStatus: 'completed',
      }).returning();
      
      // Vincular cantadores ao repente
      for (let i = 0; i < cantadorIds.length; i++) {
        await db.insert(repenteCantadoresTable).values({
          repenteId: repente.id,
          cantadorId: cantadorIds[i],
          role: context.cantadores[i].role || `cantador_${i + 1}`,
        });
      }
      
      // Atualizar transcrição para vincular ao repente
      await db.update(transcriptionsTable)
        .set({ repenteId: repente.id })
        .where(eq(transcriptionsTable.id, context.transcriptionId));
      
      // Atualizar contadores
      for (const cantadorId of cantadorIds) {
        await db.update(cantadoresTable)
          .set({
            repenteCount: sql`${cantadoresTable.repenteCount} + 1`,
          })
          .where(eq(cantadoresTable.id, cantadorId));
      }
      
      return {
        repenteId: repente.id,
        cantadorIds,
        transcriptionLinked: true,
        message: `Repente "${context.title}" created successfully with ${cantadorIds.length} cantadores.`,
      };
    },
  });
```

---

### 4. EXTRACT_POETRIES_FROM_TRANSCRIPTION (Extrair Poesias)

Usa IA para identificar e extrair poesias individuais da transcrição.

**Tool Definition:**
```typescript
const createExtractPoetriesFromTranscriptionTool = (env: Env) =>
  createPrivateTool({
    id: "EXTRACT_POETRIES_FROM_TRANSCRIPTION",
    description: "Use AI to identify and extract individual poetries from transcription, detecting styles, verses, and structure.",
    inputSchema: z.object({
      transcriptionId: z.number(),
      repenteId: z.number(),
    }),
    outputSchema: z.object({
      poetriesExtracted: z.number(),
      poetryIds: z.array(z.number()),
      styles: z.array(z.string()),
      message: z.string(),
    }),
    execute: async ({ context }) => {
      const db = await getDb(env);
      
      // Buscar transcrição
      const [transcription] = await db.select()
        .from(transcriptionsTable)
        .where(eq(transcriptionsTable.id, context.transcriptionId))
        .limit(1);
      
      if (!transcription) {
        throw new Error("Transcription not found");
      }
      
      // Buscar estilos disponíveis
      const styles = await db.select().from(poetryStylesTable);
      
      // Usar IA para identificar poesias
      const extractionSchema = {
        type: 'object',
        properties: {
          poetries: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                startTime: { type: 'number', description: 'Start timestamp in seconds' },
                endTime: { type: 'number', description: 'End timestamp in seconds' },
                styleSlug: { type: 'string', description: 'Detected style slug' },
                speaker: { type: 'string', description: 'Speaker identifier' },
                stanzas: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      verses: {
                        type: 'array',
                        items: { type: 'string' },
                      },
                    },
                  },
                },
                hasMote: { type: 'boolean' },
                moteText: {
                  type: 'array',
                  items: { type: 'string' },
                },
              },
              required: ['styleSlug', 'stanzas'],
            },
          },
        },
        required: ['poetries'],
      };
      
      const prompt = `Analise esta transcrição de repente e identifique cada poesia individual:

TRANSCRIÇÃO:
${transcription.fullText}

SEGMENTOS COM TIMESTAMP:
${JSON.stringify(JSON.parse(transcription.segments), null, 2)}

ESTILOS DISPONÍVEIS:
${styles.map(s => `- ${s.slug}: ${s.name} (${s.versesPerStanza} versos, ${s.syllablesPerVerse} sílabas, esquema: ${s.rhymePattern})`).join('\n')}

IMPORTANTE - Adaptações Fonéticas:
Os poetas frequentemente adaptam a pronúncia de palavras para manter a métrica. Por exemplo:
- "dez de" pode ser pronunciado "dérbi" 
- "para" pode virar "pra"
- Elisões e contrações são comuns

RESPEITE a intenção original do autor. Se uma palavra parece estar "errada", é provável que seja uma adaptação intencional para a métrica.

Para cada poesia identificada:
1. Determine o estilo baseado no número de versos e estrutura
2. Identifique as estrofes e versos
3. Detecte se há mote e qual é
4. Marque os timestamps de início e fim
5. Identifique qual cantador está falando

Retorne um JSON estruturado com todas as poesias encontradas.`;
      
      const aiResult = await env.DECO_CHAT_WORKSPACE_API.AI_GENERATE_OBJECT({
        messages: [{
          role: 'system',
          content: 'Você é um especialista em repente nordestino e análise de estruturas poéticas.',
        }, {
          role: 'user',
          content: prompt,
        }],
        schema: extractionSchema,
        model: 'gpt-4o',
        temperature: 0.1,
      });
      
      if (!aiResult.object || !aiResult.object.poetries) {
        throw new Error("AI failed to extract poetries");
      }
      
      // Criar poesias no banco
      const poetryIds: number[] = [];
      const stylesFound = new Set<string>();
      
      for (const poetryData of aiResult.object.poetries) {
        // Buscar estilo
        const [style] = await db.select()
          .from(poetryStylesTable)
          .where(eq(poetryStylesTable.slug, poetryData.styleSlug))
          .limit(1);
        
        if (!style) continue;
        
        stylesFound.add(style.name);
        
        // Criar poesia
        const [poetry] = await db.insert(poetriesTable).values({
          title: null, // Poesias de duelo não têm título
          slug: `${context.repenteId}-${style.slug}-${Date.now()}`,
          styleId: style.id,
          repenteId: context.repenteId,
          transcriptionId: context.transcriptionId,
          isImprovisedDuel: 1,
          hasMote: poetryData.hasMote ? 1 : 0,
          moteText: poetryData.moteText ? JSON.stringify(poetryData.moteText) : null,
          status: 'published',
          publishedAt: Date.now(),
        }).returning();
        
        poetryIds.push(poetry.id);
        
        // Criar estrofes e versos
        for (let stanzaIndex = 0; stanzaIndex < poetryData.stanzas.length; stanzaIndex++) {
          const [stanza] = await db.insert(stanzasTable).values({
            poetryId: poetry.id,
            order: stanzaIndex + 1,
          }).returning();
          
          const stanzaData = poetryData.stanzas[stanzaIndex];
          
          for (let verseIndex = 0; verseIndex < stanzaData.verses.length; verseIndex++) {
            await db.insert(versesTable).values({
              stanzaId: stanza.id,
              poetryId: poetry.id,
              order: verseIndex + 1,
              text: stanzaData.verses[verseIndex],
              // Análise será feita em outro momento
            });
          }
        }
        
        // Atualizar contadores
        await db.update(poetriesTable)
          .set({
            stanzaCount: poetryData.stanzas.length,
            verseCount: poetryData.stanzas.reduce((acc, s) => acc + s.verses.length, 0),
          })
          .where(eq(poetriesTable.id, poetry.id));
      }
      
      // Marcar transcrição como processada
      await db.update(transcriptionsTable)
        .set({
          hasPoetryExtraction: 1,
          poetriesExtracted: poetryIds.length,
        })
        .where(eq(transcriptionsTable.id, context.transcriptionId));
      
      return {
        poetriesExtracted: poetryIds.length,
        poetryIds,
        styles: Array.from(stylesFound),
        message: `Successfully extracted ${poetryIds.length} poetries in styles: ${Array.from(stylesFound).join(', ')}`,
      };
    },
  });
```

---

### 5. CREATE_CANTORIA_EVENT (Criar Evento de Cantoria)

Cria evento no calendário de cantorias.

**Tool Definition:**
```typescript
const createCantoriaEventTool = (env: Env) =>
  createPrivateTool({
    id: "CREATE_CANTORIA_EVENT",
    description: "Create a cantoria event in the calendar, supporting one-time and recurring events.",
    inputSchema: z.object({
      title: z.string(),
      description: z.string().optional(),
      venue: z.string(),
      address: z.string().optional(),
      city: z.string(),
      state: z.string(),
      
      // Data/Hora
      eventDate: z.string().describe("ISO date for one-time events or first occurrence"),
      startTime: z.string().describe("HH:MM format"),
      endTime: z.string().optional(),
      
      // Recorrência
      isRecurring: z.boolean().default(false),
      recurrenceRule: z.object({
        frequency: z.enum(['daily', 'weekly', 'monthly']),
        interval: z.number().default(1),
        weekday: z.number().optional(), // 0-6 (Sunday-Saturday)
        monthday: z.number().optional(), // 1-31
        ordinal: z.enum(['first', 'second', 'third', 'fourth', 'last']).optional(),
      }).optional(),
      recurrenceText: z.string().optional().describe("Human readable like 'Toda primeira quinta-feira do mês'"),
      
      // Outros
      entryFee: z.string().optional(),
      confirmedCantadores: z.array(z.number()).optional(),
      organizerName: z.string().optional(),
      organizerContact: z.string().optional(),
      websiteUrl: z.string().optional(),
      posterUrl: z.string().optional(),
    }),
    outputSchema: z.object({
      eventId: z.number(),
      slug: z.string(),
      isRecurring: z.boolean(),
      nextOccurrence: z.string().optional(),
      message: z.string(),
    }),
    execute: async ({ context }) => {
      const db = await getDb(env);
      
      const slug = `${context.title}-${context.city}`
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-');
      
      const [event] = await db.insert(cantoriaEventsTable).values({
        title: context.title,
        slug,
        description: context.description,
        venue: context.venue,
        address: context.address,
        city: context.city,
        state: context.state,
        eventDate: new Date(context.eventDate).getTime(),
        startTime: context.startTime,
        endTime: context.endTime,
        isRecurring: context.isRecurring ? 1 : 0,
        recurrenceRule: context.recurrenceRule ? JSON.stringify(context.recurrenceRule) : null,
        recurrenceText: context.recurrenceText,
        confirmedCantadores: context.confirmedCantadores ? JSON.stringify(context.confirmedCantadores) : null,
        entryFee: context.entryFee,
        organizerName: context.organizerName,
        organizerContact: context.organizerContact,
        websiteUrl: context.websiteUrl,
        posterUrl: context.posterUrl,
        status: 'scheduled',
      }).returning();
      
      return {
        eventId: event.id,
        slug: event.slug,
        isRecurring: context.isRecurring,
        message: `Event "${context.title}" created successfully`,
      };
    },
  });
```

---

## 🎨 Interface de Backoffice

### Página: Upload de Áudio

**Rota:** `/admin/upload`

**Componentes:**
```typescript
function AudioUploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [metadata, setMetadata] = useState({
    suggestedTitle: '',
    suggestedCantadores: [''],
    suggestedLocation: '',
    notes: '',
  });
  
  const uploadMutation = useUploadAudioMutation();
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  
  const handleUpload = async () => {
    if (!file) return;
    
    // Converter para base64
    const reader = new FileReader();
    reader.onload = async () => {
      const base64 = reader.result?.toString().split(',')[1];
      
      await uploadMutation.mutate({
        fileName: file.name,
        fileData: base64!,
        mimeType: file.type,
        ...metadata,
      });
    };
    reader.readAsDataURL(file);
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Upload de Áudio para Transcrição</h1>
      
      {/* Dropzone */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
        <input
          type="file"
          accept="audio/mpeg,audio/wav,audio/mp3"
          onChange={handleFileSelect}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <FileAudio className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2">Arraste um arquivo MP3/WAV ou clique para selecionar</p>
        </label>
        {file && (
          <p className="mt-2 text-sm text-green-600">
            Arquivo selecionado: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
          </p>
        )}
      </div>
      
      {/* Metadados */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Título Sugerido</label>
          <input
            type="text"
            value={metadata.suggestedTitle}
            onChange={(e) => setMetadata({...metadata, suggestedTitle: e.target.value})}
            className="w-full px-3 py-2 border rounded"
            placeholder="Ex: Sebastião vs Ivanildo - Festival de Caruaru 2023"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Cantadores</label>
          {metadata.suggestedCantadores.map((name, i) => (
            <input
              key={i}
              type="text"
              value={name}
              onChange={(e) => {
                const newCantadores = [...metadata.suggestedCantadores];
                newCantadores[i] = e.target.value;
                setMetadata({...metadata, suggestedCantadores: newCantadores});
              }}
              className="w-full px-3 py-2 border rounded mb-2"
              placeholder={`Cantador ${i + 1}`}
            />
          ))}
          <button
            onClick={() => setMetadata({
              ...metadata,
              suggestedCantadores: [...metadata.suggestedCantadores, '']
            })}
            className="text-sm text-blue-600"
          >
            + Adicionar Cantador
          </button>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Local</label>
          <input
            type="text"
            value={metadata.suggestedLocation}
            onChange={(e) => setMetadata({...metadata, suggestedLocation: e.target.value})}
            className="w-full px-3 py-2 border rounded"
            placeholder="Ex: Caruaru, PE"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Notas</label>
          <textarea
            value={metadata.notes}
            onChange={(e) => setMetadata({...metadata, notes: e.target.value})}
            className="w-full px-3 py-2 border rounded"
            rows={3}
            placeholder="Informações adicionais sobre o áudio..."
          />
        </div>
      </div>
      
      {/* Botão Upload */}
      <button
        onClick={handleUpload}
        disabled={!file || uploadMutation.isPending}
        className="w-full bg-green-600 text-white py-3 rounded font-medium disabled:opacity-50"
      >
        {uploadMutation.isPending ? 'Fazendo Upload...' : 'Upload e Iniciar Transcrição'}
      </button>
      
      {/* Status */}
      {uploadMutation.isSuccess && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
          <p className="text-green-800">
            ✓ Upload concluído! A transcrição iniciará automaticamente.
          </p>
        </div>
      )}
    </div>
  );
}
```

---

## 🔄 Workflow Completo

### Upload → Transcrição → Catalogação

```typescript
const createCompleteAudioProcessingWorkflow = (env: Env) => {
  const uploadStep = createStepFromTool(createUploadAudioTool(env));
  const transcribeStep = createStepFromTool(createTranscribeAudioTool(env));
  const createRepenteStep = createStepFromTool(createRepenteFromTranscriptionTool(env));
  const extractPoetriesStep = createStepFromTool(createExtractPoetriesFromTranscriptionTool(env));
  
  return createWorkflow({
    id: "PROCESS_AUDIO_TO_CATALOG",
    inputSchema: z.object({
      fileName: z.string(),
      fileData: z.string(),
      mimeType: z.string(),
      metadata: z.any(),
    }),
    outputSchema: z.object({
      audioFileId: z.number(),
      transcriptionId: z.number(),
      repenteId: z.number(),
      poetryIds: z.array(z.number()),
      message: z.string(),
    }),
  })
    // Step 1: Upload
    .then(uploadStep)
    
    // Step 2: Transcribe
    .map(({ inputData }) => ({
      audioFileId: inputData.audioFileId,
      language: 'pt',
    }))
    .then(transcribeStep)
    
    // Step 3: Create Repente
    .map(({ inputData, getStepResult }) => {
      const uploadResult = getStepResult(uploadStep);
      return {
        transcriptionId: inputData.transcriptionId,
        title: uploadResult.metadata.suggestedTitle,
        cantadores: uploadResult.metadata.suggestedCantadores.map((name: string) => ({ name })),
        date: new Date().toISOString(),
        location: uploadResult.metadata.suggestedLocation,
      };
    })
    .then(createRepenteStep)
    
    // Step 4: Extract Poetries
    .map(({ inputData }) => ({
      transcriptionId: inputData.transcriptionLinked,
      repenteId: inputData.repenteId,
    }))
    .then(extractPoetriesStep)
    
    // Final result
    .map(({ getStepResult }) => {
      const transcribeResult = getStepResult(transcribeStep);
      const repenteResult = getStepResult(createRepenteStep);
      const poetriesResult = getStepResult(extractPoetriesStep);
      
      return {
        audioFileId: transcribeResult.audioFileId,
        transcriptionId: transcribeResult.transcriptionId,
        repenteId: repenteResult.repenteId,
        poetryIds: poetriesResult.poetryIds,
        message: `Processamento completo: ${poetriesResult.poetriesExtracted} poesias extraídas`,
      };
    })
    .commit();
};
```

---

## 📊 Dashboard de Administração

**Rota:** `/admin`

- Lista de áudios pendentes de transcrição
- Status de transcrições em andamento
- Repentes catalogados recentemente
- Estatísticas (total de áudios, transcrições, repentes, poesias)
- Fila de processamento

---

## 🔑 Autenticação e Permissões

Apenas usuários com role `admin` ou `moderator` podem acessar essas ferramentas.

**Middleware de autenticação:**
```typescript
const requireAdmin = (context: any) => {
  if (!context.user || !['admin', 'moderator'].includes(context.user.role)) {
    throw new Error("Unauthorized: Admin access required");
  }
};
```

---

Este sistema permite que administradores facilmente adicionem novo conteúdo ao acervo do Vilanova, com processamento automático via IA!



