// don't just copy code you need to add some more stuff in code so wathc video first!

const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'reply',
    description: '',
    aliases: '',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        message.mentionReply('No U');
      //or
        message.noMentionReaply('No U');
      
    }
}
