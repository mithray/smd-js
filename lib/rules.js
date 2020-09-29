const rules =[
  {
    nodeName: 'ul',
    regex: /((^- .*\n)+)/mg,
    func: (match, p1) => `<ul>\n${p1}\n</ul>\n`
  },
  {
    nodeName: 'li',
    regex: /^- (.*)$/mg,
    func: (match, p1) => `<li>${p1}</li>`
  },
  {
    nodeName: 'p',
    regex: /^([a-zA-Z].*)/mg,
    func: (match, p1) => `<p>${p1}</p>`
  },
  {
    nodeName: 'dl',
    regex: /^([a-zA-Z].*\n)(: (.*)\n)+/mg,
    func: (match, p1) => `<dl>${p1}</dl>`
  }
]

module.exports = rules
