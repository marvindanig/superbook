import './css/style.css';

import 'babel-polyfill';

import graph from './modules/graph.js';

import viewer from './modules/mode.js';


!+-~((w, d, undefined) => {

    let node = d.getElementById('book');

    let book = {};

    book.mode = viewer.getMatch('all and (min-width: 870px)') ? 'double' : 'single';

    viewer.onChange('all and (min-width: 870px)', function(match) {
        book.mode = match ? 'double' : 'single';
    });

    book.length = node.children.length;

    console.log('book.length =' + book.length);

    // Scoop up pages here.
    book.pages = [...node.children].map(function(obj) {
        return wrapPage(obj);
    });


    function wrapPage(pageObj) {
        // Wrap appropriately


        return pageObj;
    }


    removeChildren(node);

    function removeChildren(node) {
        while (node.hasChildNodes())
            node.removeChild(node.lastChild);
    }


    // Print to dom.
    book.range = [1, 6];


    function printRange(range) {
        for (let i = range[0]; i <= range[1]; i++) {
            let elem = book.pages[i - 1];
            elem.id = i;
            node.appendChild(elem);
        }
    }

    printRange(book.range);

    d.getElementById('plotter').addEventListener('mouseenter', (event) => {


        d.getElementById('next').addEventListener('click', () => {
            turnPage('next');
        });

        d.getElementById('previous').addEventListener('click', () => {
            turnPage('previous');
        });

    });

    function turnPage(direction) {

        switch (direction) {
            case 'next':

                removePage(book.range[0]);
                addPage(book.range[1] + 1);
                book.range[0]++;
                book.range[1]++;
                break;

            case 'previous':

                removePage(book.range[1]);
                addPage(book.range[0] - 1);
                book.range[0]--;
                book.range[1]--;

                break;

        }

        // updateView
    }


    function removePage(pageNumber) {
        console.log('Remove ' + pageNumber);
        node.removeChild(d.getElementById(pageNumber));
    }

    function addPage(pageNumber) {
        console.log('Add ' + pageNumber);
        let elem = book.pages[pageNumber - 1];
        elem.id = pageNumber;
        node.appendChild(elem);
    }

    // console.table(book);


})(window, document);
