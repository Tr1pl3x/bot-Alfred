/* Rock, Paper, Scissors*/
const choices = ['rock', 'paper', 'scissors'];
const invalidPrompt1 = `Sir, please don't be STUPID. You have to **CHOOSE**.
Either ROCK :rock: , PAPER :roll_of_paper: or SCISSORS :scissors: !!`;
const invalidPrompt2 = `SIR, don't fool around. ** TAKE THIS SERIOUSLY **
        ONLY OPTIONS: ROCK :rock: , PAPER :roll_of_paper: or SCISSORS :scissors: !!`;


function rpsFunc( cmd ) {

    // If the user didn't provide a choice, 
    // prompt them for one
    if (cmd.length < 2) return invalidPrompt1;

    // Get the user's choice and validate it
    const userChoice = cmd[1];
    if ( !choices.includes(userChoice)) return invalidPrompt2;

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
    
    const str = `*You* chose **${userChoice}**, *Alfred* chose **${botChoice}**.\n\t ${result}`;
    return str;
}


module.exports = rpsFunc;