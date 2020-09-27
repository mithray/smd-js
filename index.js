const applyRuleset	  = require('./lib/applyRuleset.js')
const rulesets			  = {
  default: require('./lib/rules/default_set.js'),
  defaultPage: require('./lib/rules/default_set.js')
}

function smd(markdown, ruleset = rulesets.default){
  
	let html = applyRuleset( markdown, ruleset )

//	console.log(html)
  return html
	
}

module.exports = smd
