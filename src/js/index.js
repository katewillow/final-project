"use strict";
import '../styles/index.css';
import {DataStorage} from "./modules/DataStorage";
import {NewsCardList} from "./components/NewsCardList";
import {SearchInput} from "./components/SearchInput";
import {NewsApi} from "./modules/NewsApi";
import {Preloader} from "./components/Preloader";
import {News} from "./components/News";
import {ServerErrors} from "./components/ServerErrors";
import {NewsStorage} from "./modules/NewsStorage";

(async function () {
    const searchForm = document.querySelector('.search-input__form');
    const newsCardTemplate = document.querySelector('.news-card-template').content;
    const serverError = document.querySelector('.server-errors');
    const showMoreButton = document.querySelector('.news__button');

    const preloader = new Preloader(document.querySelector('.preloader'));
    const newsCardList = new NewsCardList(document.querySelector('.news-card-list'));
    const serverErrors = new ServerErrors();
    const dataStorage = new DataStorage();
    const newsStorage = new NewsStorage(dataStorage);
    const newsSection = new News(document.querySelector('.news'), showMoreButton, newsStorage, newsCardList, newsCardTemplate);
    const serverUrl = process.env.NODE_ENV === 'development' ? 'https://nomoreparties.co/news/v2/' : 'https://nomoreparties.co/news/v2/';
        const api = new NewsApi({
            baseUrl: serverUrl,
        });

    const validationForm = new SearchInput(searchForm, async (query) => {
        preloader.show();

        try {
            const serverNews = await api.getNews(query);
            dataStorage.setDataStorage(serverNews.articles, 'news');
            newsSection.render();
            newsSection.show();

            if (serverNews.articles.length === 0) {
                serverErrors.showNoResult(serverError);
                newsSection.hide();
            }
            preloader.hide();
        } catch (error) {
            console.error("Не удалось загрузить данные: ", error);
            serverErrors.showNoNetwork(serverError);
            preloader.hide();
        }

    });

    validationForm.setEventListeners(searchForm);

})();