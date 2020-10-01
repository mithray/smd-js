# Semantic Markdown (SMD)

## Introduction

DON'T USE THIS YET! I RECOMMEND WAITING FOR VERSION 1.0.0

Semantic Markdown is a bit like a custom markdown development environment as well as contains a default implementation in javascript. The default implementation of SMD attempts to make easy marking up web pages with good HTML5 and schema, and contains tools for adding styling, so you can run it on a markdown document and immediately sent to a friend or upload it.

## Contents

* [Introduction](#introduction)
* [Contents](#contents)
* [Purpose](#purpose)
* [Design](#design)
* [Roadmap](#roadmap)
* [Release Notes](#release-notes)

## Purpose

The purpose of this project is to:

* Help create custom markdown flavors.
* Translate markdown flavors into each other.
* Make markdown settings an authoring choice, not a developer choice.
* Create a powerful, intuitive default implementation with many "bells and whistles".
* Provide Authoring language suggestions similarly to [Grammarly][] and [Readable][], but integrated into the development pipeline.
* Make Semantic HTML and Schema markup easy and fun to create.
* Making authoring fun.

## Design 

1. Hackable.
2. Human Readable.
3. Expressive. Low language redundancy. This is similar to Pythons principle of [There's Only One Way To Do It][TOOWTDI]
4. Input and Output Document should look as close as is possible. For example, a plain text file written in SMD should resemble how a browser renders the output HTML.
5. Sticks as close as possible to the original markdown.

The principles here are given in order of preference. The construction of the default syntax is decided as deductively as possible around these principles. Due to the first principle being "hackable", you can essentially re-order the guiding principles according to your own preference. Eventually, a full specification of a markdown ruleset should be able to translate into any other ruleset. :smile: :grinning:

## Roadmap

- [ ] Base Rules
  - [ ] headings
    - [x] h1-h6: left side atx headings
    - [ ] h1-h6: two side atx headings
    - [ ] h1-h6: setext style headings
  - [x] ul
  - [x] li
  - [ ] ol
  - [x] phrasing
    - [x] em
    - [x] strong
    - [x] sub
    - [x] sup
  - [ ] Code
    - [x] inline code
    - [x] block code
    - [ ] testing
- [ ] Meta
  - [ ] Wrapping with HTML boilerplate
  - [ ] Including css styles
- [x] Critic
  - [x] insert
  - [x] delete
  - [x] mark
  - [x] comment
- [ ] Links
  - [ ] Inline links
  - [ ] Reference links
  - [ ] Schema ontology links
- [ ] Interpreters
  - [ ] Mathjs
    - [x] Math expression toTex
    - [x] Evaluate inline Math
    - [ ] testing
  - [ ] inline javascript
  - [ ] chart.js (charts)
  - [ ] mermaid.js (uml digrams)
  - [ ] abcjs (music)
  - [ ] open street map with leaflet
- [ ] Language and Syntax Tools
  - [ ] Browser Inline Dictionary lookup
  - [ ] readeasy suggestions on compilation
- [ ] Front Matter
- [ ] Editing of rules using YAML files
- [ ] Writing yaml rulesets for various markdown flavors
- [ ] Include Components
  - [ ] Forms
  - [ ] Video
  - [ ] Audio

These are various flavors of markdown, some or all for which I hope to write rulesets using `smd` interpretable yaml specifications.

- [ ] Initial Custom Rulesets
  - [ ] smd-naked: [gfm][], [vfmd][] or something simple.
  - [ ] smd-extended: Consistend with a simple form of markdown, but with extensions.
  - [ ] smd-elite: Full featured but with redesigned syntax. Efficient, but against convention.

- [ ] Existing Markdown Standards
  - [ ] [CommonMark](http://spec.commonmark.org/)
  - [ ] [CriticMarkup](http://criticmarkup.com/spec.php)
  - [ ] [Discount](http://www.pell.portland.or.us/~orc/Code/discount/#Language.extensions)
  - [ ] [DocFX](https://dotnet.github.io/docfx/index.html)
  - [ ] [Ghost's Markdown/Haunted Markdown](https://github.com/TryGhost/Ghost/wiki/Future-of-Markdown#features)
  - [ ] [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)
  - [ ] [Gitlab](https://gitlab.com/help/user/markdown.md)
  - [ ] [Haroopad Flavored Markdown](http://pad.haroopress.com/page.html?f=haroopad-flavored-markdown)
  - [ ] [iA Writer's Markdown](https://ia.net/writer/support/general/markdown-guide)
  - [ ] [Kramdown](http://kramdown.gettalong.org/quickref.html)
  - [ ] [Leanpub Flavored Markdown](https://leanpub.com/help/manual#leanpub-auto-markdown-extensions-in-leanpub)
  - [ ] [Litedown](http://s9etextformatter.readthedocs.org/Plugins/Litedown/Synopsis/)
  - [ ] [Lunamark](http://jgm.github.io/lunamark/lunamark.1.html)
  - [ ] [Madoko](http://research.microsoft.com/en-us/um/people/daan/madoko/doc/reference.html)
  - [ ] [Markdown](http://daringfireball.net/projects/markdown/syntax)
  - [ ] [Markdown 2](https://markdown2.github.io/docs/home.html)
  - [ ] [Markdown Extra](https://michelf.ca/projects/php-markdown/extra/)
  - [ ] [Markdown-it](https://github.com/markdown-it/markdown-it#syntax-extensions)
  - [ ] [Markua](https://leanpub.com/markua/read)
  - [ ] [Maruku](http://maruku.rubyforge.org/maruku.html)
  - [ ] [MultiMarkdown](http://fletcher.github.io/MultiMarkdown-4/)
  - [ ] [Pandoc's Markdown](http://pandoc.org/README.html#pandocs-markdown)
  - [ ] [PHP Markdown Extra Extended](https://github.com/egil/php-markdown-extra-extended)
  - [ ] [Python Markdown](http://pythonhosted.org/Markdown/extensions/)
  - [ ] [Redcarpet](https://github.com/vmg/redcarpet)
  - [ ] [Remarkable](https://github.com/jonschlinkert/remarkable#syntax-extensions)
  - [ ] [Rhythmus](http://rhythmus.be/building-a-magazine/#extending-markdown)
  - [ ] [Scholarly Markdown](http://scholarlymarkdown.com/Scholarly-Markdown-Guide.html)
  - [ ] [Showdown](https://github.com/showdownjs/showdown/wiki/Known-Differences-in-Output)
  - [ ] [StackOverflow's Markdown](http://stackoverflow.com/editing-help)
  - [ ] [Taiga Markdown](https://tree.taiga.io/support/misc/taiga-markdown-syntax/)
  - [ ] [Trello's Markdown](http://help.trello.com/article/821-using-markdown-in-trello)
  - [ ] [vfmd](http://www.vfmd.org/vfmd-spec/syntax)
  - [ ] [Xcode/Swift Playgrounds Markup](https://developer.apple.com/library/ios/documentation/Xcode/Reference/xcode_markup_formatting_ref/index.html#//apple_ref/doc/uid/TP40016497)

[mathjs]: <https://mathjs.org> "mathjs"
[mathjax]: <https://mathjax.org> "mathjax"
[abcjs]: <https://abcjs.net> "abcjs"
[original markdown]: <https://daringfireball.net/projects/markdown/syntax> "the original markdown"
[vfmd]: <https://www.vfmd.org/> "Vanilla Flavored Markdown"
[TOOWTDI]: <https://wiki.python.org/moin/TOOWTDI>
[Grammarly]: <https://www.grammarly.com> "grammarly.com"
[Readable]: <https://readable.com> "readable.com"
[gfm]: <https://github.github.com/gfm/> "Github Flavored Markdown"

## Release Notes

### Release 0.1.15

* Tidy README.md

### Release 0.1.14

add to readme specs

### Release 0.1.13

added keywords to package.json

### Release 0.1.12

tidy readme

### Release 0.1.8

* basic functionality
* headers
* unordered list

Phrasing Markup
* em
* strong
* sub
* sup

Critic Markup
* ins
* del
* mark
* comment

Math
* mathjax
