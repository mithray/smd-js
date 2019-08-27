function blockquote_func( match, p1, p2 ){
	let start = '<blockquote>'
	let mid = p1 + p2
	let end = '</blockquote>'
	let out = start + mid + end
	return out
}
const blockquote = {
	name: "blockquote",
	description: "blockquote",
	match: [ 
		{ pattern: "> (.*)", flags: "g"} 
	],
	out: blockquote_func,
}

module.exports = blockquote
