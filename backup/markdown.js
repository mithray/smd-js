function form(form_obj){
	let form_key = Object.keys(form_obj)[0]
	let form_label = Object.values(form_obj)[0]
	let form_path = path.join( paths.forms, form_key + '.pug')
	let template = ""
	console.log(form_obj)
	if ( typeof form_label === 'object'){
		console.log(form_label)
		let form_sub_labels = Object.values(form_label)
		form_sub_labels.forEach( form_sub_label =>{
			template += pug.renderFile( form_path, { label: form_sub_label, label_snake: changeCase.snakeCase(form_sub_label) })
		})
	}
	if ( typeof form_label === 'string'){
		template += pug.renderFile( form_path, { label: form_label, label_snake: changeCase.snakeCase(form_label) })
	}
	return template
}

function markdownFormRender(tokens, idx) {

  console.log('rendering')

  var form_encoding = 'multipart/form-data'
  var form_endpoint = '/'
  var form_method = 'post'
  var string_start = `<form action="${form_endpoint}" method="${form_method}" enctype="${form_encoding}">`
  var string_end = "</form>"
  var string_middle = ""
  var string_full = ""

  if (tokens[idx].nesting === 1 ){
    idx_start = idx
      return '<!-- comment out'
    }

  if (tokens[idx].nesting === -1 ){
    idx_end = idx
    var relevant_tokens = tokens.slice( idx_start, idx_end )
    relevant_tokens.forEach( token => { 
      container_string += token.content
    })

    form_info = yaml.safeLoad(container_string)
    form_fieldsets = Object.keys(form_info)

    form_fieldsets.forEach( fieldset => {
      string_middle += "<fieldset>"
      let legend = fieldset.replace(/^undefined/,'')
      string_middle += `<legend>${legend}</legend>`

      let input_keys  = Object.keys( form_info[fieldset] )
      let input_values  = Object.values( form_info[fieldset] )
      let input_objs  = []
      for ( let i = 0; i < input_keys.length; i++ ) {
    		let input_obj = {}
		    input_obj[input_keys[i]] = input_values[i]
    		input_objs.push( input_obj )
		  }

    	input_objs.forEach( input => {
	    let rendered_input = form(input)
	    string_middle += rendered_input
    })
    string_middle += "</fieldset>"
   })
   string_full = `-->\n${string_start}${string_middle}${string_end}`
   return string_full
 }

 return ''
}

