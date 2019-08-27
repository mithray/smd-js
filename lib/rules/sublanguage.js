# Functions

inline:
  match: "/@(.*?)\((.*)\)@/"
  result: "{{ $1($2) }}"    # In other words, it calls function $1 with parameter $2
block:
  match: "/@\s+(.*?)\((.*)\)@/m"
  result: "{{ $1($2) }}"
  
  # s flag can match new lines ?
# Environment made available to code execution
context:
  libraries:
    - "math.js"
    - "change-case"
  variables:
    - "site"
    - "pages"
    - "data"
  blocks:
    - "toc"
    - "table"
    - "form"
  
  
