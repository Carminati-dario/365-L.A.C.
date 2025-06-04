require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// Ottieni il token dalle variabili d'ambiente
const token = process.env.BOT_TOKEN;
if (!token) {
  console.error('BOT_TOKEN non trovato nelle variabili d\'ambiente');
  process.exit(1);
}

// Crea una nuova istanza del bot
const bot = new TelegramBot(token, { polling: true });

// Gestisci il comando /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Elevator Pitch – 365-L.A.C.\n
In Italia, si stima che nei prossimi 10 anni oltre 30 milioni di persone avranno bisogno di occhiali per correggere il focus visivo. Di questi, circa 21 milioni sceglieranno di passare alle lenti a contatto come soluzione principale. Questo cambiamento epocale rappresenta un'enorme opportunità, ma anche una sfida gestionale per i negozi di ottica.\n
365-L.A.C. è la soluzione ideale per affrontare questa evoluzione: un'applicazione progettata specificamente per i centri ottici che aderiscono al contratto annuale per le lenti a contatto. Automatizza la gestione delle forniture quadrimestrali, segnala scadenze contrattuali, permette la prenotazione dei controlli visivi semestrali e semplifica l'organizzazione dei clienti, eliminando la carta e gli errori.\n
A differenza di gestionali generici come Zendesk o Bitrix24, 365-L.A.C. nasce per il tuo settore: aiuta il tuo punto vendita a essere più efficiente, reattivo e pronto a cogliere l'enorme crescita del mercato delle lenti a contatto.`);

});

// Gestisci messaggi non riconosciuti
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  
  // Ignora i comandi che abbiamo già gestito
  if (msg.text && msg.text.startsWith('/start')) {
    return;
  }
  
  bot.sendMessage(chatId, 'Non ho capito. Usa /help per vedere i comandi disponibili.');
});

console.log('Bot avviato con successo!');