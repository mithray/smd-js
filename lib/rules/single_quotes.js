function singleQuotesFunc( match, p1, p2 ) {
  let out = `&#8216;${p1}&#8217;`
  return out
}
const single_quotes = {
	name: "single_quotes",
  match: [
		{pattern: "[^␛]'(.*?)'", flags: "mg"}
	],
	out: singleQuotesFunc
}

module.exports = single_quotes
