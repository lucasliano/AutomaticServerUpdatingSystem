// bot.js

module.exports = {
  run: function ()
  {
    // svFuncs
    const svFuncs = require("./svFuncs.js");
    // cmd
    const cmd = require("node-cmd");
    // Discrod.js setup
    const Discord = require('discord.js');
    const client = new Discord.Client();
    const Discord_Token = process.env.DISCORD_TOKEN;
    client.login(Discord_Token);

    var gitLink = 'https://github.com/lucasliano/AutomaticServerUpdatingSystem';

    // ready event
    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });

    // message event
    client.on('message', msg =>
    {
      if(msg.channel.id == '777732130230501376') // Channel used to configure the source code of your server. YOU SHOULD CHANGE THIS HERE!
      {

        if (msg.content.slice(0,4) == '/git')
        {

          if(validURL(msg.content.split(/\s+/)))
          {
            gitLink = msg.content.split(/\s+/);
            msg.channel.send('Working on ' + gitLink);
            try
            {
              cmd.run('git clone ' + gitLink + ' myServer');
            }catch(error)
            {
              console.error("Error on 'updateSrc()'" + error);
            }
            msg.channel.send('You have to update your .gitignore files!');

          }else{
            msg.channel.send('The argument isnt a link!');
            msg.channel.send('The actual link is ' + gitLink);

          }
        }
        switch (msg.content)
        {
          case '/help':
            msg.reply('commands:');
            msg.channel.send('/hi: Should reply "hi!".');
            msg.channel.send('/git <link>: Takes the link of your GitHub repo and clone it in the ./myServer.');
            msg.channel.send('/updateSrc: Updates the state of the main branch of the project in ./myServer');
            msg.channel.send('/endSession: Kills this process! DO NOT EXECUTE IF YOU DONT HAVE ACCESS TO THE SERVER TERMINAL!');
            break;

          case '/hi':
            msg.reply('Hello!');
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

function validURL(str)
{
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str))
  {
    return true;
  }
  else
  {
    return false;
  }
}
