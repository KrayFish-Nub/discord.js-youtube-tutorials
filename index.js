const { token, mongo } = require("./config.json");
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: true,
});
const config = require("./config.json");

module.exports = client;

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command", "events"].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

client.login(token);
