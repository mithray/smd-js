const smd = require('../index.js')
const debug = true
const validate = false
const c = require('ansi-colors')
const fs = require('fs')
const path = require('path')
if(validate){
  const validator = require('html-validator')
}
  
async function test(mdPath){
  if(debug) console.time('TEST')
  if(debug) console.time('READ_MARKDOWN_FILE_FROM_DISK')
  const md = fs.readFileSync(path.resolve(mdPath),'utf8')
  if(debug) console.timeEnd('READ_MARKDOWN_FILE_FROM_DISK') 
  if(debug) console.time('MARKDOWN_TRANSFORMED')
  const html = smd(md)
  if(debug) console.timeEnd('MARKDOWN_TRANSFORMED')
  if(validate){
    const options = {
      validator: 'WHATWG',
      data: html,
      isFragment: true
    }
    try {
      if(debug) console.time('VALIDATION')
      const result = await validator(options)
      if(debug) console.timeEnd('VALIDATION')
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
  if(debug) console.timeEnd('TEST')
  //console.log(c.green('html:'))
//  console.log(html)
  return html
}

test(process.argv[2])
