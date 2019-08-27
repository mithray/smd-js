function em_func( match, p1, p2 ){
	let out = `<em>${p1}</em>`
	return out
}
const em = {
	name: "em",
	description: "emphasis",
	match: [ 
		{ pattern: "\\*\\b(.*?)\\b\\*", flags: ""}, 
		{ pattern: "_(.*?)_", flags: "mg" }
	],
	out: em_func,
}

module.exports = em 
