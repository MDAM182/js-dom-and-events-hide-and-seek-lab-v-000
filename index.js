function getFirstSelector(selector) {
  return document.querySelector(selector)
}
//
function nestedTarget() {
  return document.querySelectorAll('div')[0].querySelector('div.target')
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
     lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n
   }
}

function deepestChild() {
  return document.getElementById("grand-node").querySelector("div div div div div")
}
