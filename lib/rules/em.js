function em_func( match, p1, p2 ){
	let out = `<em>${p1}</em>`
	return out
}
const em = {
	name: "em",
	description: "emphasis",
	match: [ 
		{ pattern: "\\*(.*?)\\*", flags: "mg"}, 
		{ pattern: "_(.*?)_", flags: "mg" }
	],
	out: em_func,
}

module.exports = em 
