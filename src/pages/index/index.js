"use strict";
import './index.css';
import {DataStorage} from "../../js/modules/DataStorage";
import {NewsCardList} from "../../blocks/news-card-list/NewsCardList";
import {SearchInput} from "../../blocks/search-input/SearchInput";
import {NewsApi} from "../../js/modules/NewsApi";
import {Preloader} from "../../blocks/preloader/Preloader";
import {News} from "../../blocks/news/News";
import {ServerErrors} from "../../blocks/server-errors/ServerErrors";
import {NewsStorage} from "../../js/modules/NewsStorage";

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
    const serverUrl = process.env.NODE_ENV === 'development' ? 'http://newsapi.org/v2' : 'https://newsapi.org/v2';
        const api = new NewsApi({
            baseUrl: serverUrl,
        });

    if (newsStorage.hasCards()) {
        newsSection.render();
        newsSection.show();
    }

    const validationForm = new SearchInput(searchForm, async (query) => {
        preloader.show();
        serverErrors.hide(serverError);

        try {

            const serverNews = await api.getNews(query);
            newsStorage.setCards(serverNews.articles);
            dataStorage.setDataStorage(query, 'query');
            dataStorage.setDataStorage(serverNews.totalResults, 'totalResults');

            newsSection.clear();
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

    if (newsStorage.hasCards()) {
        validationForm.hasInput(dataStorage.getDataStorage('query'));
    }

})();
