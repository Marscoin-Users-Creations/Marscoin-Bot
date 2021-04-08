// discord bot

const Discord = require("discord.js");

const botHelpEmbed = new Discord.MessageEmbed();
const client = new Discord.Client();
const goodbyEmbed = new Discord.MessageEmbed();
const kickEmbed = new Discord.MessageEmbed();
var logsChannel = client.channels.get(797977942557851678);
var discordPrefix = ",";
var welcomeChannel = client.channels.get(797965608721448980);
const welcomeEmbed = new Discord.MessageEmbed();

client.on("ready", () => {
    
    console.log(`Bot connected as ${client.user.tag} !`)
    console.log("The discord bot is ready !");
    client.user.setPresence({
        
        game: {
            
            name: "Marscoin Bot **,help**",
            type: "PLAYING"
            
        },
        status: "idle"
        
    });
    
});

client.on("guildMemberAdd", userJoined => {
    
    console.log(`The user ${guildMemberAdd} joined the server !`);
    welcomeEmbed.setColor("#");
    welcomeEmbed.setAuthor(guildMemberAdd);
    welcomeEmbed.setTitle(`**The user ${guildMemberAdd} joined the server !**`);
    welcomeChannel.send(welcomeEmbed);
    
});

client.on("guildMemberRemove", userLeft => {
    
    console.log(`The user ${serLeft} left the server !`);
    goodbyeEmbed.setColor("#1D7EEB");
    goodbyeEmbed.setAuthor(userLeft);
    welcomeChannel.send(goodbyeEmbed);
    
});

client.on("guildMemberKick" userKicked => {
    
    console.log(`The user ${userKicked} was kicked !`);
    kickEmbed.setColor("#1D7EEB");
    kickEmbed.setAuthor(userKicked);
    kickEmbed.setTitle(`The user ${userKicked} was kicked !`);
    logsChannel.send(kickEmbed);
    
});

client.on("guildMemberBan, userBanned => {
    
    console.log(`The user ${userBanned} was banned from the server ${userBanned.guild.name}!`);
    banEmbed.setColor("#1D7EEB");
    banEmbed.setAuthor(userBanned);
    banEmbed.setTitle(`The user ${userBanned} was banned !`);
    
});

client.on("message", msg => {
    
    if (msg.content.startsWith === discordPrefix +"help") {
        
        if (msg.channel.id === 812346669815037963) {
            
            if (msg.author.bot) {
                
                console.log(`The bot ${msg.author} tried to use the ,help command !`);
                botHelpEmbed.setColor("#1D7EEB");
                botHelpEmbed.setAuthor(msg.author);
                botHelpEmbed.setTitle("**Bot tried to use a command !**");
                botHelpEmbed.setDescription(`The bot ${msg.author} tried to use the ,help command.\nHe tried the ${Date.year}`);
                logsChannel.send(botHelpEmbed);
                
            } else {
                
                helpEmbed.setColor("#1D7EEB");
                helpEmbed.setAuthor(msg.author);
                helpEmbed.setTitle("Marscoin bot help page");
                helpEmbed.setDescription("**Help page :**\n\n**🌐General commands :**");
                msg.channel.send(helpEmbed);
                
            };
            
        } else {
            
            console.log(`The user ${msg.author} tried to use the ,help command in the channel ${msg.channel.name} !`);
            msg.channel.send("You can't use the command on this channel !");
            
        };
        
    };
    
});

// twitter bot

const twitter = require("twitter");

const client = new twitter({
    
    consumer_key: "",
    consumer_secret: "",
    access_token_key: "",
    access_token_secret: ""
    
});

// web management

const http = require("http");
const url = require("url");

const httpServer = http.createServer(function (req, res) {
    
    var page = url.parse(req.res).pathname;
    
    if (page == "/home") {
        
        
        
    };
    if (page == "/config") {
        
        
        
    };
    
});
