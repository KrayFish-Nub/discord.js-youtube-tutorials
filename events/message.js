const { ownerID, prefix } = require("../config.json");
let cooldown = {};

module.exports.run = async (client, message) => {
  if (!message.content.startsWith(prefix)) return;
  if (!message.member)
    message.member = await message.guild.members.fetch(message);

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (!command) return;

  if (command.botPermission) {
    const Permissions = command.botPermission
      .filter((x) => !message.guild.me.hasPermission(x))
      .map((x) => "`" + x + "`");
    if (Permissions.length)
      return message.channel.send(
        `I need ${Permissions.join(", ")} permission(s) to execute the command!`
      );
  }

  if (command.authorPermission) {
    const Permissions = command.authorPermission
      .filter((x) => !message.member.hasPermission(x))
      .map((x) => "`" + x + "`");
    if (Permissions.length)
      return message.channel.send(
        `You need ${Permissions.join(
          ", "
        )} permission(s) to execute this command!`
      );
  }

  if (command.ownerOnly) {
    if (message.author.id !== ownerID)
      return message.channel.send("This command can only be use by owner :C");
  }

  let uCooldown = cooldown[message.author.id];
  if (!uCooldown) {
    cooldown[message.author.id] = {};
    uCooldown = cooldown[message.author.id];
  }

  let time = uCooldown[command.name] || 0;
  if (time && time > Date.now())
    return message.channel.send(
      `You can again use this command in ${Math.ceil(
        (time - Date.now()) / 1000
      )} second(s)`
    );
  cooldown[message.author.id][command.name] = Date.now() + command.cooldown;

  if (command) command.run(client, message, args);
};
