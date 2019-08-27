function interpolateFunc(match, p1, p2){
	let data = content_obj.data
	console.log(data)
	Object.keys(data).forEach( key => {
		console.log(key)
		eval(`let ${key} = {}`)
		Object.keys(data[key]).forEach( item => {
		console.log(item)
		eval(`key.item = item`)
		})
	})
	/*
	console.log(content_obj)
	let keys = Object.keys(content_obj.data)
	let values = Object.values(content_obj.data)
	console.log(keys)
	console.log(values)
	keys.forEach( (key,idx) => {
	console.log(idx)
	eval(`let ${key} = "${values[idx]}"`)
	})
	*/
	return eval(p1)
}

const interpolate = {
	in: [
		{ pattern: "{{ ?(.*?) ?}}", flags: "mg" }
	],
  out: interpolateFunc
}

module.exports = [ interpolate ]
