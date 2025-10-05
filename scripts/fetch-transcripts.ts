#!/usr/bin/env -S deno run --allow-net --allow-write --allow-read

const API_KEY = "wqiRhUktLWb3DFK5J7Gneg1f";
const BASE_URL = "https://www.searchapi.io/api/v1/search";

interface Video {
  id: string;
  title: string;
  episode: number;
}

const videos: Video[] = [
  { id: "ULbBggbGpB8", title: "Para Valorizar a Cantoria", episode: 1 },
  { id: "8OyCHRKxzSc", title: "Sílabas Tônicas e Rimas", episode: 2 },
  { id: "1Gphjb66_LA", title: "Métrica", episode: 3 },
  { id: "Ty7UEIye-QA", title: "Estrofes e Gêneros", episode: 4 },
  { id: "ADytJaJSYTU", title: "A Peleja na Cantoria", episode: 5 },
  { id: "rTkMk5cw7hc", title: "A Música do Repente", episode: 6 },
  { id: "1Sa2dfnwJNs", title: "O Repente nos Sertões de Então", episode: 7 },
  { id: "9ZchytBjNgE", title: "Influências Afro e Indígena", episode: 8 },
  { id: "GlhAQnTlA7w", title: "Mulheres no Repente", episode: 9 },
  { id: "z6Bfr4KipFQ", title: "A Literatura do Repente", episode: 10 },
  { id: "sd5yNkXyHV4", title: "O Repente nos Sertões do Amanhã", episode: 11 },
];

async function fetchTranscript(videoId: string): Promise<string | null> {
  const url = new URL(BASE_URL);
  url.searchParams.set("engine", "youtube_transcripts");
  url.searchParams.set("video_id", videoId);
  url.searchParams.set("lang", "pt");
  url.searchParams.set("api_key", API_KEY);

  try {
    console.log(`Fetching transcript for video ${videoId}...`);
    const response = await fetch(url.toString());
    
    if (!response.ok) {
      console.error(`Failed to fetch transcript for ${videoId}: ${response.status}`);
      return null;
    }

    const data = await response.json();
    
    if (data.transcripts && data.transcripts.length > 0) {
      // Concatenate all transcript segments
      const fullTranscript = data.transcripts
        .map((segment: any) => segment.text)
        .join(" ");
      
      return fullTranscript;
    }
    
    console.warn(`No transcripts found for video ${videoId}`);
    return null;
  } catch (error) {
    console.error(`Error fetching transcript for ${videoId}:`, error);
    return null;
  }
}

async function saveTranscript(video: Video, transcript: string) {
  const fileName = `episodio-${String(video.episode).padStart(2, "0")}.txt`;
  const filePath = `./entre-cordas-e-poesia/${fileName}`;
  
  const header = `Episódio ${video.episode} - ${video.title}
Video ID: ${video.id}
URL: https://www.youtube.com/watch?v=${video.id}

---

`;
  
  const content = header + transcript;
  
  await Deno.writeTextFile(filePath, content);
  console.log(`✓ Saved: ${fileName}`);
}

async function main() {
  console.log("🎬 Fetching YouTube transcripts for 'Entre Cordas e Poesia' series...\n");
  
  let successCount = 0;
  let failCount = 0;

  for (const video of videos) {
    const transcript = await fetchTranscript(video.id);
    
    if (transcript) {
      await saveTranscript(video, transcript);
      successCount++;
    } else {
      failCount++;
    }
    
    // Add a small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log(`\n✅ Done! Successfully fetched ${successCount} transcripts.`);
  
  if (failCount > 0) {
    console.log(`⚠️  Failed to fetch ${failCount} transcripts.`);
  }
}

if (import.meta.main) {
  main();
}
