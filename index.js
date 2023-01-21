const TelegramApi = require('node-telegram-bot-api');

const token = '5851867997:AAHHk1nuV5amA9KLNvOmIXbSy5qPhTEKJxw';

let bot = new TelegramApi(token, {polling: true});

bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Ты написал мне ${text}`);
})