const changeCase = require('change-case')

function h2Func(match, p1, p2) {
	let out = `<h2 id='${changeCase.paramCase(p1)}'>${p1}</h2>`
	return out
}
const h2 = {
	name: "h2",
	match: [{pattern: "^#{2} (.*)", flags: "mg"}],
	out: h2Func,
}

module.exports = h2
