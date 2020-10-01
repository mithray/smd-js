const applyRuleset	  = require('./lib/applyRuleset.js')
const rulesets			  = {
  default: require('./lib/rulesets/default.js'),
  defaultPage: require('./lib/rulesets/default.js')
}

function smd(markdown, ruleset = rulesets.default){
  
	return applyRuleset( markdown, ruleset )
	
}

module.exports = smd
