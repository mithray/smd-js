function p_func( match, p1, p2 ){
	let out = `<p>${p1}${p2}</p>`
	return out
}
const p = {
	in: [ 
		{ pattern: "^([a-zA-Z0-9])(.*)$", flags: "mg"}, //Lines starting with letters or numbers.
		{ pattern: "^(<em>)(.*)$", flags: "mg"}, //Lines starting with an <em>tag.
		{ pattern: "^(<strong>)(.*)$", flags: "mg"}, //Lines starting with an <strong> tag.
	],
	out: p_func,
}

module.exports = [ p ]
