const convert = require('./lib/convert.js')

function smd(args){
  
  if (typeof args === 'string') args={text: args}
	return convert( args )
	
}

module.exports = smd
