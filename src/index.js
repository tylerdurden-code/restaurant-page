import {initializeHomepage} from './homepage.js'
import { collection } from './collection.js';
import { containerHomepage } from './homepage.js';
import { contact } from './contact.js';

// function home() {
//     console.log('wine wine')
// }

// const homeBtn = document.querySelector('#home')
// homeBtn.addEventListener('click',() => {
//     home();
// })
const content = document.querySelector('#content')
initializeHomepage(content);
const contento = document.querySelector('.contento')
const homeBtn = document.querySelector('#home')
const collectionBtn = document.querySelector('#collection')
const container = document.querySelector('.container')
const contactBtn = document.querySelector('#contact')
const w = document.querySelector('.w')

homeBtn.addEventListener('click',() => {
    var child = container.lastElementChild; 
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
    
    containerHomepage(container);

    
})
w.addEventListener('click',() => {
    var child = container.lastElementChild; 
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }

    containerHomepage(container);
})


collectionBtn.addEventListener('click',() => {
    collection(container);
})

contactBtn.addEventListener('click',() => {
    contact(container)
})




