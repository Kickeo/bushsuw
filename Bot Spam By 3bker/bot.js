const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("550356432269082679")
setInterval(function() {
channel.send(`hi hello`);
}, 30)
})

client.login(process.env.BOT_TOKEN);