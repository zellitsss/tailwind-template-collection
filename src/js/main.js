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

let featuredSlider = tns({
    container: '.featured-slider',
    items: 1,
    slideBy: 'page',
    autoHeight: true,
    controlsContainer: '.featured-slider-controls',
    responsive: {
        768: {
            items: 2,
            gutter: 20
        },
        1024: {
            items: 4,
            gutter: 20
        },
        1280: {
            items: 6,
            gutter: 20
        }
    }
});