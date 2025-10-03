const { GoatWrapper } = require("fca-liane-utils");
 const { config } = global.GoatBot;
module.exports = {
  config: {
    name: "Fork",
    aliases: ["fork", "bot fork","boter fork"],
    version: "2.1",
    author: "SHIFAT",
    role: 0,
    shortDescription: {
      en: "Vibey Bot info with goat shifat bot sauce."
    },
    longDescription: {
      en: "Vibey Bot info with goat shifat bot sauc."
    },
    category: "Info",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      let threadInfo = await api.getThreadInfo(event.threadID);
      let threadMem = threadInfo.participantIDs.length;
      let gendernam = [], gendernu = [], nope = [];

      for (let z in threadInfo.userInfo) {
        let gender = threadInfo.userInfo[z].gender;
        let name = threadInfo.userInfo[z].name;
        if (gender == "MALE") gendernam.push(z + gender);
        else if (gender == "FEMALE") gendernu.push(gender);
        else nope.push(name);
      }

      let nam = gendernam.length;
      let nu = gendernu.length;
      let qtv = threadInfo.adminIDs.length;
      let sl = threadInfo.messageCount;
      let threadName = threadInfo.threadName;
      let id = threadInfo.threadID;

      const timeStart = Date.now();
      await api.sendMessage("𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐮𝐩 𝐭𝐡𝐞 𝐛𝐨𝐭....", event.threadID);
      const ping = Date.now() - timeStart;

      const uptime = process.uptime();
      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);
      const uptimeString = `${hours}𝐡 ${minutes}𝐦 ${seconds}𝐬`;

      const now = new Date();
      const localTime = now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" });

      const statusPool = ["𝐎𝐧𝐥𝐢𝐧𝐞", "𝐕𝐢𝐛𝐢𝐧𝐠", "𝐒𝐭𝐚𝐛𝐥𝐞", "𝐑𝐞𝐥𝐨𝐚𝐝𝐞𝐝", "𝐂𝐨𝐨𝐤𝐢𝐧𝐠 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬", "𝐑𝐞𝐚𝐝𝐲 𝐟𝐨𝐫 𝐂𝐡𝐚𝐨𝐬"];
      const botStatus = statusPool[Math.floor(Math.random() * statusPool.length)];

      api.sendMessage(
`──────<GOAT BOT FORK>──────
 👑FORK: https://github.com/KAKASHI-V5/SHIFAT-X-KAKASHI.git
`, event.threadID);

    } catch (error) {
      console.error(error);
      api.sendMessage("𝐒𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐭𝐫𝐢𝐩𝐩𝐞𝐝 𝐢𝐧 𝐭𝐡𝐞 𝐦𝐚𝐭𝐫𝐢𝐱. 𝐓𝐫𝐲 𝐚𝐠𝐚𝐢𝐧 𝐥𝐚𝐭𝐞𝐫.", event.threadID);
    }
  }
};
const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
