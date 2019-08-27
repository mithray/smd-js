const critic		= require('./critic.js')
const emojis		= require('./emojis.js')
const phrasing	= require('./phrasing.js')

const inline = {
	name: "inline",
	description: "inline text processing ",
	rules: [ 
		critic, 
		emojis, 
		phrasing
	]
}

module.exports = inline
