"use strict";
import '../styles/index.css';

import {DataStorage} from "./modules/DataStorage";
import {NewsCard} from "./components/NewsCard";
import {NewsCardList} from "./components/NewsCardList";
import {SearchInput} from "./components/SearchInput";
import {NewsApi} from "./modules/NewsApi";
import {Preloader} from "./components/Preloader";
import {NewsList} from "./components/NewsList";
import {Errors} from "./components/Errors";

(async function () {
    const searchForm = document.querySelector('.search-input__form');
    const news = document.querySelector('.news-card-list');
    const newsCardTemplate = document.querySelector('.news-card-template').content;
    const noResult = document.querySelector('.no-result');
    const preloader = new Preloader(document.querySelector('.preloader'));
    const newsSection = new NewsList(document.querySelector('.news-list'));
    const newsList = new NewsCardList(news);
    const storage = new DataStorage();
    const serverErrors = new Errors();

    const validationForm = new SearchInput(searchForm, async (query) => {
        preloader.show();
        validationForm.setSubmitButtonState();

        const serverUrl = process.env.NODE_ENV === 'development' ? 'http://newsapi.org/v2' : 'https://newsapi.org/v2',
            api = new NewsApi({
                baseUrl: serverUrl,
                headers: {
                    'X-Api-Key': 'b02cc2fdc9754d1abddd93f7ad88fac0',
                },
            });

        try {
            const serverNews = await api.getNews(query);
            console.log(serverNews);
            newsList.render(serverNews.articles.map(card => new NewsCard(card, newsCardTemplate)));
            newsSection.show();
            preloader.hide();
        } catch (error) {
            console.error("Не удалось загрузить данные: ", error);
        }

    });

    validationForm.setEventListeners(searchForm);

})();