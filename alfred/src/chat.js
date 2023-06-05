const cleanMsgs = require('./chatExt/clean')
const { allCommands } = require('./misc/prompts')
const PREFIX = '!' // change this to your desired command prefix

module.exports = client => {
  // cleans the chat but pinned messages.
  client.on('message', message => {
    // Ignore messages from other bots and messages without the prefix
    if (message.author.bot || !message.content.startsWith(PREFIX)) {
      return
    }
    // Check if the command is to clean the chat
    // if a user sends the message !greet Alice Bob,
    // the args array will be ['greet', 'Alice', 'Bob'].
    const args = message.content.slice(PREFIX.length).trim().split(/ +/)
    const command = args.shift().toLowerCase()
    // Switch Case
    // Check if incoming command is valid for available chat extensions
    switch (command) {
      case ('clean'):
        cleanMsgs(message)
        break
      case ('help'):
        message.channel.send(allCommands)
        break
    }
  })
}
