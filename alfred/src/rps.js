const choices = ['rock', 'paper', 'scissors'];
module.exports = client => {
    const PREFIX = '!'; // change this to your desired command prefix

    client.on('message', message => {
        if (message.author.bot) return; // Ignore messages from other bots

        // Split the message into words and convert them to lowercase
        // if a user sends the message !greet Alice Bob, 
        // the args array will be ['greet', 'Alice', 'Bob'].
        const words =  message.content.slice(PREFIX.length).trim().split(/ +/);

        // Check if the message is a command to play rock-paper-scissors
        if (words[0] === 'rps') {

            // If the user didn't provide a choice, 
            // prompt them for one
            if (words.length < 2) {
            message.reply(
                `Sir, please don't be STUPID. You have to **CHOOSE**.
                Either ROCK :rock: , PAPER :roll_of_paper: or SCISSORS :scissors: !!`
                );
            return;
            }

            // Get the user's choice and validate it
            const userChoice = words[1];
            if (!choices.includes(userChoice)) {
            message.reply(
                `SIR, don't fool around. ** TAKE THIS SERIOUSLY **
    ONLY OPTIONS: ROCK :rock: , PAPER :roll_of_paper: or SCISSORS :scissors: !!`
                );
            return;
            }

            // bot picks a random from the choices array.
            const botChoice = choices[Math.floor(Math.random() * choices.length)];

            // Determine the winner with outcomes
            let result;
            if (userChoice === botChoice) {
                result = '**IT\'S A TIE!!! TRY AGAIN SIRRR!**';
            } else if ((userChoice === 'rock' && botChoice === 'scissors') ||
                    (userChoice === 'paper' && botChoice === 'rock') ||
                    (userChoice === 'scissors' && botChoice === 'paper')) {
                result = '**YOU GOT LUCKY SIR! COME AGAIN**';
            } else {
                result = '**YOU CHOSE POORLY. I WIN BAHAHBHAHAH!**';
            }

            // Send the result backs to the user
            message.reply(`*You* chose **${userChoice}**, *Alfred* chose **${botChoice}**.\n\t ${result}`);
        }
    });
}