import './css/style.css';

import 'babel-polyfill';

import isTouch from './lib/isTouch.js';

import pages from './lib/pages.js';

import graph from './lib/graph.js';

import mode from './lib/mode.js';


!+-~((w, d, undefined) => {

    let book = {};

    mode.onChange('all and (min-width: 870px)', function(match) {
        book.mode = match ? 'double' : 'single';
          console.table(this);

    });

    console.log(mode.getMatch('all and (min-width: 870px)'));

})(window, document);