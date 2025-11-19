/**
 * EstrofeEditor - Edit repente verses with validation feedback
 */
import { Textarea } from "./ui/textarea";
import { Check, X } from "lucide-react";

interface Estilo {
  nome: string;
  estrutura: {
    metrica: string;
    versos_por_estrofe: number;
    esquema_rima: string;
    obrigatoriedade?: string;
  };
}

interface EstrofeEditorProps {
  estilo: Estilo;
  versos: (string | null)[];
  onChange: (versos: (string | null)[]) => void;
  validacao?: {
    metricas?: Array<{
      verso: number;
      silabas: number;
      valido: boolean;
    }>;
    rimas?: {
      esquema: string;
      valido: boolean;
    };
  };
}

export function EstrofeEditor({ estilo, versos, onChange, validacao }: EstrofeEditorProps) {
  const handleVersoChange = (index: number, value: string) => {
    const novosVersos = [...versos];
    novosVersos[index] = value || null;
    onChange(novosVersos);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h3 className="font-medium text-lg">{estilo.nome}</h3>
        <div className="text-sm text-muted-foreground">
          <span className="font-medium">{estilo.estrutura.metrica}</span>
          {' • '}
          <span>Rima: {estilo.estrutura.esquema_rima}</span>
        </div>
      </div>

      {estilo.estrutura.obrigatoriedade && (
        <div className="p-3 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-md">
          <p className="text-sm font-medium text-amber-900 dark:text-amber-100">
            ⚠️ {estilo.estrutura.obrigatoriedade}
          </p>
        </div>
      )}

      <div className="space-y-2">
        {Array.from({ length: estilo.estrutura.versos_por_estrofe }).map((_, i) => {
          const metrica = validacao?.metricas?.[i];
          const isValid = metrica?.valido;
          const showValidation = metrica !== undefined;

          return (
            <div key={i} className="flex items-start gap-2">
              <span className="text-sm text-muted-foreground w-6 pt-3">{i + 1}.</span>
              <div className="flex-1 relative">
                <Textarea
                  value={versos[i] || ""}
                  onChange={(e) => handleVersoChange(i, e.target.value)}
                  placeholder={`Verso ${i + 1}... (deixe vazio para completar com IA)`}
                  className={`min-h-[60px] resize-none ${
                    showValidation
                      ? isValid
                        ? "border-green-500 dark:border-green-600"
                        : "border-red-500 dark:border-red-600"
                      : ""
                  }`}
                />
                {showValidation && (
                  <div className="absolute right-2 top-2 flex items-center gap-2 bg-background/90 px-2 py-1 rounded">
                    <span className="text-xs text-muted-foreground">
                      {metrica.silabas} síl.
                    </span>
                    {isValid ? (
                      <Check className="w-4 h-4 text-green-600 dark:text-green-500" />
                    ) : (
                      <X className="w-4 h-4 text-red-600 dark:text-red-500" />
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
