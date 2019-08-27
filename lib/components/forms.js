const yaml = require('js-yaml')
const pug = require('pug')

function form(match, p1){
  let form_data = yaml.safeLoad(p1)

  var form_encoding = 'multipart/form-data'
  var form_endpoint = '/'
  var form_method = 'post'
  var string_start = `<form action="${form_endpoint}" method="${form_method}" enctype="${form_encoding}">`
  var string_end = "</form>"
  var string_middle = ""
  var string_full = ""

  let fieldset_keys = Object.keys(form_data)
  fieldset_keys.forEach( fieldset_key => {
    string_middle += "<fieldset>"
    let legend = fieldset_key.replace(/^undefined/,'')
    string_middle += `<legend>${legend}</legend>`

    let input_keys = Object.keys(form_data[fieldset_key])
    let input_values = Object.values(form_data[fieldset_key])

    let inputs = []
    input_keys.forEach( (key,i) => {
      let input_obj = {}
      input_obj[key] = input_values[i]
      inputs.push(input_obj)
    })

    input_keys.forEach( ( input_key, i) => {
      let input_path = path.join( paths.forms, input_key + '.pug')
      let input_label = input_keys[i]
      if ( typeof input_label === 'object'){
	        let input_sub_labels = Object.values(input_label)
	        input_sub_labels.forEach( input_sub_label =>{
		          string_middle += pug.renderFile( input_path, { label: input_sub_label, label_snake: changeCase.snakeCase(input_sub_label) })
		        })
	      }
      if ( typeof input_label === 'string'){
	        string_middle += pug.renderFile( input_path, { label: input_label, label_snake: changeCase.snakeCase(input_label) })
	      }
    })

    string_middle += "</fieldset>"
  })
  string_full = `${string_start}${string_middle}${string_end}`
  return string_full
}

module.exports = form
