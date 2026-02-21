require('dotenv').config();
const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

// Criar o cliente do bot
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

// Evento quando o bot estiver online
client.once('ready', () => {
  console.log(`✅ Bot online como ${client.user.tag}`);
  console.log(`📋 Use !botao para criar o botão interativo`);
});

// Evento para mensagens
client.on('messageCreate', async (message) => {
  // Ignorar mensagens de bots
  if (message.author.bot) return;

  // Comando para criar o botão
  if (message.content === '!botao') {
    // Criar o botão
    const botao = new ButtonBuilder()
      .setCustomId('botao_ola_mundo')
      .setLabel('Clique aqui!')
      .setStyle(ButtonStyle.Primary)
      .setEmoji('👋');

    // Criar uma linha de ação com o botão
    const row = new ActionRowBuilder()
      .addComponents(botao);

    // Enviar mensagem com o botão
    await message.reply({
      content: 'Pressione o botão abaixo:',
      components: [row]
    });
  }
});

// Evento para interações (cliques em botões)
client.on('interactionCreate', async (interaction) => {
  // Verificar se é um botão
  if (!interaction.isButton()) return;

  // Verificar se é o botão "olá mundo"
  if (interaction.customId === 'botao_ola_mundo') {
    // Responder com "Olá mundo"
    await interaction.reply({
      content: '🌍 **Olá mundo!**',
      ephemeral: false // false = todos veem, true = só quem clicou vê
    });
  }
});

// Login do bot
client.login(process.env.DISCORD_TOKEN);