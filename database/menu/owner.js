const owner = (pushname, prefix, botName, ownerName, _registered) => {
	return `-----[ *OWNER MENU* ]-----
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
┃│ ુོ➪ *${prefix}bc*
┃│ ુོ➪ *${prefix}clearall*
┃│ ુོ➪ *${prefix}setprefix*
┃│ ુོ➪ *${prefix}clone*
┃│ ુོ➪ *${prefix}block*
┃│ ુོ➪ *${prefix}unblock*
┃╰┈──────────────⩵꙰ཱི࿐
╰━━━━━━━━━━━━━━━━━━━━╯
-----[ *POWERED BY ${ownerName}* ]-----`
}
exports.owner = owner