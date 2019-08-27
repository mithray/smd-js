const smd = require('../index.js')
const fs 	= require('fs')
let markdown = fs.readFileSync('./bin/markdown.md', 'utf8')


smd(markdown)

