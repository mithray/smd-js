const del 		= require('../rules/del.js')
const ins 		= require('../rules/ins.js')
const mark		= require('../rules/mark.js')
const comment = require('../rules/comment.js')

const critic = {
	name: "critic",
	description: "contains the critic markings del, ins, comment",
	rules: [ 
		del, 
		ins, 
		comment
	]
}

module.exports = critic
