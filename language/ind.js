exports.noregis = () => {
        return `*⟪ BELUM REGISTRASI ⟫*\n\n_Jika pengen gunain bot_\n_Register dulu kak_ >_< \n\n*➸ Contoh: ${prefix}register Ramlan|18*`
}

exports.rediregis = () => {
        return `*⟪ SUDAH REGISTRASI ⟫*\n\n*kamu sudah terdaftar di bot ini kak -_-*`
}

exports.wrongf = () => {
        return`*Format text Salah !\nAtau Textnya kosong*`
}

exports.clears = () => {
        return`*clear all Success*`
}

exports.pc = () => {
        return`*⟪ REGISTRASI ⟫*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*⟪ DATA REGISTER ⟫*\n\nkamu sudah terdaftar dengan data \n\n➸ *DATA* \n\n➸ Name : ${namaUser} \n➸ Number : wa.me/${sender.split("@")[0]} \n➸ Umur : ${umurUser} \n➸ Waktu Register : ${time} \n\n➸ SN : ${serialUser} \n➸ NOTE : \n JANGAN LUPA INI PENTING:v`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*maaf tapi ${pushname} bukan owner script*`
}

exports.limitend = (pushname) => {
        return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
        return`
*⟪ LIMIT COUNT ⟫*
sisa limit anda : ${limitCounts}

NOTE : jika ingin bebas menggunain bot bisa donasi atau upgrade ke premium`
}

exports.satukos = () => {
        return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`*𝄖⟪ ATM ⟫𝄖*\n➸ *Nama* : ${pushname}\n➸ *Nomor* : ${sender.split("@")[0]}\n➸ *Uang* : ${uangkau}`
}
