// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
const speed = require(`performance-now`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
const os = require("os");
const { formatp } = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/mizu`);
const vers = require(`../../package.json`);
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;
module.exports = {
  name: `help`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      const runtime = function (seconds) {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600 * 24));
        var h = Math.floor((seconds % (3600 * 24)) / 3600);
        var m = Math.floor((seconds % 3600) / 60);
        var s = Math.floor(seconds % 60);
        var dDisplay = d > 0 ? d + (d == 1 ? ` day, ` : ` Day, `) : ``;
        var hDisplay = h > 0 ? h + (h == 1 ? ` hour, ` : ` Hour, `) : ``;
        var mDisplay = m > 0 ? m + (m == 1 ? ` minute, ` : ` Minute, `) : ``;
        var sDisplay = s > 0 ? s + (s == 1 ? ` second` : ` Second`) : ``;
        return dDisplay + hDisplay + mDisplay + sDisplay;
      };
      uptime = process.uptime();
      let timestamp = speed();
      let latensi = speed() - timestamp;
      neww = performance.now();
      oldd = performance.now();
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      let content = fs.readFileSync(`./🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/𝓜𝖎𝖟𝖚ӄ𝖎ɦɛʟք.png`);
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        content,
        MessageType.image,
        {
          mimetype: Mimetype.png || Mimetype.jpeg,
        }
      );
      const buttons = [
        {
          buttonId: `${ᴋᴇɪ}list`,
          buttonText: { displayText: `${ᴋᴇɪ}list` },
          type: 1,
        },
        {
          buttonId: `${ᴋᴇɪ}mizuki`,
          buttonText: { displayText: `${ᴋᴇɪ}mizuki` },
          type: 1,
        },
      ];
      const buttonMessage = {
        contentText: `•@${ꜱᴇɴᴅᴇʀeceived}, 

𝘽𝙊𝙏 𝙄𝙉 𝘽𝙀𝙏𝘼 
────⭓🛸𝐆𝐫𝐨𝐮𝐩│${_𝔏𝔞𝔟_.HASH}

┌────⭓ 𝙎𝙁𝙒 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐢𝐞𝐬
│🎋 *${ᴋᴇɪ}animeside:* _anime sub-list_
│🐙 *${ᴋᴇɪ}ownerside:* _owner sub-list_
│⚙️ *${ᴋᴇɪ}systemside:* _system sub-list_
│🎙️ *${ᴋᴇɪ}musicside:* _music sub-list_
│🍭 *${ᴋᴇɪ}groupside:* _groups sub-list_
│🦄 *${ᴋᴇɪ}funside:* _funs sub-list_
└───────────⭓

┌────⭓ 𝙉𝙎𝙁𝙒 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐢𝐞𝐬
│👅 *${ᴋᴇɪ}nsfwside:* _adult-human sub-list_
│🍄 *${ᴋᴇɪ}hentaiside:* _adult-hentai sub-list_
└───────────⭓

_❗Remember to make me admin_
_❗Never Dm the bot user_
_❗Kick the bot and group will be global-banned_

𝗣𝗿𝗲𝘀𝘀 𝗯𝗲𝗹𝗼𝘄 𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗦𝘁𝗮𝗿𝘁 𝘂𝘀𝗶𝗻𝗴 𝗠𝗶𝘇𝘂𝗸𝗶👇🏽‍
`,
        footerText: `_𝐌𝐢𝐳𝐮𝐤𝐢™_ ${vers.vers}`,
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage,
      };
      await ӄʀǟӄɨռʐ
        .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, buttonMessage, MessageType.buttonsMessage, {
          quoted: chat,
          contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
        })
        .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
