# Semantic Markdown (SMD)

## What is Semantic Markdown ? 

Semantic Markdown is a bit like a custom markdown development environment as well as contains a default implementation in javascript. The default implementation of SMD attempts to make easy marking up web pages with good HTML5 and schema, and contains tools for adding styling, so you can run it on a markdown document and immediately sent to a friend or upload it.

## Installation

```bash 
[Installing with Yarn]
yarn add --save @mithray/smd
```

```bash 
[Installing with NPM]
npm install --save @mithray/smd
```

## Usage

By default SMD can be used mostly the same way as the [original markdown][](and specifically the [vfmd][] implementation), but with extensions. Only a few things are *inconsistent* with original markdown. 

### Javascript

```javascript
const smd = require('@mithray/smd')
let md = '# some markdown'
let options = {
	wrap: true,
	style: true
}
let doc = smd( md, options )
```

### Command Line

Basic use converting a file. This will output README.html

```bash
smd README.md
```

The `style` flag includes some styles, such as syntax highlighting for code blocks. The wrap flag wraps the output document in a boilerplate HTML document. Both of these options will be configurable *later*.
```bash
smd --style --wrap README.md
```

This is the syntax for defining the input and output document explicitly.
```bash
smd -i README.md -o readme.html
```

### Writing SMD

```markdown
## Headings

Headings and paragraphs are the same as original markdown
```

You can use *italics* and **emphasis**, which under the hood are translated to `em` and `strong` tags respectively.
```markdown
You can use *italics* and **emphasis**, which under the hood are translated to `em` and `strong` tags respectively.
```

Lists are slightly more expressive

```markdown
* Starts an unordered list with bullets of type "disc"
- Starts an unordered list with bullets of type "circle"
+ Starts an unordered list with bullets of type "square"

1. Starts an ordered list using arabic(regular) ordinals.
a. Starts an ordered list using lower case latin alphabet
A. Starts an ordered list using upper case latin alphabet
i. Starts an ordered list using lower case roman numerals
I. Starts an ordered list using upper case roman numerals

Additionaly, you can start a list at any number:
```markdown
3. Starts an ordered list at 3.
f. Starts an ordered list at f.
E. Starts an ordered list at E.
ii. Starts an ordered list at ii
IV. Starts an ordered list at IV.
```
There is a potential difficulty here, in that `i. ` could begin a list using roman numerals or the latin alphabet. SMD solves this by checking the list to see if any letters other than roman numerals are used. If only roman numerals are used, it will be parsed with roman numerals. Also, like most other markdown implementations, the consistency of the numbering does not matter, a list could start with `2. ` and then `7. ` and the output will be the same, this is because of the way lists are handled in HTML. For example, the following

```markdown
ii. first item
f. second item
```

The parser detects that f is in the list, so assumes that the user meant a latin alphabet, with a start at "ii" whcih is the 241st item in a list(it's there if you need it right ? :grinning: ). It then produces the output
```html
<ol type="a" start="241">
	<li>first item</li>
	<li>second item</li>
</ol>
```

But the following
```markdown
iii. first item
lv. second item
```

produces the output
```html
<ol type="i" start="3">
	<li>first item</li>
	<li>second item</li>
</ol>
```

These rules will probably only result in some confusion when you use roman numerals and have only a single item in the list, but this parser can be changed.

## Goal

The purpose of this project is to 
* Help create custom markdown implementations.
* Unify markdown implementations by providing a set of rules to transform them into each other, making markdown implementation an authoring choice, not a developer choice.
* Provide an implementation similar to the original markdown but with many "bells and whistles", making authoring fun. 

## Design Principles

1. Hackable.
2. Human Readable.
3. Expressive. Low language redundancy. This is similar to Pythons principle of [There's Only One Way To Do It][TOOWTDI]
4. Input and Output Document should look as close as is possible. For example, a plain text file written in SMD should resemble how a browser renders the output HTML.
5. Sticks as close as possible to the original markdown.

The principles here are given in order of preference. The construction of the default syntax is decided as deductively as possible around these principles. Due to the first principle being "hackable", you can essentially re-order the guiding principles according to your own preference. Eventually, a full specification of a markdown ruleset should be able to translate into any other ruleset. :smile: :grinning:

## Conflicting Differences In Default Implementation

* The following have been slightly modified to make them more expressive, and with less redundancy.
	* unordered lists
	* ordered lists
	* horizontal rules
* HTML blocks can be included, but they must be on their own lines, or they will be escaped. Text between HTML tags that are not preceded in the line with an HTML tag, will be parsed as markdown. For example, the following
```markdown
<div>*This text is not processed as markdown, asterisks will be included in the HTML output*</div>
<div>
*This text is processed as markdown*
** 
</div>
```
The corollary is that you can't have HTML tags in the middle of a line, except for whitespace, which is trimmed. The following are therefore identical
```markdown
	<div>This
</div>
<div>And This
</div>
<div>And This</div>
```


## Extensions

* Includes schema in your markup
* Encourages appropriate semantic HTML5
* Including block components
* Easy to markup math with [mathjs][] and [mathjax][]
* Easy to markup musical scores with [abcjs][]
* Hackable: includes editable yaml files that describe the rules.

## Writing Your Own Rules

To be completed :grinning:.

## Roadmap

- [/] Base Rules
	- [x] h1-h6
	- [ ] ul, ol, li
	- [ ] em, strong, sub, sup
- [/] Partial Rulesets
	- [ ] inline
	- [ ] critic
	- [ ] abcjs
	- [ ] mathjs
- [ ] Add ability for editing markdown rules using YAML files
- [ ] Include Components
	- [ ] Forms
	- [ ] Video
	- [ ] Audio
- [ ] Complete Rulesets
	- [ ]  [CommonMark](http://spec.commonmark.org/" rel="nofollow)
	- [ ]  [CriticMarkup](http://criticmarkup.com/spec.php" rel="nofollow)
	- [ ]  [Discount](http://www.pell.portland.or.us/~orc/Code/discount/#Language.extensions" rel="nofollow)
	- [ ]  [DocFX](https://dotnet.github.io/docfx/index.html" rel="nofollow)
	- [ ]  [Ghost's Markdown/Haunted Markdown](https://github.com/TryGhost/Ghost/wiki/Future-of-Markdown#features)
	- [ ]  [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)
	- [ ]  [with login](https://gitlab.com/help/user/markdown.md" rel="nofollow)
	- [ ]  [Haroopad Flavored Markdown](http://pad.haroopress.com/page.html?f=haroopad-flavored-markdown" rel="nofollow)
	- [ ]  [iA Writer's Markdown](https://ia.net/writer/support/general/markdown-guide" rel="nofollow)
	- [ ]  [Kramdown](http://kramdown.gettalong.org/quickref.html" rel="nofollow)
	- [ ]  [Leanpub Flavored Markdown](https://leanpub.com/help/manual#leanpub-auto-markdown-extensions-in-leanpub" rel="nofollow)
	- [ ]  [Litedown](http://s9etextformatter.readthedocs.org/Plugins/Litedown/Synopsis/" rel="nofollow)
	- [ ]  [Lunamark](http://jgm.github.io/lunamark/lunamark.1.html" rel="nofollow)
	- [ ]  [Madoko](http://research.microsoft.com/en-us/um/people/daan/madoko/doc/reference.html" rel="nofollow)
	- [ ]  [Markdown](http://daringfireball.net/projects/markdown/syntax" rel="nofollow)
	- [ ]  [Markdown 2](https://markdown2.github.io/docs/home.html" rel="nofollow)
	- [ ]  [Markdown Extra](https://michelf.ca/projects/php-markdown/extra/" rel="nofollow)
	- [ ]  [Markdown-it](https://github.com/markdown-it/markdown-it#syntax-extensions)
	- [ ]  [Markua](https://leanpub.com/markua/read" rel="nofollow)
	- [ ]  [Maruku](http://maruku.rubyforge.org/maruku.html" rel="nofollow)
	- [ ]  [MultiMarkdown](http://fletcher.github.io/MultiMarkdown-4/" rel="nofollow)
	- [ ]  [Pandoc's Markdown](http://pandoc.org/README.html#pandocs-markdown" rel="nofollow)
	- [ ]  [PHP Markdown Extra Extended](https://github.com/egil/php-markdown-extra-extended)
	- [ ]  [Python Markdown](http://pythonhosted.org/Markdown/extensions/" rel="nofollow)
	- [ ]  [Redcarpet](https://github.com/vmg/redcarpet)
	- [ ]  [Remarkable](https://github.com/jonschlinkert/remarkable#syntax-extensions)
	- [ ]  [Rhythmus](http://rhythmus.be/building-a-magazine/#extending-markdown" rel="nofollow)
	- [ ]  [Scholarly Markdown](http://scholarlymarkdown.com/Scholarly-Markdown-Guide.html" rel="nofollow)
	- [ ]  [Showdown](https://github.com/showdownjs/showdown/wiki/Known-Differences-in-Output)
	- [ ]  [StackOverflow's Markdown](http://stackoverflow.com/editing-help" rel="nofollow)
	- [ ]  [Taiga Markdown](https://tree.taiga.io/support/misc/taiga-markdown-syntax/" rel="nofollow)
	- [ ]  [Trello's Markdown](http://help.trello.com/article/821-using-markdown-in-trello" rel="nofollow)
	- [ ]  [vfmd](http://www.vfmd.org/vfmd-spec/syntax/" rel="nofollow)
	- [ ]  [Xcode/Swift Playgrounds Markup](https://developer.apple.com/library/ios/documentation/Xcode/Reference/xcode_markup_formatting_ref/index.html#//apple_ref/doc/uid/TP40016497" rel="nofollow)

[mathjs]: <https://mathjs.org> "mathjs"
[mathjax]: <https://mathjax.org> "mathjax"
[abcjs]: <https://abcjs.net> "abcjs"
[original markdown]: <https://daringfireball.net/projects/markdown/syntax> "the original markdown"
[vfmd]: <https://www.vfmd.org/> "Vanilla Flavored Markdown"
[TOOWTDI]: <https://wiki.python.org/moin/TOOWTDI>
