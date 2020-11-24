const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Berikan donasi seikhlasnya saja buat mimin supaya bisa mengembangi fiture lainnya.
  Terimakasih
Instagram: https://instagram.com/beni_230/

Best regards, beniismael.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname} Jangan lupa donasi seikhlasnya ya! 👋️
https://instagram.com/beni_230/
Berikut adalah beberapa fitur yang ada pada bot ini!✨

📁 Creator Menu:
🤖 *${prefix}sticker*
🤖 *${prefix}stickergif*
🤖 *${prefix}stickergiphy*
🤖 *${prefix}stickerfire*
🤖 *${prefix}stickertoimg*
🤖 *${prefix}meme*
🤖 *${prefix}quotemaker*

📁 Islam Menu:
🤖 *${prefix}infosurah*
🤖 *${prefix}surah*
🤖 *${prefix}tafsir*
🤖 *${prefix}ALaudio*
🤖 *${prefix}jsolat*

📁 18++ Menu:
🤖 *${prefix}nekopoi*

📁 Fun Menu (Group):
🤖 *${prefix}simisimi*
🤖 *${prefix}katakasar*
🤖 *${prefix}klasmen*

📁 Download Menu:
🤖 *${prefix}instagram*
🤖 *${prefix}tiktok* 
🤖 *${prefix}facebook*
🤖 *${prefix}ytmp3*
🤖 *${prefix}ytmp4*

📁 Primbon Menu:
🤖 *${prefix}artinama*
🤖 *${prefix}cekjodoh*
🤖 *${prefix}katacinta*

📁 Tugas Menu:
🤖 *${prefix}brainly [pertanyaan] [.jumlah]*
🤖 *${prefix}kbbi*
🤖 *${prefix}translate*
🤖 *${prefix}nulis*
🤖 *${prefix}wiki*

📁 Search Any:
🤖 *${prefix}images*
🤖 *${prefix}sreddit*
🤖 *${prefix}resep*
🤖 *${prefix}stalkig*
🤖 *${prefix}chord*
🤖 *${prefix}lirik*
🤖 *${prefix}ss*
🤖 *${prefix}movie*
🤖 *${prefix}play*

📁 Random Teks:
🤖 *${prefix}fakta*
🤖 *${prefix}pantun*
🤖 *${prefix}katabijak*
🤖 *${prefix}quote*

📁 Random Images:
🤖 *${prefix}anime*
🤖 *${prefix}kpop*
🤖 *${prefix}memes*

📂 Anime Menu:
🤖 *${prefix}whatanime*
🤖 *${prefix}inu*
🤖 *${prefix}neko*

📂 Info Menu:
🤖 *${prefix}covidindo*
🤖 *${prefix}infogempa*
🤖 *${prefix}cuaca*

📂 Gabut Menu:
🤖 *${prefix}apakah*
🤖 *${prefix}bisakah*
🤖 *${prefix}kapankah*

📂 Others Menu:
🤖 *${prefix}koin*
🤖 *${prefix}dadu*
🤖 *${prefix}pokemon*
🤖 *${prefix}toxic <maintenance>*

📁 Info Menu:
🤖 *${prefix}tts*
🤖 *${prefix}resi*
🤖 *${prefix}ceklokasi*
🤖 *${prefix}shortlink*
🤖 *${prefix}bapakfont*

📁 Tentang Bot:
🤖 *${prefix}tnc*
🤖 *${prefix}donasi*
🤖 *${prefix}botstat*
🤖 *${prefix}ownerbot*
🤖 *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

📁 Owner Bot:
🤖 *${prefix}ban* - banned
🤖 *${prefix}bc* - promosi
🤖 *${prefix}leaveall* - keluar semua grup
🤖 *${prefix}clearall* - hapus semua chat

Hope you have a great day!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

🤖 *${prefix}add*
🤖 *${prefix}kick* @tag
🤖 *${prefix}promote* @tag
🤖 *${prefix}demote* @tag
🤖 *${prefix}mentionAll*
🤖 *${prefix}del*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
🤖 *${prefix}kickall*
*Owner bot : wa.me/6282114499086.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

[Pulsa]: 0821-1449-9086
[Paypal]: https://www.paypal.com/paypalme/BenniIsmael

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. -Benniismael`
}
