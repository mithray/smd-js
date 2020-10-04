const convert = require('./lib/convert.js')
const c = require('ansi-colors')

function smd(args){

  if (typeof args === 'string') args = { text: args }
	const converted = convert( args )

  return converted

}

module.exports = smd
