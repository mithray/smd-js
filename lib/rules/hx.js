const changeCase = require('change-case')

function hxFunc(match, p1, p2) {
	let h = p1.length
	let out = `<h${h} id='${changeCase.paramCase(p2)}'>${p2}</h${h}>`
	return out
}
const hx = {
	name: "hx",
	description: "Headings <h1> to <h6> in atx style",
	match: [{pattern: "^(#+) (.*)", flags: "mg"}],
	out: hxFunc,
}

module.exports = hx
