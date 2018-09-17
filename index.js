function getFirstSelector(selector) { // Accept a selector
  // Return the first element that matches.
  return document.querySelector(selector);
}
// Pull a .target out of #nested
function nestedTarget() {
  // Should test pass without "#nested"?
  return document.querySelector('#nested .target');
}
// Increase the ranks in all of the .ranked-lists by n.
function increaseRankBy(n) {
  const ranked = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < ranked.length; i = i + 1) {
    // Test fails with .innerText
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n;
  }
}
// Pull out the most deeply nested child from div#grand-node.
function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}
