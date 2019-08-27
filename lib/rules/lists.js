function processList(block,type, start){
	let str = ""
	let regex = new RegExp("- (.*?)", "g")
	block = block.replace(regex, "<li>$1</li>")
	str += `<ul type="circle">${block}</ul>`
	return str
}
function process(match, p1, p2, p3){
	let str = processList(p1,'circle', '1');
	return str
}
var result = content.replace(regex, process);

module.exports = [ code, ]
