const printTime = require("../misc/time");

function cleanMsgs(message) {
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

module.exports = cleanMsgs;