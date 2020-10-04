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

[mathjs]: <https://mathjs.org> "mathjs"
[mathjax]: <https://mathjax.org> "mathjax"
[abcjs]: <https://abcjs.net> "abcjs"
[original markdown]: <https://daringfireball.net/projects/markdown/syntax> "the original markdown"
[vfmd]: <https://www.vfmd.org/> "Vanilla Flavored Markdown"
[TOOWTDI]: <https://wiki.python.org/moin/TOOWTDI>
[Grammarly]: <https://www.grammarly.com> "grammarly.com"
[Readable]: <https://readable.com> "readable.com"
[gfm]: <https://github.github.com/gfm/> "Github Flavored Markdown"
