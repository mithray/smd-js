const smd = require('../index.js')
process.env.DEBUG = ''
const validate = false
const c = require('ansi-colors')
const fs = require('fs')
const path = require('path')
if(validate){
  const validator = require('html-validator')
}
  
async function test(mdPath){
  if(process.env.DEBUG) console.time('TEST')
  if(process.env.DEBUG) console.time('READ_MARKDOWN_FILE_FROM_DISK')
  const md = fs.readFileSync(path.resolve(mdPath),'utf8')
  if(process.env.DEBUG) console.timeEnd('READ_MARKDOWN_FILE_FROM_DISK') 
  if(process.env.DEBUG) console.time('MARKDOWN_TRANSFORMED')
  const html = smd(md)
  if(process.env.DEBUG) console.timeEnd('MARKDOWN_TRANSFORMED')
  if(validate){
    const options = {
      validator: 'WHATWG',
      data: html,
      isFragment: true
    }
    try {
      if(process.env.DEBUG) console.time('VALIDATION')
      const result = await validator(options)
      if(process.env.DEBUG) console.timeEnd('VALIDATION')
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
  if(process.env.DEBUG) console.timeEnd('TEST')
  console.log(html)
  return html
}

test(process.argv[2])
