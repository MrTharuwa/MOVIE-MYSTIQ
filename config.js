const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
const BOTNAME = 'DIMENSION-X';
const FOOTERNAME = '> *Pᴏᴡᴇʀᴇᴅ By Dɪᴍᴇɴꜱɪᴏɴ - X*';
module.exports = {
MONGODB_URI :process.env.MONGODB_URI === undefined ? 'mongodb+srv://isurumongo:isurumongo1@cluster0.ikguzro.mongodb.net/' : process.env.MONGODB_URI,
SESSION_ID: process.env.SESSION_ID === undefined ? 'isuru_qr-eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0tiSjRwVXVrQVgwYXVnOEhqVHU3RVo1bDFPWE41Zkt3dEpab3dhY20yMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieE9qNXNvUmF3d1ArWTI2RlRuRmJObHlIVUxQV3lzSmxoejByTFE5cGZpTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtT0NJQy9WYnZueFQxaW03NnRQdmNBcFZhV3MvNWc4ZHJMbUtVeWNZR1ZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrUjJid2puc0xPSW04VTQ0U0N0UHYzRnIwWUxNcFhOYUs2NG5DTUhOZlR3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndJRFBJV1VxMDA4eC9zb3hKWjE2THdLY2Z3UWlKK0NTcHcvM0k4S3I3SDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhYTWM3dTkwYk1rbklVMzB3RjhEbmIvRElrcDJrd0V3WkJRMk10U3d5bjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUQ5TWEzV0lGdzduM2xRS0Z1bWVFTmtuZHVsUkF2VU45UERzeHpPR3BYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWtNMklBUWNoY3Q0aGM1TndTelhTakE3MlBmU0tJZ2R5Z0tYUENBcXNFcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IncvTzBoc1VFaGhBd0dqZm9TNk1RL0FaMGVud3U0bHhaYTZtNkhOMEJYSHBnUDhwcmhIcFNtWEQ3c0ltN0x3bUU2bzJhd0cxcmRQaHRiVEtFcVZTQkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE4LCJhZHZTZWNyZXRLZXkiOiJsUURsR2NaTk4rZk11VWNDbDVETXVrMDlicnFjRUZTNWlhRjEreG1vaXZJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPcndUVzc0U1JpV1E1dWNldGMwUm1nIiwicGhvbmVJZCI6IjdiYjRhN2JhLTMxYzEtNGQ5OS05NGZhLTJiYzYwNTA5YWUzOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYMWp3ZmlmTUZuU09sVFZVU1c3TGx2b3QvUEU9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5qQkNMYVh1NXVQRWVWb2loWkI5TlpOL3ovOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ056QThPd0JFTlh2N0xJR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFiMXRLOGFGcVM0UGFlWHdnT2JxRFY0ajlWSUVlSEU5by9Ib1kwQzVERVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdwQnFxN0hDQkdodEVJNVI4cDZnYm5lbHI4aHBQb3hmRHMxNTI0QWkwbTBxaENjb3VWR3EyYXJIRmFub1dtYnVOS3JvN1JMQkVDRzJqQVpDNjFRSURnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKeXZFY0pzZEpZNEFnakNFOVBFWHdTaHJEYi85TzhBdU9Oc1RoT3l4aUR2NUVRYlNISFE5a1RoRGpQMEloNnUySENVTWtpSEN1KzZVaHRxbXFmcmhDQT09In0sIm1lIjp7ImlkIjoiOTQ3ODU2MzU2MTk6MzhAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODU2MzU2MTk6MzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYW05YlN2R2hha3VEMm5sOElEbTZnMWVJL1ZTQkhoeFBhUHg2R05BdVF4RiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNzI1NDExNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQczMifQ==' : process.env.SESSION_ID,
BOTNAME : BOTNAME,
FOOTERNAME: FOOTERNAME,
WHATSAPP_DEFAULT_SIZE : 1.7,
ANTI_DELETE : process.env.ANTI_DELETE === undefined ? 'true' : process.env.ANTI_DELETE,
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE === undefined ? 'false' : process.env.ALWAYS_ONLINE,
MAX_SIZE: process.env.MAX_SIZE === undefined ? '1536': process.env.MAX_SIZE,/*add this in megabytes*/
VERSION: '1.0.1',
ALIVE: `*Welcome to DIMENSION-X !* 🍿\n\n🎬 _Get ready for an incredible movie experience!_ 🎬\n\n📥 _Simply send me the name of the movie you want to download, and I'll provide you with direct download links._\n\n🌟 _No more hassle, just pure entertainment at your fingertips!_ 🌟\n\n🔥 _Let's dive into the world of movies together!_ 🔥\n\n${FOOTERNAME}`,
LOGO: `https://telegra.ph/file/1f7cb4b2e5ce9cdfb94bf.jpg`,
DEVNUMBER: '94766632281',
DEVBOT: '94766632281',
CHANNEL: 'https://whatsapp.com/channel/0029VaZn08Q7j6gBT4I8Ig23',
OWNERNUMBER : process.env.OWNERNUMBER === undefined ? '94766632281' : process.env.OWNERNUMBER,
IMAGE_ENHANCE: '', //https://vihangayt.me/tools/enhance?url=
DOWNLOADSAPI: 'https://sachibot-downloads.up.railway.app',
BOTNUMBER: process.env.BOTNUMBER === undefined ? '94785635619' : process.env.BOTNUMBER,
PREFIX: process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
Isuru: '94781658861',
Isuru2: '94765832338',
Isuru3: '94785635619', 
Isuru4: '',
Isuru5:'',
DEVAPIKEY : 'SACHIBOT',
imagenotfound: 'https://telegra.ph/file/8dd30f52e0e1b3d8f72c9.jpg',
imagesearch: 'https://telegra.ph/file/dcf25dd5c3564f71cf759.jpg',
imageconnect:'https://telegra.ph/file/1f7cb4b2e5ce9cdfb94bf.jpg',
menulogo: 'https://telegra.ph/file/e8eb561f394d4a0c214f7.jpg',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
};
