function delFunc( match, p1, p2 ){
	let out = `<del>${p1}</del>`
	return out
}
const del = {
	name: "delete",
	description: "HTML delete tag",
	match: [
		{ pattern: "{-(.*?)-}", flags: "mg" }
	],
  out: delFunc
}

module.exports = del
