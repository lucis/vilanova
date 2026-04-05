import fs from "node:fs";
import path from "node:path";
import type { AcervoData, Cantoria, EstilosData, Musica } from "./types";

const root = process.cwd();

export function getRepentes(): Cantoria[] {
  const dir = path.join(root, "public/data/cantorias");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) =>
      JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8")) as Cantoria,
    );
}

export function getAcervoData(): Pick<AcervoData, "repentes" | "metadata"> {
  const indexRaw = fs.readFileSync(
    path.join(root, "public/data/index.json"),
    "utf-8",
  );
  const indexData = JSON.parse(indexRaw) as { metadata: AcervoData["metadata"] };
  return {
    repentes: getRepentes(),
    metadata: indexData.metadata,
  };
}

export function getEstilosData(): EstilosData {
  const raw = fs.readFileSync(
    path.join(root, "public/data/estilos.json"),
    "utf-8",
  );
  return JSON.parse(raw) as EstilosData;
}

export function getMusicasIndex(): {
  musicas: Array<{
    id: string;
    slug: string;
    titulo: string;
    artista: string;
    estilo_referencia: string;
    youtube?: string;
  }>;
  metadata: { total_estrofes: number };
} {
  const raw = fs.readFileSync(
    path.join(root, "public/data/musicas-index.json"),
    "utf-8",
  );
  return JSON.parse(raw);
}

export function loadMusicaById(id: string): Musica {
  const p = path.join(root, "public/data/musicas", `${id}.json`);
  return JSON.parse(fs.readFileSync(p, "utf-8")) as Musica;
}
