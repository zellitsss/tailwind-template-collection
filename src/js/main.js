/**
 * Fontawesome
 */
import '@fortawesome/fontawesome-free/css/all.css';
// import '@fortawesome/fontawesome-free/js/all.js';

/**
 * main stylesheet with tailwind
 */
import '../css/style.css';

import {tns} from 'tiny-slider/src/tiny-slider';

window.tns = tns;

var toggleNavbar = function() {
    let navbarToggle = document.querySelector('#navbar-toggle');
    navbarToggle.addEventListener("click", function() {
        let navbarWrap = document.querySelector('#navbar-wrapper');
        if (navbarWrap.classList.contains('-translate-x-64')) {
            navbarWrap.classList.remove('-translate-x-64');
            navbarWrap.classList.add('translate-x-0');
        } else {
            navbarWrap.classList.remove('translate-x-0');
            navbarWrap.classList.add('-translate-x-64');
        }
    });
}

if (document.readyState !== 'loading')
{
    toggleNavbar();
} else {
    document.addEventListener('DOMContentLoaded', toggleNavbar);
}

var a = function() {
    console.log("asdasd");
}