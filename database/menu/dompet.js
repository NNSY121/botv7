const dmpt = (pushname, prefix, botName, ownerName, _registered) => {
	return `-----[ *DOMPET MENU* ]-----
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
┃│ ુོ➪ *${prefix}limit*
┃│ ુོ➪ *${prefix}buylimit*
┃│ ુོ➪ *${prefix}atm*
┃│ ુོ➪ *${prefix}level*
┃│ ુོ➪ *${prefix}transfer*
┃╰┈──────────────⩵꙰ཱི࿐
╰━━━━━━━━━━━━━━━━━━━━╯
-----[ *POWERED BY ${ownerName}* ]-----`
}
exports.dmpt = dmpt