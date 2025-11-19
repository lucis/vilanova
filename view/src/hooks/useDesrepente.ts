/**
 * Custom hooks for DesRepente functionality
 * 
 * These hooks wrap RPC calls with TanStack Query for optimal
 * loading states, caching, and error handling.
 */
import { useMutation, useQuery } from "@tanstack/react-query";
import { client } from "../lib/rpc";

/**
 * Hook to complete missing verses in an estrofe using AI
 */
export const useCompleteEstrofe = () => {
  return useMutation({
    mutationFn: (input: { estilo: string; versos: (string | null)[] }) =>
      client.COMPLETE_ESTROFE(input),
  });
};

/**
 * Hook to validate metrics and rhymes of a complete estrofe
 */
export const useValidateEstrofe = () => {
  return useMutation({
    mutationFn: (input: { estilo: string; versos: string[] }) =>
      client.VALIDATE_ESTROFE(input),
  });
};

/**
 * Hook to load all available estilos
 */
export const useEstilos = () => {
  return useQuery({
    queryKey: ["estilos"],
    queryFn: async () => {
      const response = await fetch("/data/estilos.json");
      if (!response.ok) {
        throw new Error("Falha ao carregar estilos");
      }
      const data = await response.json();
      return data.estilos;
    },
    staleTime: 5 * 60 * 1000, // Consider fresh for 5 minutes
  });
};
