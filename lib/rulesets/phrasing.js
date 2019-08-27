const strong	= require('../rules/strong.js')
const em			= require('../rules/em.js')
const sup			= require('../rules/sup.js')
const sub			= require('../rules/sub.js')

const phrasing = {
	name: "phrasing",
	description: "tags strong, em, sup, sub",
	rules: [ 
		strong,
		em, 
		sup, 
		sub
	]
}

module.exports = phrasing
