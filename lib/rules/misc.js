function code_inline_func(match, p1, p2){
  let out= `<code>${p1}</code>`
	return out 
}

const code_inline = {
  in: [
		{ pattern: "`(.*?)`", flags: "mg" }
	],
  out: code_inline_func
}

module.exports = [ code_inline ]
