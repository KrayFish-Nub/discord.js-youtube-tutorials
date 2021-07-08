// Make sure re-edit code as your need!!


const Discord = require('discord.js')
const MessageEmbed = require('discord.js')
const { Message, Client } = require('discord.js')

client.on('message', () => {
  if(message.content === 'yembed') {
  return message.channel.send(
  new MessageEmbed
    .setTitle(`hello ${message.author.name}`)
    .setDescription(`Hello world this is embed description`)
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURl())
    .setThumbnail(`https://image-url.....`)
    .setImage(`https://image-url.....`)
    .setTimpestamp()
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURl())
    .addField(`Field name`, `Filed description`, true)
    
    //OR
    
    .addFields([
      
      {
        name: "Field1",
        value: "Field1 description",
        inline: true,
      },
      {
        name: "Field2",
        value: "Field2 description",
        inline: true,
      },
      {
        name: "Field3",
        value: "Field3 description",
        inline: true,
      },
    
    ])
    
  )
  }
})
