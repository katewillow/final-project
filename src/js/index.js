"use strict";
import '../styles/index.css';
import {DataStorage} from "./modules/DataStorage";
import {NewsCard} from "./components/NewsCard";
import {NewsCardList} from "./components/NewsCardList";
import {SearchInput} from "./components/SearchInput";
import {NewsApi} from "./modules/NewsApi";
import {Preloader} from "./components/Preloader";
import {News} from "./components/News";
import {ServerErrors} from "./components/ServerErrors";

(async function () {
    const searchForm = document.querySelector('.search-input__form');
    const newsCardTemplate = document.querySelector('.news-card-template').content;
    const serverError = document.querySelector('.server-errors');
    const showMoreButton = document.querySelector('.news__button');

    const preloader = new Preloader(document.querySelector('.preloader'));
    const newsSection = new News(document.querySelector('.news'));
    const newsCardList = new NewsCardList(document.querySelector('.news-card-list'));
    const serverErrors = new ServerErrors();
    const dataStorage = new DataStorage();

    const validationForm = new SearchInput(searchForm, async (query) => {
        preloader.show();
        validationForm.setSubmitButtonState();

        const serverUrl = process.env.NODE_ENV === 'development' ? 'http://nomoreparties.co/news/v2/' : 'https://nomoreparties.co/news/v2/',
            api = new NewsApi({
                baseUrl: serverUrl,
            });

        try {
            const serverNews = await api.getNews(query);
            console.log(serverNews);
            dataStorage.setDataStorage(serverNews.articles, 'news');
            newsCardList.render(dataStorage.getDataStorage('news').slice(0, 3).map(card => new NewsCard(card, newsCardTemplate)));
            newsSection.addMoreCards(dataStorage.getDataStorage('news'), showMoreButton);
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