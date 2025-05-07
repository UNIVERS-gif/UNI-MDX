
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//--------------------------NETHUM OFC #--------------------------------------
module.exports = {
    SESSION_ID: process.env.SESSION_ID || "ඔයාගේ session id එක දාන්න",
    CAPTION: process.env.CAPTION || "*©  Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ ᴍʀ ɴᴇᴛʜᴜ ᴏꜰᴄ*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "true",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/8nd78z.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "ʜɪ ᴀᴍ ᴀʟɪᴠᴇ ɴᴏᴡ ᴀᴍ ʙᴏᴏᴍ-ᴍᴅ ᴛʜᴇ ʙᴇsᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ🚀",
    ANTI_LINK: process.env.ANTI_LINK || "false",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "『 UNI-MDX 』",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`Status Seen By UNI-MDX Bot 🦄 `",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
//--------------MADE BY NETHUM OFC 2025---------------->-
