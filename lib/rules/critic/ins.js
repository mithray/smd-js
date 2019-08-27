function insFunc( match, p1, p2 ){
	let out = `<ins>${p1}</ins>`
	return out
}
const ins = {
	name: "ins",
	description: "HTML insert tag",
	match: [
		{ pattern: "{\\+(.*?)\\+}", flags: "mg"	}
	],
	out: insFunc
}

module.exports = ins
