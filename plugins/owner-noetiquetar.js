let handler = async (m, {conn, text}) => {
  let name = await conn.getName(m.sender);

conn.reply(m.chat, `*[ ⚠ ️] No etiquetes a mi creador, si es algo urgente contacta con el a su chat privado*` ,m, { contextInfo:{ externalAdReply: {title: '𝐍𝐎-𝐄𝐓𝐈𝐐𝐔𝐄𝐓𝐀𝐑', body: 'ᴇsᴄʀɪʙɪʀʟᴇ ᴀᴘʟᴀsᴛᴀɴᴛᴏ ᴀǫᴜɪ', sourceUrl: 'wa.me/51992004117', thumbnail: imagen7}}})
}
handler.customPrefix = /@51992004117/i;
handler.command = new RegExp();

export default handler;

  
