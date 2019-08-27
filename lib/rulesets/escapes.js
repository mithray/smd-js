const html_escapes 	= require('./html_escapes.js')
const typography			= require('./typography.js')

const escapes = {
	name: "escapes",
	description: "rules for html escapes and SmartyPants typography",
	rules: [
		html_escapes, 
		typography 
	]
}

module.exports = escapes
