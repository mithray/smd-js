const jsdom = require("jsdom")
const c = require('ansi-colors')
const fetch = require('node-fetch')
const { JSDOM } = jsdom
const fs = require('fs')
const path = require('path')
whatwgSourceUrl = 'https://raw.githubusercontent.com/whatwg/html/master/source'

function generateCategoriesFile(data){
	let kindsOfContentSection = data.match(/(?<whole><h(?<h>[0-9])>Kinds of content<\/h\k<h>>.*?)<h5/msi)
	let section = kindsOfContentSection.groups.whole
	let hx = kindsOfContentSection.groups.h
	const dom = new JSDOM(section)
	
	categories = {}
	h1s = dom.window.document.getElementsByTagName("h1")
	h2s = dom.window.document.getElementsByTagName("h2")
	h3s = dom.window.document.getElementsByTagName("h3")
	h4s = dom.window.document.getElementsByTagName("h4")
	h5s = dom.window.document.getElementsByTagName("h5")
	h6s = dom.window.document.getElementsByTagName("h6")
	headings = [h1s, h2s, h3s, h4s, h5s, h6s]
	subs = []
	for (let i = 0; i < 6; i++){
	  let hs = headings[i]
	  for (let j = 0; j < hs.length; j++){
	    const match = hs[j].innerHTML.match(/(\w*) content$/i)
	    if (match) {
	      hs[j].id = match[1] + '-content'
	      list = dom.window.document.querySelector('#' + match[1] + '-content ~ .brief')
	      list.id = match[1] + '-list'
	      items = list.querySelectorAll('code')
	      for (let k = 0; k< items.length; k++){
	        category = match[1]
	        element = items[k].innerHTML
	        categories[element] = categories[element] ? categories[element] : []
	        alreadyContains = categories[element].indexOf(category) > -1
	        if(!alreadyContains){
	          categories[element].push(category)
	        }
	      }
	    }
	  }
	}
	const json = JSON.stringify(categories, null, 2)
  console.log(c.green.bold('Writing category list to file'))
  fs.writeFileSync(path.join(__dirname,'../rules/categories.json'), json)
}

console.log(c.bold('Fetching WHATWG HTML standard source file...'))
fetch(whatwgSourceUrl)
  .then(res => {
    return res.text()
  })
  .then(body => {
    console.log(c.bold('Generating category list'))
    generateCategoriesFile(body)
  })
