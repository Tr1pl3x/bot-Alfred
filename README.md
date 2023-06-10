# DISCORD-BOT-ALFRED
~ An experimental and work-in-progress Discord bot ~ <br>
Alfred is very much like from Batman. He welcomes the incoming users with a meaningful message. <br>
This is my first time coding a discord bot and first time creating my personal github project.

## Current features:
#### Chat
* Sends a welcome message or farewell message whenever a user joins or leaves the server.
* Cleans the chat and preserved pinned messages. [ bulk-delte does not imply for messages that are more than 14 days old.]
#### Fun
* Plays rocks, papers and scissors.
* Do a coin flip.
* Generate a random number between given range.
* Answer in 8ball toy like fashion. (random answers without taking the questions)
## Planned features:
* Alfred shows all the list of commands that he can do if user asks.
* User can input a name of the city and Alfred will fetch weather details of the city from an weather api.
* User can quick search for top-rated restaurants with the specified cuisine and location.

## Setting up Alfred

Before you do the step, you will to enable yourself as developer in discord settings and register to get your developer token for the bot on the discord website. There are a lot of tutorials on how to setup but the one I watched is [here](https://www.youtube.com/watch?v=tDh45V2S6jg).

1. Fork the repo or download the source code.
2. Install development dependicies;
```shell
$ npm install
```
3. Go to config.json and enter your newly generated token. The token that comes with the repo will be **no longer work** by the time this repo goes live.
```json
{
  "token": "ENTER YOUR GENERATED TOKEN "
}
```
4. You are good to go!


