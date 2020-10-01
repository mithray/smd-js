function highlight(content, language){
    try {
      loadLanguages([language])
      content = Prism.highlight(content, Prism['languages'][language], language)
      return {content: content, language: language}
    } catch (e){
      return {content: content, language: undefined}
    }
}
