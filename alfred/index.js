const Discord = require("discord.js");
const client = new Discord.Client();
const welcome = require("./src/greetings");
const rps = require("./src/rps");
const chat = require ("./src/chat");

const config = require("./config.json");

client.on("ready", () => {

  /** This is to prompt when the bot is launched successfully */
  console.log("Alfred is listening...");

  // ALFRED's functions
  welcome(client);
  rps(client);
  chat(client);
});

client.login(config.token);
