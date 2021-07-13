const { readdirSync } = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Events");
table.setHeading("Events", "Load status");

module.exports = (client) => {
  const commands = readdirSync(__dirname.replace("handlers", "events")).filter(
    (file) => file.endsWith(".js")
  );

  for (let file of commands) {
    try {
      let pull = require(`${__dirname.replace("handlers", "events")}/${file}`);

      if (pull.event && typeof pull.event !== "string") {
        table.addRow(file, `❌ -> Property event should be string.`);
        continue;
      }

      pull.event = pull.event || file.replace(".js", "");

      client.on(pull.event, pull.run.bind(null, client));

      table.addRow(file, "✅");
    } catch (err) {
      console.log(
        "Something went wrong join support server --> https://discord.gg/DXyczwxQYf"
      );
      console.log(err);
      table.addRow(
        file,
        `❌ Something went wrong join support server --> https://discord.gg/DXyczwxQYf`
      );
    }
  }

  console.log(table.toString());
};