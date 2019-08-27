const applyRuleset	= require('./lib/applyRuleset.js')
const ruleset				= require('./lib/rules/default_set.js')

function smd(markdown){

	let html = applyRuleset( markdown, ruleset )

	console.log(html)
	
}

module.exports = smd
