function doubleQuoteFunc( match, p1, p2 ) {
  let out = `&quot;`
  return out
}
const double_quote = {
	name: "double_quote",
  match: [
		{pattern: "\\\"", flags: "mg"}
	],
	out: doubleQuoteFunc
}



module.exports = double_quote
