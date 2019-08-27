function commentFunc( match, p1, p2 ){
  let out = `<mark><em>${p1}</em></mark>`
	return out
}
const comment = {
	name: "comment",
	description: "markup for adding comments on a document",
	match: [
		{ pattern: "{>>(.*?)<<}", flags: "mg" }
	],
	out: commentFunc
}

module.exports = comment
