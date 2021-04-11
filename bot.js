// discord bot

const Discord = require("discord.js");

const embed = new Discord.MessageEmbed();
const client = new Discord.Client();
const discordBotToken = ""; // paste your bot token between the quotes
var discordPrefix = ",";
var userMentionned =  0;
var reason = "none";
const logsChannel = client.channels.get(797977942557851678);
const nextEmote = "▶";
const previousEmote = "◀";
const staffs = [ 598868304769187842, 469576772048912394, 447432117669068800, 271008178169315338, 125952165616418816, 533016846031650826 ];
const welcomeChannel = client.channels.get(797965608721448980);

client.on("ready", () => {
    
    console.log("Bot connected as " +client.user.tag +" !")
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
    
    console.log("The user <@" +userJoined +"> joined the server !");
    embed.setColor("#");
    embed.setAuthor(userJoined);
    embed.setTitle(`**A user joined the server !**`);
    embed.setDescription("The user <@" +userJoined +"> joined the server.");
    welcomeChannel.send(embed);
    
});

client.on("guildMemberRemove", userLeft => {
    
    console.log("The user <@" +userLeft +"> left the server !");
    embed.setColor("#1D7EEB");
    embed.setAuthor(userLeft);
    embed.setTitle("**A user left the server !**");
    embed.setDescription("The user <@" +userLeft +"> left the server.");
    welcomeChannel.send(embed);
    
});

client.on("guildMemberKick", userKicked => {
    
    console.log("The user <@" +userKicked +"> was kicked !");
    embed.setColor("#1D7EEB");
    embed.setAuthor(userKicked);
    embed.setTitle("**A user was kicked !**");
    embed.setDescription("The user <@" +userKicked +"> was kicked from the server.");
    logsChannel.send(embed);
    
});

client.on("guildMemberBan, userBanned => {
    
    console.log("The user <@"+ userBanned +"> was banned from the server " +userBanned.guild.name +" !");
    embed.setColor("#1D7EEB");
    embed.setAuthor(userBanned);
    embed.setTitle("**A user was banned !**");
    embed.setDescription("The user <@" +userBanned +"> was banned from the server.");
    logsChannel.send(embed);
    
});

client.on("message", msg => {
    
    if (msg.content.startsWith === discordPrefix +"help") {
        
        if (msg.channel.id === 812346669815037963) {
            
            if (msg.author.bot) {
                
                console.log("The bot <@" +msg.author +"> tried to use the ,help command !");
                embed.setColor("#1D7EEB");
                embed.setAuthor(msg.author);
                embed.setTitle("**A bot tried to use a command !**");
                embed.setDescription("The bot <@" +msg.author +"> tried to use the ,help command.");
                logsChannel.send(embed);
                
            } else {
                
                embed.setColor("#1D7EEB");
                embed.setAuthor(msg.author);
                embed.setTitle("Marscoin bot help page");
                embed.setDescription("**Help page :**\n\n**🌐General commands :**");
                msg.channel.send(embed);
                msg.react(previousEmote);
                msg.react(nextEmote);
                
            };
            
        } else {
            
            console.log("The user <@" +msg.author +"> tried to use the ,help command in the channel " +msg.channel.name +" !");
            msg.channel.send("You can't use the command on this channel !");
            
        };
        
    };
    if (msg.content.startsWith === discordPrefix +"kick") {
        
        if (msg.author.bot) {
            
            console.log("The bot <@" +msg.author +" tried to use the ,kick command !");
            embed.setColor("#1D7EEB");
            embed.setAuthor(msg.author);
            embed.setTitle("**A bot tried to use a command !**");
            embed.setDescription("The bot <@" +msg.author +"> tried to use the ,kick command !");
            logsChannel.send(botEmbed);
            
        } else {
            
            if (msg.author.id in staffs) {
                userMentionned = msg.mentions.members.first().id;
                if (userMentionned in staffs) {
                    
                    console.log("The user " +msg.author +" tried to ban  staff member.");
                    
                } else {
                    
                    reason = msg.content.slice(discordPrefix.length +23).trim();
                    userMentionned.kick(reason);
                    embed.setColor("#1D7EEB");
                    embed.setAuthor(msg.author);
                    embed.setTitle("**User was kicked !**");
                    embed.setDescription("The user <@" +kickUser +"> was kicked from the server for " +kickUserReason +" .");
                    logsChannel.send(embed);
                    userMentionned = 0;
                    reason = "none";
                    
                };
                
            } else {
                
                console.log("The user <@" +msg.author +"> tried to kick a user but is not in the staff !");
                embed.setColor("#FF0000");
                embed.setAuthor(msg.author);
                embed.setTitle("**A user tried to kick an other user !**");
                embed.setDescription("The user <@" +msg.author +"> tried to kick a user but is a member of the staff.");
                logsChannel.send(embed);
                msg.channel.send("You don't have the access to this command !");
                
            };
            
        };
        
    };
    if (msg.content.startsWith === discordPrefix +"ban") {
        
        if (msg.author.bot) {
            
            console.log("The bot <@" +msg.author +" tried to use the ban command !");
            embed.setColor("#FF0000");
            embed.setAuthor(msg.author);
            embed.setTitle("**A bot tried to use the ,ban command !**");
            embed.setDescription("The bot <@" +msg.author +"> tried to use the ,ban commannd.");
            logsChannel.send(embed);
            
        } else {
            
            if (msg.author.id in staffs) {
                
                userMentionned = msg.mentions.members.first().id;
                reason = msg.content.slice().trim();
                userMentionned.ban(reason);
                console.log("The user " +userMentionned +" was banned from the server for " +reason +" by " +msg.author +" .");
                embed.setColor("#00FF00");
                embed.setAuthor(msg.author);
                embed.setTitle("**User banned !**");
                embed.setDescription("The user <@" +userMentionned +"> was banned from the server.");
                msg.channel.send(embed);
                embed.setColor("#00FF00");
                embed.setAuthor(msg.author);
                embed.setTitle("**User banned !**");
                embed.setDescription("The user <@" +userMentionned +"> was banned from the server for <@" +reason +"> by <@" +msg.author +"> .");
                logsChannel.send(embed);
                userMentionned = 0;
                reason = "none";
                
            } else {
                
                console.log("The user <@" +msg.author +"> tried to ban the user <@" +userMentionned +"> for " +reason +" .");
                msg.channel.send("You are not in the staff members, you can't ban the others.");
                embed.setColor("#FF0000");
                embed.setAuthor(msg.author);
                embed.setTitle("**A user tried to ban an other user !**");
                embed.setDescription("The user <@" +msg.author +"> tried to ban the user <@" +userMentionned +"> for " +reason +" .");
                logsChannel.send(embed);
                userMentionned = 0;
                reason = "none";
                
            };
            
        };
        
    };
    
});

client.login(discordBotToken);

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
        
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<html>\n    \n    <head>\n        \n        \n        \n</head>\n    <body>\n        \n        <p>version 0 web page, coding it</p>\n        \n    </body>\n</html>");
        
    };
    if (page == "/config") {
        
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<html>\n    \n    <head>\n        \n        \n        \n</head>\n    <body>\n        \n        <p>version 0 web page, coding it</p>\n        \n    </body>\n</html>");
        
    };
    
});
