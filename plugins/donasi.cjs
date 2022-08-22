var handler = async m => m.reply(`
╭─「 Donasi 」
│ • TELKOMSEL [082211991425]
│ • DANA [082211991425]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282211991425
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
