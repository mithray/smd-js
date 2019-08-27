

/*
const fetch = require('cross-fetch')
const fs = require('fs')
const emoji_data_url = ('https://unicode.org/Public/emoji/12.0/emoji-data.txt')

function toJson(data_txt){
	let regex = []
	regex.comments = /^#/
	regex.emptylines = /^$/
	regex.ambiguous = /\.\./

	var sanitized

	Object.keys(regex).forEach( key => {
		sanitized = data_txt.replace(regex[key], '')
	})


//	console.log(sanitized)
	return sanitized

}

fetch(emoji_data_url)
	.then( res => {
		let body = res.body
		let keys = Object.keys(body)
		fs.writeFileSync('./emoji_data.txt', body)
//					console.log(res)
//		console.log( body )
		let emoji_data_json = toJson( body )
	})

fetch('//api.github.com/users/lquixada')

  .then(res => {
					    if (res.status >= 400) {
											      throw new Error("Bad response from server");
											    }
					    return res.json();
					  })
  .then(user => {
					    console.log(user);
					  })
  .catch(err => {
					    console.error(err);
					  });
						*/
const emoji = require('node-emoji')

let coffee = emoji.get('coffee')
console.log(coffee)
