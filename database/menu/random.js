const random = (pushname, prefix, botName, ownerName, _registered) => {
	return `🔰 -----[ *GABUTZ MENU* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan ✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ Nama BOT : ${botName}
┃│➸ Prefix :「  ${prefix}  」
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Berikut adalah fitur yang ada pada bot ini!✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}wibu*
┃│➸ *${prefix}loli*
┃│➸ *${prefix}randomhentong*
┃│➸ *${prefix}nsfwneko*
┃│➸ *${prefix}nsfwtrap*
┃│➸ *${prefix}randomanime*
┃│➸ *${prefix}husbu*
┃│➸ *${prefix}husbu2*
┃│➸ *${prefix}randomkpop*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.random = random