/**
 * DesRepente - AI-powered repente completion
 * 
 * This page allows users to:
 * - Select a repente style
 * - Fill in some verses
 * - Let AI complete missing verses
 * - Validate metrics and rhymes
 */
import { useState } from "react";
import { createRoute } from "@tanstack/react-router";
import { EstiloSelector } from "../components/EstiloSelector";
import { EstrofeEditor } from "../components/EstrofeEditor";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Sparkles, Check, AlertCircle, Info } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  useEstilos,
  useCompleteEstrofe,
  useValidateEstrofe,
} from "../hooks/useDesrepente";
import { toast } from "sonner";

function DesRepenteComponent() {
  const [estiloSlug, setEstiloSlug] = useState<string>("");
  const [versos, setVersos] = useState<(string | null)[]>([]);
  const [validacao, setValidacao] = useState<any>(null);

  const { data: estilos, isLoading: loadingEstilos } = useEstilos();
  const completeMutation = useCompleteEstrofe();
  const validateMutation = useValidateEstrofe();

  const estiloSelecionado = estilos?.find((e: any) => e.slug === estiloSlug);

  const handleEstiloChange = (slug: string) => {
    setEstiloSlug(slug);
    const estilo = estilos?.find((e: any) => e.slug === slug);
    if (estilo) {
      setVersos(Array(estilo.estrutura.versos_por_estrofe).fill(null));
      setValidacao(null);
    }
  };

  const handleComplete = async () => {
    try {
      const result = await completeMutation.mutateAsync({
        estilo: estiloSlug,
        versos,
      });

      setVersos(result.estrofe_completa);
      setValidacao({
        metricas: result.metricas,
        rimas: result.rimas,
      });

      if (result.metricas.every((m: any) => m.valido) && result.rimas.valido) {
        toast.success("Estrofe completada com sucesso! ✅");
      } else {
        toast.warning("Estrofe completada, mas pode ter problemas de métrica ou rima");
      }
    } catch (error) {
      toast.error(`Erro ao completar estrofe: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    }
  };

  const handleValidate = async () => {
    const versosCompletos = versos.filter((v) => v !== null) as string[];
    
    if (versosCompletos.length !== versos.length) {
      toast.error("Complete todos os versos antes de validar");
      return;
    }

    try {
      const result = await validateMutation.mutateAsync({
        estilo: estiloSlug,
        versos: versosCompletos,
      });

      setValidacao(result);

      if (result.valido) {
        toast.success("Estrofe válida! Métrica e rimas corretas. 🎉");
      } else {
        toast.error("Estrofe com problemas de métrica ou rima");
      }
    } catch (error) {
      toast.error(`Erro ao validar estrofe: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    }
  };

  if (loadingEstilos) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto py-8 px-4">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="text-muted-foreground">Carregando estilos...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400">
                DesRepente
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete estrofes de repente com ajuda da inteligência artificial.
              Escolha um estilo, escreva alguns versos e deixe a IA completar o resto!
            </p>
            <div className="flex justify-center gap-2">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  ← Voltar ao acervo
                </Button>
              </Link>
            </div>
          </div>

          {/* Info Card */}
          <Card className="p-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
            <div className="flex gap-3">
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                  Como funciona?
                </p>
                <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-1 list-decimal list-inside">
                  <li>Escolha um estilo de repente</li>
                  <li>Escreva alguns versos (deixe outros vazios)</li>
                  <li>Clique em "Completar com IA" para preencher os vazios</li>
                  <li>Valide a métrica e rimas da estrofe</li>
                </ol>
              </div>
            </div>
          </Card>

          {/* Main Editor Card */}
          <Card className="p-6 space-y-6">
            <EstiloSelector
              value={estiloSlug}
              onChange={handleEstiloChange}
              estilos={estilos || []}
            />

            {estiloSelecionado && (
              <>
                <EstrofeEditor
                  estilo={estiloSelecionado}
                  versos={versos}
                  onChange={setVersos}
                  validacao={validacao}
                />

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleComplete}
                    disabled={
                      completeMutation.isPending ||
                      versos.every((v) => v !== null)
                    }
                    className="flex-1"
                    size="lg"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    {completeMutation.isPending ? "Completando..." : "Completar com IA"}
                  </Button>

                  <Button
                    onClick={handleValidate}
                    disabled={
                      validateMutation.isPending ||
                      versos.some((v) => v === null)
                    }
                    variant="outline"
                    className="flex-1"
                    size="lg"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    {validateMutation.isPending ? "Validando..." : "Validar Estrofe"}
                  </Button>
                </div>

                {validacao && (
                  <div className={`p-4 rounded-md space-y-3 ${
                    validacao.valido
                      ? "bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800"
                      : "bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800"
                  }`}>
                    <div className="flex items-center gap-2">
                      {validacao.valido ? (
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                      )}
                      <h4 className="font-medium">
                        {validacao.valido ? "Estrofe Válida!" : "Problemas Encontrados"}
                      </h4>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Métrica:</span>
                        <span
                          className={`font-medium ${
                            validacao.metricas?.every((m: any) => m.valido)
                              ? "text-green-600 dark:text-green-400"
                              : "text-red-600 dark:text-red-400"
                          }`}
                        >
                          {validacao.metricas?.every((m: any) => m.valido)
                            ? "✓ Válida"
                            : "✗ Inválida"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Rimas:</span>
                        <span
                          className={`font-medium ${
                            validacao.rimas?.valido
                              ? "text-green-600 dark:text-green-400"
                              : "text-red-600 dark:text-red-400"
                          }`}
                        >
                          {validacao.rimas?.valido ? "✓ Válidas" : "✗ Inválidas"}
                        </span>
                      </div>
                    </div>

                    {!validacao.valido && (
                      <div className="text-xs text-muted-foreground pt-2 border-t">
                        <p>
                          A IA fez o melhor possível, mas pode haver pequenos ajustes necessários.
                          Revise a métrica (contagem de sílabas) e as rimas.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </Card>

          {/* Style Info Card */}
          {estiloSelecionado && (
            <Card className="p-6">
              <h3 className="font-medium text-lg mb-3">
                Sobre {estiloSelecionado.nome}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {estiloSelecionado.resumo}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex gap-2">
                  <strong className="text-muted-foreground min-w-[100px]">Dificuldade:</strong>
                  <span>{estiloSelecionado.dificuldade}</span>
                </div>
                <div className="flex gap-2">
                  <strong className="text-muted-foreground min-w-[100px]">Métrica:</strong>
                  <span>{estiloSelecionado.estrutura.metrica}</span>
                </div>
                <div className="flex gap-2">
                  <strong className="text-muted-foreground min-w-[100px]">Versos:</strong>
                  <span>{estiloSelecionado.estrutura.versos_por_estrofe} por estrofe</span>
                </div>
                <div className="flex gap-2">
                  <strong className="text-muted-foreground min-w-[100px]">Esquema:</strong>
                  <span className="font-mono">{estiloSelecionado.estrutura.esquema_rima}</span>
                </div>
              </div>

              {estiloSelecionado.exemplo && (
                <div className="mt-4 pt-4 border-t">
                  <p className="text-xs text-muted-foreground mb-2">
                    Exemplo{estiloSelecionado.exemplo_autor ? ` (${estiloSelecionado.exemplo_autor})` : ''}:
                  </p>
                  <pre className="text-sm whitespace-pre-wrap font-serif italic text-muted-foreground bg-muted/50 p-3 rounded">
                    {estiloSelecionado.exemplo}
                  </pre>
                </div>
              )}
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default (parentRoute: any) =>
  createRoute({
    path: "/desrepente",
    component: DesRepenteComponent,
    getParentRoute: () => parentRoute,
  });
