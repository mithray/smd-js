function paragraphFunc( match, p1 ){
	let start = '<p>'
	let mid = p1 
	let end = '</p>'
	let out = start + mid + end
	return out
}
const paragraph = {
	name: "paragraph",
	description: "paragraph",
	match: [ 
		{ pattern: "^([a-zA-Z].*)", flags: "g"} 
//		{ pattern: "^[a-zA-Z]", flags: "g"} 
	],
	out: paragraphFunc,
}

module.exports = paragraph
