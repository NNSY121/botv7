const help = (pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku) => {
        return `-----[ *MENU ${botName}* ]-----
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan ✨
╭━━•✵ ⃟  ⃟  ⃟✵•━━━━━━━━━━━━━╮ุุุุุุุุุุ
┃╭────────┈┈✩̣̣̣̣*──➤ ↶↷*
┃│ ુོ➪ NAMA : ${pushname}
┃│ ુོ➪ UANG : Rp:${uangku}
┃│ ુོ➪ XP : ${reqXp}
┃│ ુོ➪ LEVEL : ${getLevelingLevel(sender)}
┃│ ુོ➪ USER ${botName} : ${_registered.length}
┃╰┈──────────────⩵꙰ཱི࿐
╰━━━━━━━━━━━━━━━━━━━━╯
Berikut adalah fitur yang ada pada bot ini!✨
╭━━•✵ ⃟  ⃟  ⃟✵•━━━━━━━━━━━━━╮ุุุุุุุุุุ
┃╭──────────────────
┃│ ુོ➪ *${prefix}info*
┃│ ુོ➪ *${prefix}bugreport*
┃│ ુོ➪ *${prefix}donasi*
┃│ ુོ➪ *${prefix}owner*
┃│───────────────────
┃│ ુོ➪ *${prefix}simpelmenu*
┃│ ુོ➪ *${prefix}downloadmenu*
┃│ ુོ➪ *${prefix}gabutmenu*
┃│ ુོ➪ *${prefix}groupmenu*
┃│ ુོ➪ *${prefix}randommenu*
┃│ ુོ➪ *${prefix}dompet*
┃│ ુོ➪ *${prefix}makermenu*
┃│ ુོ➪ *${prefix}othermenu*
┃│ ુོ➪ *${prefix}soundmenu*
┃│ ુོ➪ *${prefix}ownermenu*
┃╰┈──────────────⩵꙰ཱི࿐
╰━━━━━━━━━━━━━━━━━━━━╯
-----[ *POWERED BY ${ownerName}* ]-----`
}
exports.help = help