const emoji = require('node-emoji')
const fs = require('fs')

let data = fs.readFileSync('./semantic.md', 'utf8')
data = emoji.emojify(data)

console.log(data)
