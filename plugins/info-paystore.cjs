var handler = async (m, {
	conn
}) => {
	//-----PRICE
	//sewa
	var sh = '12'
	var sn = '15'
	var ss = '25'
	var sp = '35'
	var sv = '45'
	//premium
	var ph = '15'
	var pn = '20'
	var pp = '40'
	var pv = '50'
	var ppm = '70'
	var info = `
╭━━━━「 *POINT* 」
┊⫹⫺ *1 point:* _${sh}k_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ * _${ph}k (1 minggu)_
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *Pulsa:* [082211991425]
• *Dana:* [082211991425]

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, point buat apa?
💬: point bisa kamu gunakan untuk mengundang bot ke dalam grup kamu selama 1 bulan, setiap join 1 grup mengurangi 1 point

🗣️: Kak, kalau pointnya sudah habis apakah masih bisa mengundang bot?
💬: tidak bisa kak, maaf yah :)

🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
	var sections = [{
		title: `-------✦ SEWA ✦-------`,
		rows: [{
				title: "🔖 𝗛𝗘𝗠𝗔𝗧",
				rowId: '.order *Paket:* HEMAT • Sewa',
				description: '𝗣𝗿𝗶𝗰𝗲: ' + sh + 'k'
			},
		]
	}, {
		title: `-------✦ PREMIUM ✦-------`,
		rows: [{
				title: "🌟 𝗛𝗘𝗠𝗔𝗧",
				rowId: '.order *Paket:* HEMAT • Premium',
				description: '𝗣𝗿𝗶𝗰𝗲: ' + ph + 'k (1 minggu)'
			},
		]
	}, ]
	var d = new Date(new Date + 3600000)
	var locale = 'id'
	var time = d.toLocaleTimeString(locale, {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	})
	var listMessage = {
		text: info,
		footer: `𝗧 𝗜 𝗠 𝗘 : ${time}`,
		title: "Sycoryz",
		buttonText: "Click Here!",
		sections
	}
	await conn.sendMessage(m.chat, listMessage)
	//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

module.exports = handler
