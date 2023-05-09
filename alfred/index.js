const Discord = require("discord.js");
const client = new Discord.Client();
const welcome = require("./src/greetings");
const fun = require("./src/fun");
const chat = require ("./src/chat");

const config = require("./config.json");

client.on("ready", () => {

  /** This is to prompt when the bot is launched successfully */
  console.log("Alfred is listening...");
  // ALFRED's listening routes
  welcome(client);
  fun(client);
  chat(client);

});

client.login(config.token);
