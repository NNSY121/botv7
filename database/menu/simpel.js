const simple = (pushname, prefix, botName, ownerName, _registered) => {
	return `-----[ *SIMPLE MENU* ]-----
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan ✨
╭━━•✵ ⃟  ⃟  ⃟✵•━━━━━━━━━━━━━╮ุุุุุุุุุุ
┃╭────────┈┈✩̣̣̣̣*──➤ ↶↷*
┃│ ુོ➪ Nama BOT : ${botName}
┃│ ુོ➪ Prefix :「  ${prefix}  」
┃│ ુོ➪ USER ${botName} : ${_registered.length}
┃╰┈──────────────⩵꙰ཱི࿐
╰━━━━━━━━━━━━━━━━━━━━╯
Berikut adalah fitur yang ada pada bot ini!✨
╭━━•✵ ⃟  ⃟  ⃟✵•━━━━━━━━━━━━━╮ุุุุุุุุุุ
┃╭────────┈┈✩̣̣̣̣*──➤ ↶↷*
┃│ ુོ➪ *${prefix}sticker*
┃│ ુོ➪ *${prefix}ttp*
┃│ ુོ➪ *${prefix}tts*
┃│ ુོ➪ *${prefix}toimg*
┃│ ુོ➪ *${prefix}nulis*
┃│ ુོ➪ *${prefix}stalkig*
┃│ ુོ➪ *${prefix}quotes*
┃│ ુོ➪ *${prefix}bikinquote*
┃╰┈──────────────⩵꙰ཱི࿐
╰━━━━━━━━━━━━━━━━━━━━╯
-----[ *POWERED BY ${ownerName}* ]-----`
}
exports.simple = simple