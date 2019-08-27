function ampersand_func( match, p1, p2){
  let out= `&amp;`
	return out
}
const ampersand = {
	name: "ampersand",
  match: [
		{pattern: "[^␛]&", flags: "mg"}
	],
	out: ampersand_func
}

module.exports = [ ampersand ] 
