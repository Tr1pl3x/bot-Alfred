const { genInvalid1, genInvalid2 } = require("../misc/prompts");
const printTime = require("../misc/time");



function generateRandom(cmd) {
    console.log(`[${printTime()}] funExt.generate`);

    // Invalid incoming command
    if (cmd.length != 3) return genInvalid1;
    
    // Invalid value range input
    const min = parseInt(cmd[1]);
    const max = parseInt(cmd[2]);
    if (min > max) return genInvalid1;
    if (min == max) return genInvalid2;
    
    // Proceeds to generates random number
    const chosen = Math.floor(Math.random() * (max - min + 1)) + min;

    // Reconstructs the format to return
    const result = `From **${min}** to **${max}**, Alfred chose **${chosen}**`;
    return result;
}

module.exports = generateRandom;