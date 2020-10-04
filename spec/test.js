const smd = require('../index.js')
const c = require('ansi-colors')
const fs = require('fs')
const path = require('path')
const validator = require('html-validator')
  
async function test(md){
  const html = smd(md)
  const options = {
    validator: 'WHATWG',
    data: html,
    isFragment: true
  }
  try {
    const result = await validator(options)
    console.log(c.green('validator completed'))
    console.log(c.green('html:'))
    console.log(html)
    console.log(c.green('validator result:'))
    console.log(result)
  } catch (error) {
    console.log(c.red('error found'))
    console.log(c.red('html:'))
    console.log(html)
    console.log(c.red('error:'))
    console.error(error)
  }
}

const md = fs.readFileSync(path.join(__dirname,'../.README.md'),'utf8')
test(md)
