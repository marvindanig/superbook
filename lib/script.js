import '../css/style.css';

import 'babel-polyfill';


import book from '../lib/book.js';


console.log(Book.settings);

Book.addPage(4);

Book.removePage(3);

function $(selector) {

  let self = {};

  self.selector = selector;

  self.element = document.getElementById(self.selector);

  self.html = function(){
    return self.element;
  };

  return self;
}

console.log($('book'));