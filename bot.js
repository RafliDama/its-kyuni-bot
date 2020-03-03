const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'NjgzODQwMTgyMzc3OTA2MTky.XlxZ3w.sFjqAPv1BSdvDiEqJu6_SkPNUAs';

const PREFIX = 'ts!';

var version = 'Version Still ALPHA 1.0.0';

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity("ts! for command", { type: 'LISTENING'}).catch(console.error);
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    if(message.content === "what your name bot?"){
        message.reply("My name is kyuni!");
    }

    if(message.content === "who create you bot?"){
        message.reply("My creator name is Alpha, He is create me by Visual Studio Code!");
    }

    if(message.content === "HELLO"){
        message.reply("Hey! Good Too See You!");
    }

    if(message.content === "how are you bot?"){
        message.reply("Im Fine! Thanks For Asking!");
    }

module.exports.run = async (bot, message, args) => {

    if(message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("You can't use this Command!!")

    let argsresult;
    let mChannel = message.mentions.channel.first()

    message.deleted()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        mChannel.send(argsresult)
    } else {
        agrsresult = args.join(" ")
        message.channel.send(agrsresult)

    }


}


module.exports.config = {
    name: "say",
    description: "sends message",
    accessabley: "Mods",
    aliases: ["acc", "announcements"]
}

    switch(args[0]){
        case 'Hey':
            message.channel.send('Hello!')
            break;
        case 'website':
            message.channel.send('Not yet')
            break;
        case 'info':
            if(args[1] === 'version'){
                 message.channel.send(version);
            }else{
                message.channel.send('Invalid Args')
            }
            break;  
        case 'clear':
            if(!args[1]) return message.reply('Error please define second arg')
            message.channel.bulkDelete(args[1]);
            break;  

    }
        
})

bot.login(token);
