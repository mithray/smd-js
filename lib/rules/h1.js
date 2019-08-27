const changeCase = require('change-case')

function h1Func(match, p1, p2) {
	let out = `<h1 id='${changeCase.paramCase(p1)}'>${p1}</h1>`
	return out
}
const h1 = {
	name: "h1",
	match: [{pattern: "^#{1} (.*)", flags: "mg"}],
	out: h1Func,
}

module.exports = h1
