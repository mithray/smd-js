:::BlogPosting
## New Linux Phone out now!
This is some info about the phone which is the article body
:::

->

<div property="liveBlogUpdate" typeof="BlogPosting">
	<h2 property="headline">New Linux Phone out now!</h2>
  <p><span property="datePublished" content="2015-03-09T13:08:00-07:00">March 9, 2015 1:08PM</span></p>
  <p property="articleBody">It's $14.99 a month.<br> And for a limited time, …</p>
</div>

### SuperMark

Default API is dbpedia, other options could be openlibrary or archive.org

---

AOTS: getSchema("Anatomy of the State")
HAYEK: getSchema("Friedrich Hayek")
MISES: getSchema("https://en.m.wikipedia.org/Ludwig_von_Mises")
HA: getSchema("https://www.amazon.com/Human-Action-Ludwig-von-Mises/dp/1610161459")
DATE1: 
  type: "schema.org/Date"
  content: "23/2/1986" 
BOOK7:
  type: "schema.org/Book"
  name: "somename"
  datePublished: "xx xx xx"

---

## 

[[AOTS.author]]'s book [[AOTS.name]] makes an argument referencing [[Calhoun.name]]. Along with [[HAYEK.name]], [[MISES.name]]. There is also a book with the name [[Book7.name]]


[@Date1@]
[@Person: xx@]


When entering a blog or comment online, the SyntaxNet parser will check sentences for proper nouns which could be used in linked data. If a proper noun is found it will search amazon/dbpedia/other apis for the resource in question and prompt the user if it really is the item they intend. If they confirm that the search is correct, a semantic link will be made and even include an emoji representation if its confirmed in the user preferences. 

Eg.

User types 

"Would you like to buy the Dell Inspiron?"

Upon closing the sentence, 
1. SyntaxNet picks up Dell Inspiron as a proper noun
2. Searches amazon and dbpedia for Dell Inspiron
3. Finds a resource at amazon.
4. Prompts user if the resource is correct
5. User confirms


Markdown is entered corresponding to the followig HTML output

<p>Would you like to buy the <span itemscope itemtype="http://schema.org/Product"><link itemprop="additionalType" href="http://www.productontology.org/id/Laptop" /><span itemprop="name"><a href="https://www.amazon.com/Dell-Inspiron-Touchscreen-Flagship-Bluetooth/dp/B07QGZKZDN/">Dell 3000</a></span>:computer::laptop:💻</span><p>

Comes with 

It will also get a slight background with round borders

:coffee:
:computer:
