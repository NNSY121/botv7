const downloader = (pushname, prefix, botName, ownerName, _registered) => {
	return `-----[ *DOWNLOAD MENU* ]-----
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan ✨
╭━━•✵ ⃟  ⃟  ⃟✵•━━━━━━━━━━━━━╮ุุุุุุุุุุ
┃╭────────┈┈✩̣̣̣̣*──➤ ↶↷*
┃│➸ Nama BOT : ${botName}
┃│➸ Prefix :「  ${prefix}  」
┃│➸ USER ${botName} : ${_registered.length}
┃╰┈──────────────⩵꙰ཱི࿐
╰━━━━━━━━━━━━━━━━━━━━╯
Berikut adalah fitur yang ada pada bot ini!✨
╭━━•✵ ⃟  ⃟  ⃟✵•━━━━━━━━━━━━━╮ุุุุุุุุุุ
┃╭────────┈┈✩̣̣̣̣*──➤ ↶↷*
┃│➸ *${prefix}play*
┃│➸ *${prefix}ytmp3*
┃│➸ *${prefix}yutubdl*
┃│➸ *${prefix}tiktod*
┃│➸ *${prefix}pinterest*
┃╰┈──────────────⩵꙰ཱི࿐
╰━━━━━━━━━━━━━━━━━━━━╯
-----[ *POWERED BY ${ownerName}* ]-----`
}
exports.downloader = downloader