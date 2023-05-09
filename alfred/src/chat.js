const printTime = require("./misc/time");
const PREFIX = '!';     // change this to your desired command prefix

module.exports = client => {
    
    // cleans the chat but pinned messages.
    client.on('message', message => {
        
        // Ignore messages from other bots and messages without the prefix
        if (message.author.bot || !message.content.startsWith(PREFIX)) {
            return;
        }
        
        // Check if the command is to clean the chat
        // if a user sends the message !greet Alice Bob, 
        // the args array will be ['greet', 'Alice', 'Bob'].
        const args = message.content.slice(PREFIX.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        
        if (command === 'clean') {
            console.log(`[${printTime()}] chat.clean`);
            console.log(`# Target channel: '${message.channel.name}'`);
            // Get the messages in the channel where command was invoked
            message.channel.messages.fetch()
                .then(messages => {
                    // Filter out pinned messages in the designated channel
                    const pinnedMessages = messages.filter(m => m.pinned );
                    const nonPinnedMessages = messages.filter(m => !m.pinned);
                    
                    // deletes all non-pinned messages from the channel
                    // if successful, prompts
                    message.channel.bulkDelete(nonPinnedMessages)
                        .then(deletedMessages => {
                            console.log(`\t...Successfully deleted ${deletedMessages.size} messages`);
                            console.log('\t[DONE]');
                    })
                    .catch(console.error);

                    // send a confirmation msg with timeStamp
                    // when sending confirmation messages re-pins the messages that were initally pinned.
                    const date = new Date(Date.now());
                    const dateString = date.toLocaleTimeString();
                    const confirmationMessage = `[${ dateString }] Sir, I have cleaned the chat.`;
                    message.channel.send(confirmationMessage)
                        .then(() => {
                        pinnedMessages.forEach(m => {
                            m.pin();
                        });
                        })
                        .catch(console.error);
                })
                .catch(console.error);
        }
    });
}
  