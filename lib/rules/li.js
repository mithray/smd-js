function liFunc( match, p1, p2) {
	out = `<li>${p1}</li>`
	return out
}

const li = {
	name: "li",
	match: [
		{ pattern: "^[\\\*-+] (.*)", flags: "mg"}
	],
	out: liFunc
}

module.exports = li
