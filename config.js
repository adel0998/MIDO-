import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['249111230420', 'Adham khaled', true], 
 ['201014576656', 'Adham Khaled', true],  ['249111230420'], ['249111230420'], ['249111230420'], ['249111230420'], ['249111230420'], ['249111230420'], ['249111230420'], ['249111230420'], ['249111230420']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +201208386317
global.confirmCode = ''

global.animxscans = ['249111230420']
global.suittag = ['249111230420']
global.mods = []
global.prems = []

global.packname = '249111230420'
global.author = 'MIDO 𝐵𝛩𝑇'
global.wm = 'MIDO 𝐵𝛩𝑇'
global.wm2 = 'MIDO 𝐵𝛩𝑇'
global.azami = 'MIDO 𝐵𝛩𝑇'
global.cb = 'MIDO 𝐵𝛩𝑇'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.KMA = '╰━━━〔 *🛡️ 1.7.9* 〕━━━━━⬣'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = 'MIDO 𝐵𝛩𝑇'
global.devnum = '249111230420'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
