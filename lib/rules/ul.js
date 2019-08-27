const li = require('./li.js')

function ulFunc( match, p1, p2 ) {
	let pattern = li.match[0].pattern
	let flags = li.match[0].flags
	let regex = new RegExp(pattern,flags)
	let outFunc = li.out
	let block = match.replace(regex, outFunc)

	out = `<ul>${block}</ul>`
	return out
}
const ul = {
	name: "ul",
	description: "unordered list",
	match: [
		{ pattern: "(^[\\\*-+] (.*?)$\n)+", flags: "mgs"}
	],
	out: ulFunc
}

module.exports = ul
