/**
 * DesRepente-related tools for AI-powered repente completion.
 * 
 * This file contains all tools related to repente operations including:
 * - COMPLETE_ESTROFE - Complete missing verses using AI
 * - VALIDATE_ESTROFE - Validate metrics and rhymes
 */
import { createTool } from "@deco/workers-runtime/mastra";
import { z } from "zod";
import type { Env } from "../main.ts";
import {
  loadEstilos,
  buildPrompt,
  buildSchema,
  validateMetrics,
  validateRhymes,
} from "../lib/repente-utils.ts";

/**
 * Tool to complete missing verses in a repente estrofe using AI
 */
export const createCompleteEstrofeTool = (env: Env) =>
  createTool({
    id: "COMPLETE_ESTROFE",
    description: "Completa versos faltantes de uma estrofe de repente seguindo regras do estilo (métrica, rima, mote fixo)",
    inputSchema: z.object({
      estilo: z.string().describe("Slug do estilo (ex: 'martelo-alagoano', 'galope-beira-mar')"),
      versos: z.array(z.string().nullable()).describe("Array de versos, com null para os versos a completar"),
    }),
    outputSchema: z.object({
      estrofe_completa: z.array(z.string()).describe("Estrofe com todos os versos completos"),
      metricas: z.array(z.object({
        verso: z.number(),
        silabas: z.number(),
        valido: z.boolean(),
      })),
      rimas: z.object({
        esquema: z.string(),
        valido: z.boolean(),
        pares: z.array(z.object({
          versos: z.array(z.number()),
          rima: z.string(),
          valido: z.boolean(),
        })),
      }),
    }),
    execute: async ({ context }) => {
      try {
        // 1. Load estilos and find the selected one
        const estilos = await loadEstilos();
        const estilo = estilos.find(e => e.slug === context.estilo);
        
        if (!estilo) {
          throw new Error(`Estilo '${context.estilo}' não encontrado`);
        }

        // 2. Identify missing verses
        const versosFaltantes = context.versos
          .map((v, i) => v === null ? i : -1)
          .filter(i => i !== -1);

        if (versosFaltantes.length === 0) {
          // No verses to complete, just validate
          const metricas = validateMetrics(context.versos as string[], estilo);
          const rimas = validateRhymes(context.versos as string[], estilo);

          return {
            estrofe_completa: context.versos as string[],
            metricas,
            rimas,
          };
        }

        // 3. Build prompt for AI
        const prompt = buildPrompt(estilo, context.versos, versosFaltantes);

        // 4. Build schema for AI response
        const schema = buildSchema(versosFaltantes);

        // 5. Generate verses with AI
        const result = await env.AI_GATEWAY.AI_GENERATE_OBJECT({
          messages: [{
            role: 'system',
            content: 'Você é um mestre em repente nordestino, especializado em criar versos que seguem perfeitamente as regras métricas e de rima de cada estilo.'
          }, {
            role: 'user',
            content: prompt
          }],
          schema,
          temperature: 0.8,
          maxTokens: 1000,
        });

        if (!result.object) {
          throw new Error('IA não retornou versos completos');
        }

        // 6. Build complete estrofe
        const estrofeCompleta = context.versos.map((v, i) => {
          if (v === null) {
            return result.object[`verso_${i}`] || '';
          }
          return v;
        });

        // 7. Validate metrics and rhymes
        const metricas = validateMetrics(estrofeCompleta, estilo);
        const rimas = validateRhymes(estrofeCompleta, estilo);

        return {
          estrofe_completa: estrofeCompleta,
          metricas,
          rimas,
        };
      } catch (error) {
        console.error('Error in COMPLETE_ESTROFE:', error);
        throw new Error(`Falha ao completar estrofe: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
      }
    },
  });

/**
 * Tool to validate metrics and rhymes of a complete estrofe
 */
export const createValidateEstrofeTool = (env: Env) =>
  createTool({
    id: "VALIDATE_ESTROFE",
    description: "Valida métrica (contagem silábica) e rimas de uma estrofe de repente",
    inputSchema: z.object({
      estilo: z.string().describe("Slug do estilo"),
      versos: z.array(z.string()).describe("Array de versos completos"),
    }),
    outputSchema: z.object({
      valido: z.boolean().describe("True se estrofe é válida (métrica + rimas corretas)"),
      metricas: z.array(z.object({
        verso: z.number(),
        silabas: z.number(),
        valido: z.boolean(),
      })),
      rimas: z.object({
        esquema: z.string(),
        valido: z.boolean(),
        pares: z.array(z.object({
          versos: z.array(z.number()),
          rima: z.string(),
          valido: z.boolean(),
        })),
      }),
    }),
    execute: async ({ context }) => {
      try {
        // Load estilos and find the selected one
        const estilos = await loadEstilos();
        const estilo = estilos.find(e => e.slug === context.estilo);
        
        if (!estilo) {
          throw new Error(`Estilo '${context.estilo}' não encontrado`);
        }

        // Validate metrics and rhymes
        const metricas = validateMetrics(context.versos, estilo);
        const rimas = validateRhymes(context.versos, estilo);

        return {
          valido: metricas.every(m => m.valido) && rimas.valido,
          metricas,
          rimas,
        };
      } catch (error) {
        console.error('Error in VALIDATE_ESTROFE:', error);
        throw new Error(`Falha ao validar estrofe: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
      }
    },
  });

// Export all desrepente-related tools
export const desrepenteTools = [
  createCompleteEstrofeTool,
  createValidateEstrofeTool,
];
