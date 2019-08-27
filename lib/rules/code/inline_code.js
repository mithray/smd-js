function code_func( match, p1, p2 ){
	let out = `<code>${p1}</code>`
	return out
}
const inline_code = {
	name: "inline code",
	description: "inline code",
	match: [ 
		{ pattern: "`\\b(.+?)\\b`", flags: "mg"} 
	],
	out: code_func
}

module.exports = inline_code
