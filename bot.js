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
    
    console.log(`The user ${} left the server !`);
    welcomeChannel.send(goodbyeEmbed);
    
});

client.on("guildMemberKick" userKicked => {
    
    console.log(`The user ${userKicked} was kicked by ${} for ${} !`);
    kickEmbed.setColor("#");
    kickEmbed.setAuthor();
    kickEmbed.setTitle(`The user ${userKicked} was kicked by ${}`);
    logsChannel.send(kickEmbed);
    
});

client.on("message", msg => {
    
    if (msg.content.startsWith === discordPrefix +"help") {
        
        if (msg.channel.id === 812346669815037963) {
            
            if (msg.author.bot) {
                
                console.log(`The bot ${msg.author} tried to use the ,help command !`);
                botHelpEmbed.setColor("#");
                botHelpEmbed.setAuthor("");
                botHelpEmbed.setTitle("");
                botHelpEmbed.setDescription(`The bot ${msg.author} tried to use the ,help command.\nHe tried the ${Date.year}`);
                logsChannel.send(botHelpEmbed);
                
            } else {
                
                helpEmbed.setColor("#");
                helpEmbed.setAuthor(msg.author);
                helpEmbed.setTitle("Marscoin bot help page");
                helpEmbed.setDescription("**Help page :**\n\n**🌐General commands :**");
                msg.channel.send(helpEmbed);
                
            };
            
        } else {
            
            
            
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
    
});
