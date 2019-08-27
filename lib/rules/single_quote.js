function singleQuoteFunc( match, p1, p2 ) {
  let out = `&#x27;`
  return out
}
const single_quote = {
	name: "single_quote",
  match: [
		{pattern: "[^␛]", flags: "mg"}
	],
	out: singleQuoteFunc
}

module.exports = single_quote
