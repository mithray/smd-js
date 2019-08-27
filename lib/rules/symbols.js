function ampersand_func( match, p1, p2){
  let out= `&amp;`
	return out
}
const ampersand = {
  in: [{pattern: "[^␛]&", flags: "mg"}],
	out: ampersand_func
}



function angle_bracket_left_func( match, p1, p2 ) {
  let out = `&lt;`
  return out
}
const angle_bracket_left = {
  in: [{pattern: "[^␛]<[^}]", flags: "mg"}],
  out: angle_bracket_left_func
}



function angle_bracket_right_func( match, p1, p2 ) {
  let out = `&gt;`
  return out
}
const angle_bracket_right = {
  in: [{pattern: "[^␛][^{]>", flags: "mg"}],
  out: angle_bracket_right_func
}



function en_dash_func( match, p1, p2 ) {
  let out = `&ndash;`
  return out
}
const en_dash = {
  in: [
		{pattern: "[^␛]--", flags: "mg"}
	],
  out: en_dash_func
}



function em_dash_func( match, p1, p2 ) {
  let out = `&mdash;`
  return out
}
const em_dash = {
  in: [
		{pattern: "[^␛]---", flags: "mg"}
	],
	out: em_dash_func
}



function elipsis_func( match, p1, p2 ) {
  let out = `&hellip;`
  return out
}
const elipsis = {
  in: [
		{pattern: "[^␛]\\.\\.\\.", flags: "mg"}
	],
	out: elipsis_func
}



function apostrophes_func( match, p1, p2 ) {
  let out = `&#8216;${p1}&#8217;`
  return out
}
const apostrophes = {
  in: [{pattern: "[^␛]'(.*?)'", flags: "mg"}],
	out: apostrophes_func
}



function quotations_func( match, p1, p2 ) {
  let out = `&#8220;${p1}&#8221;`
  return out
}
const quotations = {
  in: [
		{pattern:"[^␛]\"(.*?)\"", flags: "mg"}
	],
	out: quotations_func
}



module.exports = [ 
	ampersand, 
				/*
	angle_bracket_left, 
	angle_bracket_right, 
				*/
	em_dash, 
	en_dash, 
	elipsis, 
	apostrophes, 
	quotations
] 
