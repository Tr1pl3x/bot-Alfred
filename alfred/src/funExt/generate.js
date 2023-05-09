const printTime = require("../misc/time");

const invalidPrompt1 = `Invalid command, sir
To **generate** a random number from given range, you must enter[ **!generate <min> <max>** ]`;
const invalidPrompt2 = `two numbers cannot be same, sir. **TRY AGAIN!**`;

function generateRandom(cmd) {
    console.log(`[${printTime()}] funExt.generate`);

    // Invalid incoming command
    if (cmd.length != 3) return invalidPrompt1;
    
    // Invalid value range input
    const min = parseInt(cmd[1]);
    const max = parseInt(cmd[2]);
    if (min > max) return invalidPrompt1;
    if (min == max) return invalidPrompt2;
    
    // Proceeds to generates random number
    const chosen = Math.floor(Math.random() * (max - min + 1)) + min;
    const result = `From **${min}** to **${max}**, Alfred chose **${chosen}**`;
    return result;
}

module.exports = generateRandom;