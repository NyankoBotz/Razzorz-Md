let handler = async m => {

let intro = `╭─── *「 Kartu Intro 」*
│       
│ *ℕ𝖆𝖒𝖆     :* 
│ *𝔾𝖊𝖓𝖉𝖊𝖗   :* 
│ *𝕌𝖒𝖚𝖗      :* 
│ *ℍ𝖔𝖇𝖇𝖎    :* 
│ *𝕊𝖙𝖆𝖙𝖚𝖘 ℙ𝖊𝖐𝖊𝖗𝖏𝖆𝖆𝖓      :* 
│ *𝔸𝖘𝖆𝖑        :* 
│ *𝔸𝖌𝖆𝖒𝖆    :* 
│ *𝕊𝖙𝖆𝖙𝖚𝖘     :* 
╰──────────────`
m.reply(intro)
}
handler.command = /^(intro)$/i

module.exports = handler