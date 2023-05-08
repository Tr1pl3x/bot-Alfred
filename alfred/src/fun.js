const askMe = require('./funExt/8ball');
const coinFlip = require('./funExt/coinFlip');
const generateRandom = require('./funExt/generate');
const rpsFunc = require('./funExt/rps');
const PREFIX = '!'; // change this to your desired command prefix

module.exports = client => {

    client.on('message', message => {

        // // Ignore messages from other bots and messages that don't start with the prefix
        if (message.author.bot || !message.content.startsWith(PREFIX)) return; 
        
        // Split the message into words and convert them to lowercase
        // if a user sends the message !greet Alice Bob, 
        // the args array will be ['greet', 'Alice', 'Bob'].
        const words =  message.content.slice(PREFIX.length).trim().split(/ +/);

        // Switch Case
        // Check if the message is a command to access fun extensions that are available
        let result;
        switch(words[0]) {
            case('rps'): 
                result = rpsFunc(words, message.author.id); 
                message.reply(result);
                break;
            case('flip'): 
                result = coinFlip(message.author.id); 
                message.channel.send(result);
                break;
            case('generate'):
                result = generateRandom(words, message.author.id);
                message.reply(result);
                break;
            case('ask'):
                result = askMe(words, message.author.id);
                message.channel.send(result);
                break;
        }     
    });
}