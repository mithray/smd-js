# Semantic *Markdown*

This is a new implementation that puts a whole lot more tools before you to use in your markdown documents with a special aim to use appropriate semantic and accessibilty functionality. It is also easy to extend with your own components. The program just runs a large set of regex on a markdown document to transform it into HTML5, with some additional boilerplate wrapping and styling options to make it really easy to have an immediately readable document. The regex are in groups categorized roughly according to how HTML Tag elements are categorized. It is easy to etxend by adding your own regex. It is currently quite slow.

[Heading Content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Heading_content)
[Sectioning Content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Sectioning_content)
[Embedded Content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Embedded_content)
[Interactive Content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Interactive_content)
[Metadata Content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Metadata_content)
[Phrasing Content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content)
[Flow Content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)

## Table of Contents

* SmartyPants
	* Typography
	* HTML Codes
* Block Elements
	* Reference Resolution
	* Atx Style Header
	* Setext Style Header
	* Codeblock
	* Component Block
	* Blockquote
	* Horizontal Rule
	* Unordered List
	* Ordered List
	* Paragraph
* Inline Elements
	* Common
		* Strong
		* Em
		* Sub
		* Sup
	* Links
	* Emojis
	* Critic

## Math

SMD uses Mathjax to render equations. There are two separate syntaxes available, one for evaluating functions within a certain scope 

```smd
{{ f = 'sqrt(x/x+1)' }}
[$ f[x] = sqrt(x/x+1) $]
[$ f[1] = ($ f, {x:1} $) $]
```

{{ f = 'sqrt(x/x+1)' }}
[$ f[x] = sqrt(x/x+1) $]
[$ f[1] = ($ f, {x:1} $) $]

## SmartyPants - Symbol replacement

There are two main groups of symbol replacements, one that is necessary for an HTML document, and one that is helpful for typographical layout

### SmartyPants - Typography

* Elipsis: Triple dots gets changed to elipsis ...
* Left and Right Quotation marks: get changed to left and right quotation marks. "Hello"
* Apostrophes
* en-dash --
* em-dash ---

### SmartyPants - HTML

* Left and Right Angle Brackets: < >
* Ampersand & 

## Phrasing Elements

### Common

* strong
* em
* sup
* sub

### Critic Elements


## Emojis

* You can enter short-codes such as `:coffee:` in markdown and it will be replaced :coffee:.


## Flow Elements

* Most elements are flow elements, only elements are included here that don't belong to a more specific type.

``` javascript
const some_var = something;
var something = something else;
console.log( "escaped emoji shortcode: :coffee:")
let something = new_val
```

- ins {++ins++}
- del {--del--}
- mark {==mark==}
- comment {>>comment<<}

# Semantic Markdown

Semantic Markdown features a linguistic heirarchy with customization ability that intends to be able to confirm to any markdown spec by modifying a set of parameters. Commonmark also defines a kind of heirarchy, where blocks can be parents of blocks and inlines, and inlines can be parents of other inlines. SMD makes the same distinction as is done in many programming languages, parent and child, rather than block and inline. However, it is also the case that inlines cannot be parents of blocks, such as an (such as an em tag enclosing a paragraph). But these rules are specified *per scope*. In the scope of an inline element, the parsing of blocks is not defined. The parsing algorithm works top down, breadth first, defining blocks, which each have their own rulesets. You can define a block to be conforming to different markdown specs, charts, maths, abcjs, code-highlighting(where most inline styling and typographic replacements are not defined). By default, the root block is a special flavor of markdown, Semantic Markdown, but this can be changed by declaring the syntax in front matter. Each syntax has its own heirarchical interpretation, even if heirarchies of this kind were not the way those flavors originally interpreted themselves. This allows dialects to coexist together.


As readability is the primary goal, by default, you can use Semantic Markdown without any front matter, and most basic syntax follows commonmark. 

---
flavor: commonmark
---


## CHART
---
data: fetch('https://api.github.com/repos/ipfs/go-ipfs/stats/commit_activity')
---

@ chart
---
title: IPFS Commits
xlabel: Past 365 Days
ylabel: Commits
type: Line
---

let weeks = data
let daynames = [ 'su', 'mo', 'tu', 'we', 'th', 'fr', 'sa' ]
let daynumbers = Object.keys(daynames)

weeks.forEach( week => {
	let daynumber = 0
	week.days.forEach( day => {
		plot( daynames[daynumber], day)
		daynumber = daynumber + 1
	})
	plot( week.week, week.total )
})

@
