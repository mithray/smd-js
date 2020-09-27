const applyRuleset	  = require('./lib/applyRuleset.js')
const rulesets			  = {
  default: require('./lib/rules/default_set.js'),
  defaultPage: require('./lib/rules/default_set.js')
}

function smd(markdown, ruleset = rulesets.default){
  
	return applyRuleset( markdown, ruleset )
	
}

module.exports = smd
