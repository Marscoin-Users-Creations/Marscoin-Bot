// discord bot

const Discord = require("discord.js");
const client = new Discord.Client();


const config = require("./config.json");

const botToken = config["bot"["token"]]; // paste your bot token between the quotes

var discordPrefix = ",",
    newPrefix = ",";

const nextEmote = "▶",
      previousEmote = "◀";

const staffs = [ 598868304769187842, 469576772048912394, 447432117669068800, 271008178169315338, 125952165616418816, 533016846031650826 ];

const logsChannel = client.channels.get(config["channels"["logs"]]),
      welcomeChannel = client.channels.get(797965608721448980);

const marscoinEmoteId = client.emojis.find(emoji => emoji.id(812093126717210635));

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
                embed.setDescription(config.commands.help);
                msg.channel.send(embed).then(msg => {
                    
                    msg.react(previousEmote);
                    msg.react(nextEmote);
                    
                });
                
            };
            
        } else {
            
            console.log("The user <@" +msg.author +"> tried to use the " +discordPrefix +"help command in the channel " +msg.channel.name +" !");
            embed.setColor("#FF0000");
            embed.setAuthor(msg.author);
            embed.setTitle("**You can't use the command in this channel !**");
            embed.setDescription("You can only use this commmand on the chanel <#812346669815037963> .");
            msg.channel.send(embed);
            embed.setColor("#FF0000");
            embed.setAuthor(msg.author);
            embed.setTitle("**A user tried to use the " +discordPrefix +"help command in a wrong channel !**");
            embed.setDescription("The user " +msg.author +" tried to use the " +discordPrefix +"help command in the channel " +msg.channel.name +" .");
            logsChannel.send(embed);
            
        };
        
    };
    if (msg.content.startsWith === discordPrefix +"bservers") {
        
        if (msg.author.bot) {
            
            console.log("The bot " +msg.author +" asked in the channel " +msg.channel.name +" in how many servers i am.");
            embed.setColor("#FF0000");
            embed.setAuthor(msg.author);
            embed.setTitle("**A bot tried to use the command " +discordPrefix +"bservers**");
            embed.setDescription("The bot " +msg.author +" asked in the channel " +msg.channel.name +" in how many servers i am, i didn't asnwered him.");
            logsChannel.send(embed);
            
        } else {
            
            if (client.guilds.size > 1) {
                
                console.log("The user " +msg.author +" asked in the server " +msg.guild.name +" in how many discord servers i am, i answered him than im on " +client.guilds.size +" servers !");
                embed.setColor("#00FF00");
                embed.setAuthor(msg.author);
                embed.setTitle("**I am in : " +client.guilds.size +" servers.**");
                msg.channel.send(embed);
                
            } else {
                
                console.log("The user " +msg.author +" asked in the server " +msg.guild.name +" in how many discord servers i am, i answered him than im one 1 server !");
                embed.setColor();
                embed.setAuthor(msg.author);
                embed.setTitle("**I am in : 1 server.**");
                msg.channel.send(embed);
                
            };
            
        };
        
    };
    if (msg.content.startsWith === discordPrefix +"dcp") {
        
        if (msg.author.bot) {
            
            console.log("The bot " +msg.author +" tried to use the " +discordPrefix +"cp command !");
            embed.setColor("#FF0000");
            embed.setAuthor(msg.author);
            embed.setTitle("**A bot tried to use the " +discordPrefix +"cp command !**");
            embed.setDescription("The bot " +msg.author +" tried to use the " +discordPrefix +"dcp command on the channel " +msg.channel.name +" to change the discord bot prefix.");
            logsChannel.send(embed);
            
        } else {
            
            if (msg.author.id in staffs) {
                
                newPrefix = msg.content.trim(discordPrefix.length +3).trim();
                console.log("The discord bot prefix has been changed by " +msg.author +" from " +discordPrefix +" to " +newPrefix);
                embed.setColor("#00FF00");
                embed.setAuthor(msg.author);
                embed.setTitle("**Bot prefix has been changed !**");
                embed.setDescription("The prefix has been changed from " +discordPrefix +" to " +newPrefix);
                msg.channel.send(embed);
                discordPrefix = newPrefix;
                newPrefix = ",";
                
            } else {
                
                console.log("The user " +msg.author +" used the " +discordPrefix +"dcp command in the channel " +msg.channel.name +" to change the discord prefix but is not a staff member.");
                embed.setColor("#FF0000");
                embed.setAuthor(msg.author);
                embed.setTitle("**Command access denied !**");
                embed.setDescription("You need to be a staff member to use this command.");
                msg.channel.send(embed);
                embed.setColor("#FF0000");
                embed.setAuthor(msg.author);
                embed.setTitle("**A user tried to change the prefix !**");
                embed.setDescription("The user " +msg.author +" tried to change the prefix but is not a member of the staff.");
                msg.channel.send(embed);
                
            };
            
        };
        
    };
    if (msg.content.startsWith === discordPrefix +"warn") {
        
        if (msg.author.bot) {
            
            console.log("The bot " +msg.author +" tried to use the ,warn command !");
            embed.setColor("#FF0000");
            embed.setAuthor(msg.author);
            embed.setTitle("**A bot tried to warn a user !**");
            embed.setDescription("The bot " +msg.author +" tried to warn the user " +userMentionned +" for " +reason +" .");
            logsChannel.send(embed);
            embed.setColor()
            
        } else {
            
            if (msg.author.id in staffs) {
                
                userMentionned = msg.mentions.members.first();
                reason = msg.content.trim(discordPrefix.length +4 +msg.mentions.members.first().length).slice();
                if (userMentionned in staffs) {
                    
                    console.log("The staff member " +msg.author +" tried to warn the staff member " +userMentionned.tag);
                    
                } else {
                    
                    console.log("The user " +userMentionned +" was been warned by " +msg.author +" for " +reason +" !");
                    embed.setColor("00FF00");
                    embed.setAuthor(msg.author);
                    embed.setTitle("**User was been warned !**");
                    embed.setDescription("The user " +userMentionned +" has been warned by " +msg.author +" for " +reason +" .");
                    msg.channel.send(embed);
                    embed.setColor("#00FF00");
                    embed.setAuthor(msg.author);
                    embed.setTitle("**User has been warned !**");
                    embed.setDescription("The user " +userMentionned +" has been warned by " +msg.author +"for " +reason +" .");
                    logsChannel.send(embed)
                    
                };
                
            } else {
                
                userMentionned = msg.mentions.members.first();
                reason = msg.content.trim(discordPrefix.length +4).slice();
                console.log("The user " +msg.author +" tried to warn the user " +userMentioned +" for " +reason +" .");
                embed.setColor("#FF0000");
                embed.setAuthor(msg.author);
                embed.setTitle("**You can't warn the other users !**");
                embed.setDescription();
                msg.channel.send(embed);
                embed.setColor("#FF0000");
                embed.setAuthor(msg.author);
                embed.setTitle("**A user tried to warn an other user !**");
                embed.setDescription("The user " +msg.author +" tried to warn the user " +userMentionned +" for " +reason);
                
            };
            
        };
        
    };
    if (msg.content.startsWith === discordPrefix +"kick") {
        
        if (msg.author.bot) {
            
            console.log("The bot " +msg.author +" tried to use the ,kick command !");
            embed.setColor("#1D7EEB");
            embed.setAuthor(msg.author);
            embed.setTitle("**A bot tried to use a command !**");
            embed.setDescription("The bot <@" +msg.author +"> tried to use the ,kick command !");
            logsChannel.send(botEmbed);
            
        } else {
            
            if (msg.author.id in staffs) {
                
                userMentionned = msg.mentions.members.first().id;
                reason = msg.content.trim(discordPrefix.length +4).slice();
                if (userMentionned in staffs) {
                    
                    console.log("The user " +msg.author +" tried to ban a staff member.");
                    
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
            
            console.log("The bot " +msg.author +" tried to use the ban command !");
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
    
    consumer_key: "", // paste your account public key between the quotes
    consumer_secret: "", // paste your account secret key between the quotes
    access_token_key: "", // paste your account access public token between the quotes
    access_token_secret: "" // paste your account access secret token between the quotes
    
});

// web management

const http = require("http");
const url = require("url");

const httpServer = http.createServer(function (req, res) {
    
    var page = url.parse(req.res).pathname;
    
    if (page == "/home") {
        
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<html>\n    \n    <head>\n        \n        <meta charset='utf-8'>\n        <script>\n            \n            var pageTheme = 0;\n        var configButton = document.getElementById('config');\n        configButton.onclick = function(configButtonClicked) {\n            \n            if (pageTheme = 0) {\n                \n                pageTheme = 1;\n                document.clear();\n                document.write();\n                console.log(`The page is now on the dark theme !`);\n                \n            } else {\n                \n                pageTheme = 0;\n                document.clear();\n                document.write('');\n                console.log(`The page is now on the light theme !`);\n                \n            };\n            \n        };\n        </script>\n        <style>\n            \n            \n            \n        </style>\n        \n</head>\n    <body>\n        \n        <p>version 0 web page, coding it</p>\n        \n    </body>\n    \n</html>");
        
    };
    if (page == "/discord") {
        
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<html>\n    \n    <head>\n        \n        <meta charset='utf-8'>\n        <script>\n            \n            var pageTheme = 0;\n        var configButton = document.getElementById('config');\n        configButton.onclick = function(configButtonClicked) {\n            \n            if (pageTheme = 0) {\n                \n                pageTheme = 1;\n                document.clear();\n                document.write();\n                console.log(`The page is now on the dark theme !`);\n                \n            } else {\n                \n                pageTheme = 0;\n                document.clear();\n                document.write('');\n                console.log(`The page is now on the light theme !`);\n                \n            };\n            \n        };\n        </script>\n        <style>\n            \n            \n            \n        </style>\n        \n</head>\n    <body>\n        \n        <p>version 0 web page, coding it</p>\n        \n    </body>\n    \n</html>");
        
    };
    if (page == "/config") {
        
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<html>\n    \n    <head>\n        \n        <meta charset='utf-8'>\n        <script>\n            \n            var pageTheme = 0;\n        var configButton = document.getElementById('config');\n        configButton.onclick = function(configButtonClicked) {\n            \n            if (pageTheme = 0) {\n                \n                pageTheme = 1;\n                document.clear();\n                document.write();\n                console.log(`The page is now on the dark theme !`);\n                \n            } else {\n                \n                pageTheme = 0;\n                document.clear();\n                document.write('');\n                console.log(`The page is now on the light theme !`);\n                \n            };\n            \n        };\n        </script>\n        <style>\n            \n            \n            \n        </style>\n        \n</head>\n    <body>\n        \n        <p>version 0 web page, coding it</p>\n        \n    </body>\n    \n</html>");
        
    };
    
});
