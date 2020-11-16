// bot.js

module.exports = {
  run: function ()
  {
    // svFuncs
    const svFuncs = require("src/svFuncs.js");
    // cmd
    const cmd = require("node-cmd");
    // Discrod.js setup
    const Discord = require('discord.js');
    const client = new Discord.Client();
    const Discord_Token = process.env.DISCORD_TOKEN;
    client.login(Discord_Token);

    var update = false;

    // ready event
    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });

    // message event
    client.on('message', msg =>
    {
      if(msg.channel.id == '775510593028751441'){   // Channel used to configure the source code of your server. YOU SHOULD CHANGE THIS HERE!

        switch (msg.content){
          case '/help':
            msg.reply('commands:');
            msg.channel.send('/hi: Should reply "hi!".');
            msg.channel.send('/git: Returns the github url of the project.');
            msg.channel.send('/updateSrc: Updates the state of the main branch of the project in ./myServer');
            msg.channel.send('/endSession: Kills this process! DO NOT EXECUTE IF YOU DONT HAVE ACCESS TO THE SERVER TERMINAL!');
            break;

          case '/hi':
            msg.reply('Hello!');
            break;

          case '/git':
            msg.channel.send('https://github.com/lucasliano/AutomaticServerUpdatingSystem');
            break;

          case '/updateSrc':
            console.log('Ending session');
            client.destroy();
            svFuncs.updateSrc(cmd);
            break;

          case '/endSession':
            console.log('Ending session');
            client.destroy();
            break;

        // IMPORTANT: You shouldn´t use the default: sentence here. Otherwise the discord bot will crash!
        }
      }
    });
  }//,
};
