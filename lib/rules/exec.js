const exec = {
  nodeName: 'exec',
  regex: {
    toHTML: /\$\$\$ (?<type>.*$)\n(?<content>(.*\n)+)\$\$\$/,
  },
  func: (args) => {
    let type = args.groups.type
    let content = args.groups.content
    return processor(type,content)
  }
}

module.exports = [ exec ]
