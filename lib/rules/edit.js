const del = {
  nodeName: 'del',
	description: "HTML delete tag",
	regex: /{-(?<inner>.*?)-}/mg,
	func: (args) => {
    let ret = "<del>"
    ret += args.groups.inner
    ret += '</del>'
    return ret
  }
}

const ins = {
	nodeName: "ins",
	description: "HTML insert tag",
	regex: /{\\+(?<inner>.*?)\\+}/mg,
  func: (args) => {
    let ret = '<ins>'
    ret += args.groups.inner
    ret += '</ins>'
    return ret
  }
}

module.exports = [ ins, del ]
