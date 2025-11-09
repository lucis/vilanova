/**
 * EstiloSelector - Select repente style
 */
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface Estilo {
  slug: string;
  nome: string;
  resumo: string;
  dificuldade: string;
  estrutura: {
    metrica: string;
    versos_por_estrofe: number;
    esquema_rima: string;
  };
}

interface EstiloSelectorProps {
  value: string;
  onChange: (slug: string) => void;
  estilos: Estilo[];
}

export function EstiloSelector({ value, onChange, estilos }: EstiloSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Estilo de Repente</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecione um estilo..." />
        </SelectTrigger>
        <SelectContent>
          {estilos.map((estilo) => (
            <SelectItem key={estilo.slug} value={estilo.slug}>
              <div className="flex items-center justify-between w-full">
                <span className="font-medium">{estilo.nome}</span>
                <span className="text-xs text-muted-foreground ml-4">
                  {estilo.estrutura.versos_por_estrofe} versos • {estilo.estrutura.metrica}
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
