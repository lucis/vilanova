# Plano: Compartilhar Estrofes como Imagem

**Objetivo:** Permitir que usuários compartilhem estrofes individuais de repentes como imagens otimizadas para Instagram Stories, aumentando o alcance e viralização do Projeto Vilanova.

---

## 📱 Visão Geral

Adicionar um botão de compartilhamento em cada estrofe na página de detalhes de uma cantoria. Ao clicar, gera uma imagem bonita (1080x1920px - formato Story) com:

- A estrofe em destaque
- Nome da cantoria e cantador
- Link para o YouTube
- Branding do Projeto Vilanova
- Design atraente com identidade visual

---

## 🎯 User Flow

```ascii
┌─────────────────────────────────────────────────────────────┐
│  PÁGINA DE DETALHES DA CANTORIA                             │
│  /cantorias/pensamentos-pensadores-ivanildo-vilanova        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │ Estrofe 1 - Amor                           [Share] │◄────┼─── Botão em cada estrofe
│  │                                                     │     │
│  │ "Digo eu, como Chile, o escritor.                  │     │
│  │  Sem amor neste mundo não há nada.                 │     │
│  │  O amor assemelha-se uma escada                    │     │
│  │  pela qual se eleva ao criador..."                 │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │ Estrofe 2 - Beleza                         [Share] │     │
│  │                                                     │     │
│  │ "A beleza, afirmava Ramón de Campoamor..."         │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ Clique no [Share]
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  MODAL DE PREVIEW                                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────┐                   │
│  │                                      │                   │
│  │    [Preview da Imagem Gerada]       │                   │
│  │         (1080x1920px)                │                   │
│  │                                      │                   │
│  │   Mostra como ficará a imagem        │                   │
│  │   no Instagram Story                 │                   │
│  │                                      │                   │
│  └──────────────────────────────────────┘                   │
│                                                              │
│  [ Baixar Imagem ]  [ Copiar Link ]  [ Fechar ]             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎨 Layout da Imagem Gerada (1080x1920px)

```ascii
┌─────────────────────────────────────────────────────┐
│ 1080px                                              │ ▲
│                                                     │ │
│  ╔═════════════════════════════════════════════╗   │ │
│  ║                                             ║   │ │
│  ║         PROJETO VILANOVA                    ║   │ │ 200px
│  ║         Logo + Nome                         ║   │ │ Header
│  ║                                             ║   │ │
│  ╚═════════════════════════════════════════════╝   │ ▼
│                                                     │
│  ┌─────────────────────────────────────────────┐   │ ▲
│  │                                             │   │ │
│  │   "Digo eu, como Chile, o escritor.        │   │ │
│  │    Sem amor neste mundo não há nada.       │   │ │
│  │    O amor assemelha-se uma escada          │   │ │
│  │    pela qual se eleva ao criador.          │   │ │ 1200px
│  │    Sei que acima da morte está o amor.     │   │ │ Conteúdo
│  │    Lacordaire proclamava em plena fama.    │   │ │ (Estrofe)
│  │    Chame fóra [?], já dizia, amor é drama. │   │ │
│  │    Se contrai como a própria epidemia.     │   │ │
│  │    Túlio Cícero, de Roma, já dizia:        │   │ │
│  │    Não há nada difícil pra quem ama."      │   │ │
│  │                                             │   │ │
│  │          — Ivanildo Vilanova                │   │ │
│  │                                             │   │ │
│  └─────────────────────────────────────────────┘   │ ▼
│                                                     │
│  ┌─────────────────────────────────────────────┐   │ ▲
│  │                                             │   │ │
│  │  📖 Pensamentos e Pensadores                │   │ │
│  │  🎵 Estilo: Décima (Mote Fixo)              │   │ │ 400px
│  │  📺 youtu.be/vAdWNTHZReQ                    │   │ │ Footer
│  │                                             │   │ │
│  │  vilanova.deco.site                         │   │ │
│  │                                             │   │ │
│  └─────────────────────────────────────────────┘   │ ▼
│                                                     │
└─────────────────────────────────────────────────┘  │
                                                   1920px
```

---

## 📐 Especificações Visuais

### Dimensões
- **Tamanho:** 1080x1920px (9:16 - Instagram Story)
- **Resolução:** 72 DPI (web)
- **Formato de saída:** PNG (melhor qualidade) ou JPEG (menor tamanho)

### Layout Breakdown

#### Header (200px altura)
```ascii
┌─────────────────────────────────────────────────────┐
│                                                     │
│  [Logo]  PROJETO VILANOVA                          │
│          Preservando a Cantoria Nordestina         │
│                                                     │
└─────────────────────────────────────────────────────┘
```
- **Background:** Gradiente (#1a1a1a → #2d2d2d)
- **Logo:** 80x80px no canto esquerdo
- **Texto:** Branco, fonte Poppins Bold 32px
- **Subtítulo:** Cinza claro, Poppins Regular 18px

#### Conteúdo - Estrofe (1200px altura)
```ascii
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Padding: 60px                                     │
│                                                     │
│   "Verso 1 da estrofe aqui                         │
│    Verso 2 da estrofe aqui                         │
│    Verso 3 da estrofe aqui                         │
│    ... todos os 10 versos"                         │
│                                                     │
│                                                     │
│          — Nome do Cantador                        │
│             (autor da estrofe)                     │
│                                                     │
└─────────────────────────────────────────────────────┘
```
- **Background:** Branco (#ffffff)
- **Borda:** Sutil sombra externa (box-shadow)
- **Versos:** 
  - Fonte: Georgia ou serif elegante
  - Tamanho: 28-32px (ajustar para caber)
  - Cor: #1a1a1a
  - Line-height: 1.6
  - Aspas decorativas no início/fim
- **Assinatura (cantador):**
  - Fonte: Poppins Italic
  - Tamanho: 24px
  - Cor: #666
  - Alinhamento: direita
  - Margem top: 40px

#### Footer - Metadados (400px altura)
```ascii
┌─────────────────────────────────────────────────────┐
│                                                     │
│  📖 [Título da Cantoria]                           │
│  🎵 Estilo: [Nome do Estilo]                       │
│  📺 [YouTube Short URL]                            │
│                                                     │
│  ─────────────────────────────────────────────     │
│                                                     │
│  vilanova.deco.site                                │
│  Ouça a cantoria completa ↗                        │
│                                                     │
└─────────────────────────────────────────────────────┘
```
- **Background:** Gradiente invertido (#2d2d2d → #1a1a1a)
- **Texto:** Branco
- **Ícones:** Emojis ou ícones SVG (📖 🎵 📺)
- **Título cantoria:** Poppins Bold 26px
- **Metadados:** Poppins Regular 22px
- **URL:** Poppins Medium 20px, cor primária (#f59e0b ou similar)
- **CTA:** Poppins Regular 18px, opacidade 80%

---

## 🛠️ Stack Técnica

### Bibliotecas Necessárias

```json
{
  "dependencies": {
    "html2canvas": "^1.4.1",
    "lucide-react": "^0.263.1"
  }
}
```

**Nota:** Evitar `canvas2image` (deprecated). Usar `html2canvas` diretamente ou Canvas API nativo.

### Alternativas de Implementação

#### Opção 1: HTML2Canvas (Recomendado)
✅ **Vantagens:**
- Renderiza HTML/CSS diretamente
- Fácil manutenção do design
- Suporta fontes web
- Gradientes e sombras nativos

❌ **Desvantagens:**
- Bundle um pouco maior
- Depende de biblioteca externa

#### Opção 2: Canvas API Nativo
✅ **Vantagens:**
- Sem dependências externas
- Performance melhor
- Controle total do render

❌ **Desvantagens:**
- Mais trabalhoso implementar
- Limitações com fontes/gradientes
- Código mais verboso

**Recomendação:** Usar **HTML2Canvas** pela facilidade e resultado visual superior.

---

## 📂 Estrutura de Arquivos

```
view/src/
├── components/
│   ├── ShareEstrofeButton.tsx      # Botão "Share" em cada estrofe
│   ├── ShareEstrofeModal.tsx       # Modal de preview + download
│   └── ShareEstrofeCanvas.tsx      # Componente que renderiza o layout
│
├── hooks/
│   └── useGenerateEstrofeImage.ts  # Hook para gerar a imagem
│
└── routes/
    └── cantorias/$slug.tsx         # Já existente, adicionar botões
```

---

## 🔧 Implementação Detalhada

### 1. ShareEstrofeButton.tsx

```tsx
interface ShareEstrofeButtonProps {
  estrofe: Estrofe;
  cantoria: Cantoria;
}

export function ShareEstrofeButton({ estrofe, cantoria }: ShareEstrofeButtonProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-amber-600"
        aria-label="Compartilhar estrofe"
      >
        <Share2 size={18} />
        Compartilhar
      </button>

      {showModal && (
        <ShareEstrofeModal
          estrofe={estrofe}
          cantoria={cantoria}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
```

### 2. ShareEstrofeModal.tsx

```tsx
interface ShareEstrofeModalProps {
  estrofe: Estrofe;
  cantoria: Cantoria;
  onClose: () => void;
}

export function ShareEstrofeModal({ estrofe, cantoria, onClose }: ShareEstrofeModalProps) {
  const { generateImage, isGenerating, imageUrl } = useGenerateEstrofeImage();

  useEffect(() => {
    generateImage(estrofe, cantoria);
  }, []);

  const handleDownload = () => {
    if (!imageUrl) return;
    
    const link = document.createElement('a');
    link.download = `vilanova-${cantoria.slug}-estrofe-${estrofe.numero}.png`;
    link.href = imageUrl;
    link.click();
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}/cantorias/${cantoria.slug}?estrofe=${estrofe.numero}`;
    navigator.clipboard.writeText(url);
    toast.success('Link copiado!');
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Compartilhar Estrofe {estrofe.numero}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Preview da imagem */}
          {isGenerating ? (
            <div className="aspect-[9/16] bg-gray-100 flex items-center justify-center">
              <Loader2 className="animate-spin" />
              <p className="ml-2">Gerando imagem...</p>
            </div>
          ) : imageUrl ? (
            <img 
              src={imageUrl} 
              alt="Preview da imagem"
              className="w-full rounded-lg shadow-lg"
            />
          ) : null}

          {/* Ações */}
          <div className="flex gap-2">
            <Button onClick={handleDownload} className="flex-1">
              <Download size={18} className="mr-2" />
              Baixar Imagem
            </Button>
            <Button onClick={handleCopyLink} variant="outline">
              <Link2 size={18} />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

### 3. ShareEstrofeCanvas.tsx

```tsx
interface ShareEstrofeCanvasProps {
  estrofe: Estrofe;
  cantoria: Cantoria;
}

export const ShareEstrofeCanvas = forwardRef<HTMLDivElement, ShareEstrofeCanvasProps>(
  ({ estrofe, cantoria }, ref) => {
    const youtubeShortUrl = cantoria.links.youtube
      ? `youtu.be/${new URL(cantoria.links.youtube).searchParams.get('v')}`
      : null;

    return (
      <div
        ref={ref}
        className="relative"
        style={{
          width: '1080px',
          height: '1920px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Header */}
        <div className="h-[200px] bg-gradient-to-b from-gray-900 to-gray-800 flex items-center px-16">
          <img src="/logo.png" className="w-20 h-20 mr-6" />
          <div>
            <h1 className="text-white text-4xl font-bold">PROJETO VILANOVA</h1>
            <p className="text-gray-300 text-xl">Preservando a Cantoria Nordestina</p>
          </div>
        </div>

        {/* Conteúdo - Estrofe */}
        <div className="h-[1200px] bg-white flex items-center justify-center px-16 py-20">
          <div className="max-w-4xl">
            {/* Aspas decorativas */}
            <div className="text-amber-600 text-8xl leading-none mb-6">"</div>

            {/* Versos */}
            <div className="space-y-3">
              {estrofe.versos.map((verso, i) => (
                <p key={i} className="text-gray-900 text-3xl leading-relaxed font-serif">
                  {verso}
                </p>
              ))}
            </div>

            {/* Aspas de fechamento */}
            <div className="text-amber-600 text-8xl leading-none text-right mt-6">"</div>

            {/* Assinatura */}
            <p className="text-gray-600 text-2xl italic text-right mt-10">
              — {estrofe.cantador}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="h-[400px] bg-gradient-to-b from-gray-800 to-gray-900 px-16 py-12 flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-white text-3xl font-bold flex items-center gap-3">
              📖 {cantoria.titulo}
            </p>
            <p className="text-gray-300 text-2xl flex items-center gap-3">
              🎵 Estilo: {cantoria.estilo.nome}
            </p>
            {youtubeShortUrl && (
              <p className="text-gray-300 text-2xl flex items-center gap-3">
                📺 {youtubeShortUrl}
              </p>
            )}
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-amber-500 text-2xl font-medium">vilanova.deco.site</p>
            <p className="text-gray-400 text-xl mt-2">Ouça a cantoria completa ↗</p>
          </div>
        </div>
      </div>
    );
  }
);
```

### 4. useGenerateEstrofeImage.ts

```tsx
import html2canvas from 'html2canvas';

interface GenerateImageState {
  imageUrl: string | null;
  isGenerating: boolean;
  error: Error | null;
}

export function useGenerateEstrofeImage() {
  const [state, setState] = useState<GenerateImageState>({
    imageUrl: null,
    isGenerating: false,
    error: null,
  });

  const generateImage = async (estrofe: Estrofe, cantoria: Cantoria) => {
    setState({ imageUrl: null, isGenerating: true, error: null });

    try {
      // Criar div temporária fora da viewport
      const container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.top = '-9999px';
      document.body.appendChild(container);

      // Renderizar componente React nessa div
      const root = ReactDOM.createRoot(container);
      await new Promise<void>((resolve) => {
        root.render(
          <ShareEstrofeCanvas 
            estrofe={estrofe} 
            cantoria={cantoria}
            ref={(el) => {
              if (el) {
                // Dar tempo para fontes carregarem
                setTimeout(() => resolve(), 500);
              }
            }}
          />
        );
      });

      // Capturar como canvas
      const canvas = await html2canvas(container.firstChild as HTMLElement, {
        width: 1080,
        height: 1920,
        scale: 2, // Alta resolução
        backgroundColor: '#ffffff',
        logging: false,
      });

      // Converter para blob/URL
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((b) => resolve(b!), 'image/png', 1.0);
      });
      
      const url = URL.createObjectURL(blob);

      // Limpar
      root.unmount();
      document.body.removeChild(container);

      setState({ imageUrl: url, isGenerating: false, error: null });
    } catch (error) {
      setState({ imageUrl: null, isGenerating: false, error: error as Error });
      console.error('Erro ao gerar imagem:', error);
    }
  };

  return { ...state, generateImage };
}
```

---

## 🎨 Variantes de Design (Futuro)

### Temas Alternativos

```ascii
┌─────────────────────────────────────────┐
│  TEMA 1: CLÁSSICO (atual)               │
│  - Background branco                    │
│  - Fonte serif para versos              │
│  - Header/footer escuro                 │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  TEMA 2: SERTÃO                         │
│  - Background bege (#f5f1e8)            │
│  - Textura de papel envelhecido         │
│  - Cores terrosas (marrom, ocre)        │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  TEMA 3: NORDESTE VIBRANTE              │
│  - Cores quentes (amarelo, laranja)     │
│  - Padrões geométricos no fundo         │
│  - Inspiração em xilogravura            │
└─────────────────────────────────────────┘
```

---

## 📊 Métricas e Analytics

### Eventos a Trackear

```typescript
// Quando usuário clica em "Compartilhar"
analytics.track('estrofe_share_clicked', {
  cantoria_id: cantoria.id,
  cantoria_slug: cantoria.slug,
  estrofe_numero: estrofe.numero,
  estilo: cantoria.estilo.nome,
  cantador: estrofe.cantador,
});

// Quando usuário baixa a imagem
analytics.track('estrofe_image_downloaded', {
  cantoria_id: cantoria.id,
  estrofe_numero: estrofe.numero,
});

// Quando usuário copia o link
analytics.track('estrofe_link_copied', {
  cantoria_id: cantoria.id,
  estrofe_numero: estrofe.numero,
});
```

### KPIs Esperados
- **Taxa de compartilhamento:** % de visitantes que compartilham
- **Estrofes mais compartilhadas:** Top 10 estrofes
- **Cantorias mais compartilhadas:** Quais geram mais engajamento
- **Conversão:** Quantos cliques retornam ao site (via link na imagem)

---

## 🚀 Roadmap de Implementação

### Fase 1: MVP (1-2 dias)
- [ ] Componente ShareEstrofeButton
- [ ] Modal básico de preview
- [ ] Hook useGenerateEstrofeImage com html2canvas
- [ ] Layout básico (tema clássico)
- [ ] Download de imagem funcional

### Fase 2: Polimento (1 dia)
- [ ] Ajustes de tipografia e espaçamento
- [ ] Responsividade do preview no mobile
- [ ] Loading states e error handling
- [ ] Toast notifications (feedback)
- [ ] Testes com diferentes tamanhos de estrofe

### Fase 3: Features Extras (futuro)
- [ ] Seleção de tema/cor
- [ ] Compartilhamento direto (Web Share API)
- [ ] Preview em tempo real (antes de gerar)
- [ ] Marca d'água personalizada
- [ ] Opção de incluir/esconder elementos

---

## 🎯 UX Considerations

### Acessibilidade
```tsx
<button
  onClick={handleShare}
  aria-label={`Compartilhar estrofe ${estrofe.numero} - ${estrofe.tema}`}
  className="..."
>
  <Share2 aria-hidden="true" />
  <span>Compartilhar</span>
</button>
```

### Performance
- **Lazy loading:** Carregar html2canvas apenas quando necessário
- **Debounce:** Evitar múltiplas gerações simultâneas
- **Cleanup:** Liberar URLs de blob após uso
- **Otimização:** Considerar cache de imagens já geradas

### Mobile Experience
```ascii
┌───────────────────────────┐
│  📱 MOBILE                │
│                           │
│  Preview menor (300px)    │
│  Botões em stack          │
│  Share API nativo         │
│                           │
│  [Compartilhar via...]    │
│  [Baixar]                 │
│  [Cancelar]               │
└───────────────────────────┘
```

---

## 🔗 Integrações Futuras

### Web Share API (Mobile)
```typescript
if (navigator.share) {
  // Compartilhar direto no app nativo
  await navigator.share({
    title: `${cantoria.titulo} - Estrofe ${estrofe.numero}`,
    text: estrofe.versos.join('\n'),
    url: window.location.href,
  });
}
```

### Open Graph (quando compartilhado link)
```html
<meta property="og:image" content="[URL da imagem gerada]" />
<meta property="og:title" content="Pensamentos e Pensadores - Estrofe 1" />
<meta property="og:description" content="Digo eu, como Chile, o escritor..." />
```

---

## 📝 Exemplo de Uso Final

```typescript
// Em cantorias/$slug.tsx

<div className="space-y-6">
  {cantoria.estrofes?.map((estrofe) => (
    <Card key={estrofe.numero}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Estrofe {estrofe.numero} - {estrofe.tema}</CardTitle>
        <ShareEstrofeButton estrofe={estrofe} cantoria={cantoria} />
      </CardHeader>
      <CardContent>
        {estrofe.versos.map((verso, i) => (
          <p key={i}>{verso}</p>
        ))}
      </CardContent>
    </Card>
  ))}
</div>
```

---

## ✅ Checklist Final

### Antes de Lançar
- [ ] Testar com estrofes de 6, 8 e 10 versos
- [ ] Testar com nomes longos de cantoria
- [ ] Testar em diferentes navegadores
- [ ] Validar acessibilidade (WCAG AA)
- [ ] Performance: tempo de geração < 2s
- [ ] Preview funciona em mobile
- [ ] Analytics configurado
- [ ] Documentação de uso (README)

### Após Lançar
- [ ] Monitorar erros no Sentry
- [ ] Analisar métricas de compartilhamento
- [ ] Coletar feedback dos usuários
- [ ] Iterar sobre design baseado em dados

---

## 🎉 Impacto Esperado

Esta feature pode:
- ✨ **Aumentar viralização** - Conteúdo visual atrai mais atenção
- 📱 **Alcançar novos públicos** - Instagram/Stories tem alto alcance
- 🎯 **Fortalecer marca** - Toda imagem leva branding Vilanova
- 📈 **Gerar tráfego** - Links trazem pessoas de volta ao site
- 💡 **Educar** - Cada estrofe compartilhada é uma mini-aula de repente

---

**Status:** 📋 Planejamento Completo  
**Próximo passo:** Implementar Fase 1 (MVP)  
**Estimativa:** 2-3 dias de desenvolvimento  
**Prioridade:** Alta (feature de engajamento)


