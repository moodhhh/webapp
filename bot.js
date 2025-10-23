const TelegramBot = require("node-telegram-bot-api");

// Replace this with your BotFather token
const token = "7108599574:AAH3DGNLaaq60K8P_YCA6lsm0dju-T8vHRU";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Welcome! Tap below to open Magenotez articles 👇", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "📰 Open Articles",
            web_app: { url: "https://moodhhh.github.io/webapp/" } // your GitHub Pages link
          }
        ]
      ]
    }
  });
});
