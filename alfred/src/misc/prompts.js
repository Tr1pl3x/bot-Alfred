/*--------------- ROCK, PAPER AND SCISSORS ----------- */
const rpsInvalid1 = `Sir, please don't be STUPID. You have to **CHOOSE**.
Either ROCK :rock: , PAPER :roll_of_paper: or SCISSORS :scissors: !!`;
const rpsInvalid2 = `SIR, don't fool around. ** TAKE THIS SERIOUSLY **
        ONLY OPTIONS: ROCK :rock: , PAPER :roll_of_paper: or SCISSORS :scissors: !!`;
const rpsTie = '**IT\'S A TIE!!! TRY AGAIN SIRRR!**';
const rpsWin = '**YOU GOT LUCKY SIR! COME AGAIN**';
const rpsLose = '**YOU CHOSE POORLY. I WIN BAHAHBHAHAH!**';


/*--------------------- Generate -------------------- */
const genInvalid1 = `Invalid command, sir
To **generate** a random number from given range, you must enter[ **!generate <min> <max>** ]`;
const genInvalid2 = `two numbers cannot be same, sir. **TRY AGAIN!**`;

// module.exports = {
// 
// };

/*--------------------- 8ball -------------------- */
const askMeInvalid = `, sir, you must put a question [ **!ask <any question>** ]`;

/*-------------------- EXPORTS -------------------- */
module.exports = {
  rpsInvalid1,
  rpsInvalid2,
  rpsTie,
  rpsWin,
  rpsLose,    
  genInvalid1,
  genInvalid2,
  askMeInvalid
};
