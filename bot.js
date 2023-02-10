const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN);

const web_link = "https://food-telegram.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome, Can I have your order", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
