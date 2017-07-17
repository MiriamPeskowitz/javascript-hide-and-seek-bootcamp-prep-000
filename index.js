
function getFirstSelector(selector) {
 var match = document.querySelector(selector)
 return match
 }

function nestedTarget() {
 var nt = document.querySelector('#nested','.target')
 return nt
}

function increaseRankBy(n) {

 const rankedLists = document.querySelectorAll('.ranked-list')
 for (var i = 0; i < rankedLists.length; i++) {
    var children = rankedLists[i].children
  
    for (var j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  var dc = document.getElementById('grand-node')
  var next = dc.children[0]

  while (next) {
    dc = next
    next = dc.children[0]
  }
  return dc
}
