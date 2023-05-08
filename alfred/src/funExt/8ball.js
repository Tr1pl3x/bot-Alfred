const reply = [
  'It is certain',
  'Without a doubt',
  'You may rely on it',
  'Yes, definitely',
  'It is decidedly so',
  'As I see it, yes',
  'Most likely',
  'Yes',
  'Outlook good',
  'Signs point to yes',
  'Reply hazy try again',
  'Better not tell you now',
  'Ask again later',
  'Cannot predict now',
  'Concentrate and ask again',
  'Don’t count on it',
  'Outlook not so good',
  'My sources say no',
  'Very doubtful',
  'My reply is no'
]; // standard 8ball responses

const invalidPrompt1 = `, sir, you must put a question [ **!ask <any question>** ]`;

function askMe(cmd, id) {

    // for format of the replies
    const defaultReply = `<@${id}>`;

    // invalid command
    if (cmd.length == 1) return defaultReply+invalidPrompt1;
    
    // extract question from the incoming command and 
    // randomise an answer from standard 8ball responses.
    const question = cmd.slice(1).join(' ');
    const ans = reply[ Math.floor(Math.random()* reply.length)];
    
    // Construct question and answered in a format to be ouputed to the reply
    const result = defaultReply+` asked **"${question}"**`+`\nAlfred answered **"${ans}"**`;
    return result;

}

module.exports = askMe;