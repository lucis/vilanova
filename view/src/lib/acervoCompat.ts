/**
 * Camada de compatibilidade para componentes existentes
 * Permite usar a nova estrutura sem quebrar os componentes atuais
 */

import indexData from "../../../public/data/index.json";

// Importa todas as cantorias individuais
import oitavasOsNonatos from "../../../public/data/cantorias/oitavas-os-nonatos-sao-lourenco.json";
import galopeSerra from "../../../public/data/cantorias/galope-os-nonatos-serra-talhada.json";
import galopeSebastiaoIvanildo from "../../../public/data/cantorias/galope-sebastiao-ivanildo.json";
import marteloAlagoano from "../../../public/data/cantorias/martelo-alagoano.json";
import galopeHipolitoRogerio from "../../../public/data/cantorias/galope-hipolito-rogerio-tv.json";
import desafioZeCardosoLouro from "../../../public/data/cantorias/desafio-ze-cardoso-louro-branco.json";
import galopeValdirMoacir from "../../../public/data/cantorias/galope-valdir-teles-moacir-laurentino.json";
import marteloValdirZe from "../../../public/data/cantorias/martelo-alagoano-valdir-teles-ze-cardoso.json";
import desafioValdirZe from "../../../public/data/cantorias/desafio-valdir-teles-ze-cardoso-bonito.json";
import homenagemDelmiro from "../../../public/data/cantorias/homenagem-delmiro-gouveia.json";
import sextilhaLampiao from "../../../public/data/cantorias/sextilha-lampiao-gruta-angicos.json";
import marteloValdirZe2 from "../../../public/data/cantorias/martelo-alagoano-valdir-teles-ze-cardoso-2.json";
import pensamentoPositivo from "../../../public/data/cantorias/pensamento-positivo-os-nonatos.json";
import nordesteIndependente from "../../../public/data/cantorias/nordeste-independente-braulio-ivanildo.json";
import viuvaNamoradeira from "../../../public/data/cantorias/viuva-namoradeira-ze-galdino-daniel-olimpio.json";

/**
 * Agrega todas as cantorias em um único objeto compatível com o formato antigo
 * Usado pelos componentes que ainda esperam acervo.json
 */
const acervoData = {
  $schema: "https://json-schema.org/draft-07/schema#",
  title: "Acervo Estruturado de Repentes - Vilanova",
  description: "Catálogo completo (gerado automaticamente da nova estrutura modular)",
  repentes: [
    oitavasOsNonatos,
    galopeSerra,
    galopeSebastiaoIvanildo,
    marteloAlagoano,
    galopeHipolitoRogerio,
    desafioZeCardosoLouro,
    galopeValdirMoacir,
    marteloValdirZe,
    desafioValdirZe,
    homenagemDelmiro,
    sextilhaLampiao,
    marteloValdirZe2,
    pensamentoPositivo,
    nordesteIndependente,
    viuvaNamoradeira,
  ],
  metadata: (indexData as any).metadata,
};

export default acervoData;

