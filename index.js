+!~-(function(w, d, undefined) {

  

  let book = {};

  book.bounds = document.getElementById("book").getBoundingClientRect();

  console.log(book.bounds);

})(this, document);



// Asynchronous recursion
// (function loopsie(w, d) {
//     doStuff(d);
//     setTimeout(loopsie, 100);
// })(this, document);

// function doStuff(d) {    
//     console.log('hello world');
// }
  