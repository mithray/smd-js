function sup_func( match, p1, p2 ){
	let out = `<sup>${p1}</sup>`
	return out
}
const sup = {
	name: "superscript",
	description: "superscript",
	match: [ 
		{ pattern: "\\^(.*?)\\^", flags: "mg"} 
	],
	out: sup_func,
}

module.exports = sup
