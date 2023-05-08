const coin = ['Heads', 'Tails'];    // A coin have heads and tails
const prefix = '!';                 // change this to your desired command prefix

module.exports = client => {

    client.on('message', message => {
        if ( message.author.bot) return; // Ignore messages from other bots

        const words = message.content.slice(prefix.length).trim().split(/ +/);

        if  (words[0] === 'flip') {

            const flip = coin[ Math.floor(Math.random()* coin.length)];
            const result = `<@${message.author.id}> flipped the coin...**${flip}**`
            message.channel.send(result)
        }
        
    })   
}