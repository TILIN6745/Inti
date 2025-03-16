let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `_*𝐈𝐧𝐭𝐢 𝐁𝐨𝐭*_
  
   ${pesan}`
  let teks = `━━━━━━━━━━━━━━━━━━━━
   ${oi}\n\n 𝐄𝐲 𝐃𝐞𝐬𝐩𝐢𝐞𝐫𝐭𝐞𝐧 𝐋𝐞𝐬 𝐡𝐚𝐛𝐥𝐚 𝐈𝐧𝐭𝐢 𝐁𝐨𝐭
   ━━━━━━━━━━━━━━━━━━━━\n`
  for (let mem of participants) {
  teks += `⚡ @${mem.id.split('@')[0]}\n`}
  teks += `ㅤㅤㅤㅤ𝐈𝐧𝐭𝐢 𝐁𝐨𝐭`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
  handler.admin = true
  handler.group = true
  export default handler
