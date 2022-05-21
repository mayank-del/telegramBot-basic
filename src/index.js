const telegramBot=require('node-telegram-bot-api');
require('dotenv').config()

const TOKEN='5151845311:AAEk9CieASZ2jcIdsiKIFAWq-2HPZ7y69hA';

const bot =new telegramBot(TOKEN,{polling:true})

bot.on('message',(message)=>{
    /* console.log(message.text);
    console.log(message.from.id); */
    let chat_id=message.from.id;
    bot.sendMessage(chat_id,'Hello from Nodejs, HI! I am bot created by mayank-del')
})