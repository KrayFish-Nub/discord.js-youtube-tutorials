const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  category: "info",
  description: "Get bot ping :/",
  usage: "ping",
  run: async (client, message, args) => {
    message.channel.send(
      new MessageEmbed().setDescription(`:pingpong: **Pong** ${client.ws.ping}`)
    );
  },
};
