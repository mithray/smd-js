const convert = require('./lib/convert.js')

function smd(args){
  args.text = args.text ? args.text : undefined
  args.inputFormat = args.inputFormat ? args.inputFormat : 'smd'
  args.outputFormat = args.outputFormat ? args.outputFormat: 'html'
  args.nodeName = args.nodeName ? args.nodeName : 'root'
  
	return convert( args )
	
}

module.exports = smd
