const smd = require('../index.js')
const fs = require('fs')
const path = require('path')
const validator = require('html-validator')
  
async function test(md){
  const html = smd(md)
console.log(html)
  const options = {
    validator: 'WHATWG',
    data: html,
    isFragment: true
  }
  try {
    const result = await validator(options)
    console.log(html)
 //   console.log(result)
  } catch (error) {
  //  console.log(html)
//    console.error(error)
  }
}

const md = fs.readFileSync(path.join(__dirname,'../.README.md'),'utf8')
test(md)
