const printTime = require("./misc/time");

module.exports = client => {
    /* you will have to change this id. */
    const generalChat = '1102583108777295902';
    const portal = '939871697996222485';
    
    // when new member is added.
    client.on("guildMemberAdd", (member) => {
        console.log(`[${printTime()}] greetings.welcome`);
        
        const msg = `Welcome back, <@${member.id}>.`;
        
        /** Get the target channel to prompt the welcome message. */
        const channel = member.guild.channels.cache.get(generalChat);
        
        /* This is to crash-proof: condition: only channel is valid*/
        if (channel) {
            /** Next Line: Stringfy the requested channel name to be used in the message. */
            const portalThread = member.guild.channels.cache.get(portal).toString();
            const followMsg = ` please head to the ${portalThread} and suit up ASAP!`;
            
            /** Sends the message in the designated channel */
            channel.send(msg+followMsg);
        }
    });
    
    // when a member leaves or is removed
    client.on("guildMemberRemove", (member) => {
        console.log(`[${printTime()}] greetings.farewell`);
        const msg = `I hope my services were to your satisfaction, <@${member.id}>. Farewell for now.`;
        
        /** Get the target channel to prompt the welcome message. */
        const channel = member.guild.channels.cache.get(generalChat);
        
        /* This is to crash-proof: condition: only channel is valid*/
        if ( channel) {
            /** Sends the message in the designated channel */
            channel.send(msg);
        }
    });

}