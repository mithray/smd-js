const changeCase = require('change-case')

function h6Func(match, p1, p2) {
	let out = `<h6 id='${changeCase.paramCase(p1)}'>${p1}</h6>`
	return out
}
const h6 = {
	name: "h6",
	match: [{pattern: "^#{6} (.*)", flags: "mg"}],
	out: h6Func,
}

module.exports = h6

