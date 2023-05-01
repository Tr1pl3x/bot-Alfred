const Discord = require("discord.js");
const client = new Discord.Client();
const welcome = require("./src/greetings")

const config = require("./config.json");

client.on("ready", () => {
  /** This is to prompt when the bot is launched successfully */
  console.log("Alfred is listening...");
  welcome(client);
});

client.login(config.token);
