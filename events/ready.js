// Don't  just copy you might need to change stuff soo manke sure to watch the video first get link from README.md

const client = require('../index')

module.exports.run = (client) => {
  const statuses = [
    "lol",
    "Subscribe to pritu",
    "make sure to watch the latest video",
    "yhelp",
    "yping"
  ]
  console.log(`✅ Successfully Logged in as ${client.user.username}`);
  setInterval(() => {
    const index = Math.floor(Math.random() * (statuses.length - 1) + 1)
    const mainActivity = statuses[index]
    client.user.setActivity(mainActivity, { type: 'WATCHING'})
  }, 5000);
};
