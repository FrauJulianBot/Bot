const Discord                       = require('discord.js');
const bot                           = new Discord.Client();

bot.on('ready', async () => {
    console.log('Bot is Started');
    bot.user.setActivity('FrauJulian and ItzDave', {type: 'PLAYING'});
});




bot.login('ODA1MTU1ODc2MDk2ODM1NjE0.YBWx1w.3lzaS3Awb_hMcyXZy7gkvQjtu3E');