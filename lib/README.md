Designed to make extensions to markdown really easy, you can configure the attributes of the language declaratively. 

By default, it takes the best from the following, and works them together:

* [Markdown](https://daringfireball.net/projects/markdown/syntax)
* [MultiMarkdown](https://rawgit.com/fletcher/MultiMarkdown-6-Syntax-Guide/master/index.html)
* [MathJax](https://www.mathjax.org/)
* [Textile](https://textile-lang.com)
* [hrs](https://css-tricks.com/examples/hrs/) delete this soon ? 
* [Emojis](https://www.npmjs.com/package/node-emoji)
* [Domain Specific Languages](https://en.wikipedia.org/wiki/Domain-specific_language)
* [Commonmark](https://github.com/commonmark/commonmark-spec)

For now, I have chosen to replace `<i>` and `<b>` completely by `<em>` and `<strong>`? Like commonmark, The `<em>` tag can be made by using `_` or `*`, and the `strong` tag can be made by using either `__` or `**`.
[em](http://jkorpela.fi/html/em.html)

headings: id = changecase.paramCase(middle) # unless custom
  custom_id: '# Content [id="new id"]'
  numbering: '#(1) Content'
  numbering: '#(IA1ai) Content' # can have any six characters of set { a, A, i, I, 1 } representing headings and subheadings in Latin Letters(lower and upper case), Roman Numerals(lower and upper case), and numbers

languages:
- commonmark
- setext
- asciidoc
- makedoc
- creole
- abcjs
- txt2tags
- setext
- rst
- texinfo
- orgmode
- mathjax

interpreter:
  delimiter:
    open: "^@"
    language: "^@ (.*)$"
    close: "^@"


## Example 1 - Inline Sub Language

This is some text, this is an equation. This syntax is a little more complicated in order to include the generality of having extensions, using other sub languages inline.
`@mathjax({x}_{1,2}={2a})@`

## Example 2 - Inline Sub Language

```
This person's name is @schema(Person, Richard Stallman ,richardstallman.org)@
```

## Example 3 - Block Sub Language 
Not sure whether this syntax or example 3 is better ? Example 2 is consistent with example 1, but it's very heavy.
```
@ abcjs 
{
  \clef bass
  c4 d e f
  g4 a b c
  d4 e f g
}
@ 
```

## Example 4 - Block Sub Language

```
@ mathjax
{x}_{1,2}=\frac{-b\pm \sqrt{{b}^{2}-4ac}}{2a}
@
```


## How is a sublanguage different from a function ? 

It isn't


## Configuration

Edit the file `lib/config.yml`
```
order:
  block:
    - "form"
    - "toc"
    - "tables"
  inline:
    - "em"
    - "strong"
    - "mark"
    - "cite"
    - "i"
    - "b"
    - "dfn"
    - "quotations"
    - "apostrophes"
    - "deleted"
    - "inserted"
    - "superscript"
    - "subscript"
    - "code"
  conversions:
    - "ampersand"
    - "angle_brackets"
    - "en_dash"
    - "em_dash"
    - "dimension"
    - "elipsis"
  symbols:
    - "trademark"
    - "registered"
    - "copyright"
    - "one_quarter"
    - "one_half"
    - "three_quarters"
    - "degree"
    - "plus_minus"
```

list:
  ordered:
    start: "a. |A. |i. |I. |1. "  # numbering: '#(IA1ai) Content' # can have any six characters of set { a, A, i, I, 1 }
  unordered:
    start: "* |- "

#horizontal_rules:  # Cool idea, but there should probably only be one kind, as there are no corresponding HTML elements for different kinds
dotted: "/^---(.*)---/"
solid: "/^___(.*)___/"
gradient: "/^--=(.*)=--/"

block:
  p:
    in: ["^([a-zA-Z0-9])(.*)$"]
    out: '<p>$1$2</p>'
  hr:
    in:
      open: "---"
      middle: "(.*?)"
      close: "---"
    out:
      open: "<hr>"
      middle: "$1"
      close: "</hr>"
  code:
    in:
      open: "`"
      middle: "(.*?)"
      close: "`"
    out:
      open: "<code>"
      middle: "$1"
      close: "</code>"
