//To run this js use: 'node start.js > stdout.txt 2> stderr.txt &'


// setup
console.log('Initializing!');
require('dotenv').config();
const bot = require("./src/bot.js");

// We try to execute the main app.
try
{
  console.log('Done Initializing!');
  bot.run();
} catch (error)
{
  console.error("Error on 'bot.run();' " + error);
}
