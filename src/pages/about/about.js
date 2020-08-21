"use strict";
import './about.css';
import 'swiper/swiper-bundle.css';
import {CommitCard} from "../../blocks/commit-card/CommitCard";
import {CommitCardList} from "../../blocks/commit-card-list/CommitCardList";
import {GithubApi} from "../../js/modules/GithubApi";
import Swiper, { Navigation, Pagination } from 'swiper';
import {GITHUB_PAGE_SIZE} from "../../js/constants/constants";

(async function () {
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
        wrapperClass: 'commit-card-list',
        slideClass: 'commit-card',

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
    });

    const commits = document.querySelector('.commit-card-list');
    const commitCardTemplate = document.querySelector('.commit-card-template').content;
    const commitList = new CommitCardList(commits);

    const serverUrl = process.env.NODE_ENV === 'development' ? 'http://api.github.com/repos' : 'https://api.github.com/repos';
        const api = new GithubApi({
            baseUrl: serverUrl,
        });

    try {
        const serverCommits = await api.getCommits();
        commitList.render(serverCommits.slice(0,GITHUB_PAGE_SIZE).map(card => new CommitCard(card, commitCardTemplate)));
        mySwiper.update();
    } catch (error) {
        console.error("Не удалось загрузить данные: ", error);
    }

})();



