function sub_func( match, p1, p2 ){
	let out = `<sub>${p1}</sub>`
	return out
}
const sub = {
	name: "subscript",
	description: "subscript",
	match: [ 
		{ pattern: "~\\b(.+?)\\b~", flags: "mg"} 
	],
	out: sub_func,
}

module.exports = sub
