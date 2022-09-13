let handler = async m => m.reply(`
◪ 📮 *「 Donasi • Pulsa/Dana 」*
│ • [6285767154127]
│ • [6285767154127]
│ • https://saweria.co/HudhaBot
│ • https://saweria.com/suportikhsanbot
│ *KLICK DOANG DONASI KAGA*
╰──────────═┅═──────────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
