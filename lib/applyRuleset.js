function applyRule( markdown, rule ){
	let pattern = rule.match[0].pattern
	let flags   = rule.match[0].flags
	let func    = rule.out
	let	regex = new RegExp(pattern, flags)

 	return markdown.replace(regex, func)

}


function applyRuleset( markdown, ruleset ){

	var html = markdown

	for ( let rule_family of ruleset ) {
		for ( let rule of rule_family) {
			html = applyRule( html, rule )
		}
	}

  console.log(html)
	return html

}


module.exports = applyRuleset
