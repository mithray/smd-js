function doubleQuotesFunc( match, p1, p2 ) {
  let out = `&#8220;${p1}&#8221;`
  return out
}
const double_quotes = {
	name: "double_quotes",
  match: [
		{pattern:"[^␛]\"(.*?)\"", flags: "mg"}
	],
	out: doubleQuotesFunc
}



module.exports = double_quotes
