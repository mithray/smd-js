function applyRule( markdown, rule ){
	let pattern = rule.match[0].pattern
	let flags   = rule.match[0].flags
	let func    = rule.out
	let	regex = new RegExp(pattern, flags)

 	let html = markdown.replace(regex, func)

	return html

}


function applyRuleset( markdown, ruleset ){

	var modified_markdown = markdown

	for ( let rule_family of ruleset ) {
		for ( let rule of rule_family) {
			
			modified_markdown = applyRule( modified_markdown, rule )

		}
	}

	var html = modified_markdown
	
	return html
}


module.exports = applyRuleset
