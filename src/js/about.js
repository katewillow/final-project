import '../styles/about.css';
import 'swiper/swiper-bundle.css';

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const mySwiper = new Swiper('.github__carousel-wrapper', {
    pagination: {
        el: '.github__dots-container',
        bulletClass: 'github__dots',
        bulletActiveClass: 'github__dots_active',
        bulletElement: 'button',
        clickable: true,
        modifierClass: 'github__dots-container_',
        clickableClass: 'github__dots-container_clickable',
    },

    slidesPerView: 1,
    spaceBetween: 8,
    touchEventsTarget: 'wrapper',
    wrapperClass: 'github__carousel',
    slideClass: 'github-item',

    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1280: {
            spaceBetween: 16,
            slidesPerView: 3
        }
    },

    navigation: {
        nextEl: '.github__button_arrow-right',
        prevEl: '.github__button_arrow-left',
    },
})