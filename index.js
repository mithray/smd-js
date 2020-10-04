const convert = require('./lib/convert.js')
const c = require('ansi-colors')

function smd(args){
  if (typeof args === 'string') args={text: args}
  console.log('---args---') 
  console.log(c.blue('[index.js]'))
  console.log(args) 
  console.log('---/args---') 
	const converted = convert( args )
  console.log('---converted---') 
  console.log(c.blue('[index.js]'))
  console.log(converted) 
  console.log('---/converted---') 
  return converted
	
}

module.exports = smd
