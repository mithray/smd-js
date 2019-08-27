cite:
  in:
    open: ["??"]
    middle: "(.*?)"
    close: ["??"]
  out:
    open: "<cite>"
    middle: "$1"
    close: "</cite>"
dfn:
  in:
    open: ["-?"]
    middle: "(.*?)"
    close: ["?-"]
  out:
    open: "<dfn>"
    middle: "$1"
    close: "</dfn>"
a:
  in:
    open: ["[(.*?)]\((.*)\)"]
  out:
    open: "<a href='$2'>"
    middle: "$1"
    close: "</a>"
