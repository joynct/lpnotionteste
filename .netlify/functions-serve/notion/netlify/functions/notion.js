var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify/functions/notion.js
var notion_exports = {};
__export(notion_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(notion_exports);
async function handler(event, context) {
  console.log("--- EXECUTANDO A FUN\xC7\xC3O notion.js (VERS\xC3O COMPLETA) ---");
  const databaseId = process.env.VITE_NOTION_DATABASE_ID;
  const token = process.env.VITE_NOTION_TOKEN;
  console.log("Database ID lido do .env na fun\xE7\xE3o:", databaseId);
  console.log("Token lido do .env na fun\xE7\xE3o:", token);
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
      },
      body: ""
    };
  }
  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Notion-Version": "2022-06-28",
        // Você pode considerar atualizar esta versão para a mais recente se desejar
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        filter: {
          property: "slug",
          // Nome da sua coluna 'slug'
          title: { equals: "landing" }
          // Filtro para o tipo 'Title' com valor 'landing'
        }
      })
    });
    const data = await response.json();
    console.log("Dados recebidos do Notion na fun\xE7\xE3o Netlify (COM FILTRO):", JSON.stringify(data, null, 2));
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error("Erro na API interna:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ error: "Erro ao buscar dados" })
    };
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=notion.js.map
