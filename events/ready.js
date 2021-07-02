const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = require("../config.json");
module.exports.run = (client) => {
  console.log(`✅ Successfully Logged in as ${client.username}`);
  client.user.setActivity(`${prefix}help :D`);
};
