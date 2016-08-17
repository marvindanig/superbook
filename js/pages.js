+!~-((w, d, undefined) => {

  let pages = []; /* array of page objects */

  let book = d.getElementById('book').children;

  pages.push(book.length);

  console.log(book);

  module.exports = pages;

})(window, document);