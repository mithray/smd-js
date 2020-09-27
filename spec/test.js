const smd = require('../index.js')
const fs = require('fs')
const path = require('path')

const md = fs.readFileSync(path.join(__dirname,'../README.md'),'utf8')
const html = smd(md)
fs.writeFileSync(path.join(__dirname,'README.html'),html)
