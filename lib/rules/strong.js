function strong_func( match, p1, p2 ){
	let out = `<strong>${p1}</strong>`
	return out
}
const strong = {
	name: "strong",
	description: "strong tag",
	match: [ 
		{ pattern: "\\*\\*(.*?)\\*\\*", flags: "mg"}, 
		{ pattern: "__(.*?)__", flags: "mg" }
	],
	out: strong_func,
}

module.exports = strong
