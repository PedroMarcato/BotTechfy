# 🤖 Bot Discord - Olá Mundo com Botão

Bot Discord em Node.js que responde "Olá mundo" quando você pressiona um botão!

## 📋 Pré-requisitos

- Node.js instalado (versão 16.9.0 ou superior)
- Uma conta Discord
- Um servidor Discord onde você tem permissões de administrador

## 🚀 Configuração

### 1. Criar o Bot no Discord Developer Portal

1. Acesse https://discord.com/developers/applications
2. Clique em **"New Application"** e dê um nome ao seu bot
3. Vá para a aba **"Bot"** no menu lateral
4. Clique em **"Add Bot"**
5. Em **"Privileged Gateway Intents"**, ative:
   - ✅ Message Content Intent
   - ✅ Server Members Intent (opcional)
6. Copie o **Token** (guarde em local seguro!)

### 2. Adicionar o Bot ao Servidor

1. Ainda no Developer Portal, vá para **"OAuth2"** > **"URL Generator"**
2. Em **Scopes**, selecione:
   - ✅ `bot`
   - ✅ `applications.commands`
3. Em **Bot Permissions**, selecione:
   - ✅ Send Messages
   - ✅ Read Messages/View Channels
   - ✅ Use Slash Commands
4. Copie a URL gerada no final da página
5. Cole no navegador e adicione o bot ao seu servidor

### 3. Configurar o Projeto

1. Abra o terminal nesta pasta
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` (copie do `.env.example`):
   ```bash
   copy .env.example .env
   ```

4. Edite o arquivo `.env` e adicione seu token:
   ```
   DISCORD_TOKEN=seu_token_aqui
   CLIENT_ID=seu_client_id_aqui
   ```

## ▶️ Executar o Bot

```bash
npm start
```

Você verá a mensagem: `✅ Bot online como NomeDoBot#1234`

## 🎮 Como Usar

1. No seu servidor Discord, digite: `!botao`
2. O bot enviará uma mensagem com um botão
3. Clique no botão **"Clique aqui! 👋"**
4. O bot responderá: **"🌍 Olá mundo!"**

## 📁 Estrutura do Projeto

```
BotTechV1/
├── bot.js           # Código principal do bot
├── package.json     # Dependências do projeto
├── .env            # Configurações (não commitar!)
├── .env.example    # Exemplo de configurações
├── .gitignore      # Arquivos ignorados pelo Git
└── README.md       # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **discord.js v14** - Biblioteca para interagir com a API do Discord
- **dotenv** - Gerenciamento de variáveis de ambiente

## 📝 Notas

- O token do bot é **SECRETO**! Nunca compartilhe ou faça commit dele
- Se o token vazar, regenere imediatamente no Developer Portal
- O bot precisa estar online para funcionar

## 🔧 Solução de Problemas

**Bot não conecta:**
- Verifique se o token está correto no arquivo `.env`
- Certifique-se de que o arquivo `.env` existe (não é `.env.example`)

**Bot não responde:**
- Verifique se o "Message Content Intent" está ativado no Developer Portal
- Certifique-se de que o bot tem permissões no canal

**Erro ao instalar dependências:**
- Verifique se o Node.js está instalado: `node --version`
- Tente limpar o cache: `npm cache clean --force`

## 📚 Próximos Passos

Você pode expandir este bot adicionando:
- Mais comandos e botões
- Comandos slash (/)
- Sistema de moderação
- Integração com APIs
- Banco de dados
- E muito mais!

---

Feito com ❤️ usando Discord.js
