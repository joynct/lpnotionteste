export async function handler(event, context) {
  console.log('--- EXECUTANDO A FUNÇÃO notion.js (VERSÃO COMPLETA) ---');
  const databaseId = process.env.VITE_NOTION_DATABASE_ID;
  const token = process.env.VITE_NOTION_TOKEN;

  console.log('Database ID lido do .env na função:', databaseId);
  console.log('Token lido do .env na função:', token);

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
      },
      body: ''
    };
  }

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Notion-Version": "2022-06-28", // Você pode considerar atualizar esta versão para a mais recente se desejar
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: {
          property: "slug", // Nome da sua coluna 'slug'
          title: { equals: "landing" } // Filtro para o tipo 'Title' com valor 'landing'
        }
      })
    });

    const data = await response.json();

    console.log('Dados recebidos do Notion na função Netlify (COM FILTRO):', JSON.stringify(data, null, 2));

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error("Erro na API interna:", error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: "Erro ao buscar dados" })
    };
  }
}