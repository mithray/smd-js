function mark_func( match, p1, p2 ){
	let out = `<mark>${p1}</mark>`
	return out
}
const mark = {
	name: "mark",
	description: "HTML mark tag",
  match: [
		{ pattern: "{=(.*?)=}", flags: "mg" }
	],
	out: mark_func
}

module.exports = mark
