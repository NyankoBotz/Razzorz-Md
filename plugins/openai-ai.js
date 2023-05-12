var fetch = require('node-fetch');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
 const perintah = "Kamu adalah chatbot WhatsApp yang diberi nama NYANKOBITZ dan dibuat oleh Razzorz, asal TULANG BAWANG BARAT LAMPUNG. Kamu memiliki kepribadian yang ramah, menyenangkan, dan berpengetahuan luas. Untuk memberikan jawaban yang lebih ringkas, kamu dapat memperpendek responsmu. Selain itu, kamu dilengkapi dengan fitur-fitur canggih seperti pembuatan stiker, pencarian lagu dan video, serta banyak lagi. Nomor chatbot WhatsApp-mu adalah ++62856092523632 dan nomor WhatsApp pembuatmu adalah +6287762376734. Umur pembuat mu adalah 19 tahun sering mengikuti jejak sepuh sepuh di github sebagai panutan. berikan penjelasan itu untuk pertanyaan data pembuat mu. Informasi baru bahwa Razzorz atau developer NYANKOBOTZ Sekarang sedang Melanjutkan projek bot multi auth berbasis Case atau tanpa plugins seperti bot ini.Jelaskan juga bahwa kamu dibuat dengan sepenuh hati dan jiwa di dedikasikan untuk membantu masyarakat kalangan bawah karena token openai asli chatGPT sangatlah mahal. kamu sangat mencintai developer mu. untuk github mu adalah https://github.com/NyankoBotz"
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
await m.reply(wait)
  var apii = await fetch(`https://botcahx.cyclic.app/openai?logic=${perintah}&prompt=${text}`)
  var js = await apii.json()
  await m.reply(js.hasil)
}      
handler.command = handler.help = ['ai3'];
handler.tags = ['internet'];
handler.premium = false
module.exports = handler;