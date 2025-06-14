# Landing Page Solar com Notion CMS

Uma landing page moderna e responsiva para empresas de energia solar, com integração ao Notion como CMS e formulários Netlify.

## 🚀 Funcionalidades

- **Design Responsivo**: Otimizado para todos os dispositivos
- **CMS Notion**: Conteúdo dinâmico carregado via API do Notion
- **Netlify Forms**: Sistema de captura de leads integrado
- **Loading States**: Estados de carregamento elegantes
- **Animações Suaves**: Transições e efeitos modernos
- **SEO Otimizado**: Meta tags e estrutura semântica

## 📋 Configuração

### 1. Variáveis de Ambiente

Crie um arquivo `.env` baseado no `.env.example`:

```env
VITE_NOTION_TOKEN=seu_token_secreto_do_notion
VITE_NOTION_DATABASE_ID=seu_database_id_do_notion
```

### 2. Configuração do Notion

Crie uma database no Notion com as seguintes propriedades:

- `slug` (Text) - Use "landing" para a página principal
- `titulo_principal` (Title) - Título principal da página
- `banner_url` (URL) - URL da imagem do banner
- `descricao_titulo` (Text) - Título da seção de descrição
- `descricao_texto` (Text) - Texto da descrição (suporta múltiplos parágrafos)

### 3. Token do Notion

1. Acesse [Notion Developers](https://www.notion.so/my-integrations)
2. Crie uma nova integração
3. Copie o token secreto
4. Compartilhe sua database com a integração criada

### 4. Deploy no Netlify

1. Conecte seu repositório ao Netlify
2. Configure as variáveis de ambiente no painel do Netlify
3. O formulário será automaticamente processado pelo Netlify Forms

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📱 Funcionalidades do Formulário

- Validação em tempo real
- Estados de loading
- Mensagem de sucesso
- Integração automática com Netlify Forms
- Campos otimizados para leads de energia solar

## 🎨 Personalização

- Cores no arquivo `style.css` (variáveis CSS)
- Conteúdo estático pode ser editado diretamente no HTML
- Conteúdo dinâmico é gerenciado pelo Notion
- Imagens podem ser alteradas via Notion ou substituídas por URLs do Pexels

## 📊 Estrutura do Projeto

```
├── index.html          # Página principal
├── style.css           # Estilos e responsividade
├── .env.example        # Exemplo de configuração
└── README.md           # Documentação
```

## 🌟 Recursos Incluídos

- **Hero Section**: Com call-to-action principal
- **Banner Dinâmico**: Imagem carregada do Notion
- **Seção de Benefícios**: Cards com vantagens da energia solar
- **Formulário de Lead**: Captura qualificada de interessados
- **Footer Profissional**: Informações de contato

## 🚀 Performance

- Carregamento otimizado de imagens
- CSS minificado e otimizado
- JavaScript modular
- Fallbacks para conteúdo offline
- Loading states para melhor UX

## 📞 Suporte

Para dúvidas ou problemas, consulte a documentação do Notion API e Netlify Forms.