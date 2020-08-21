"use strict";

import './analytics.css';
import {DataStorage} from "../../js/modules/DataStorage";
import {NewsStorage} from "../../js/modules/NewsStorage";
import {Statistics} from "../../blocks/statistics/Statistics";

(function() {
    const userSearch = document.querySelector('.statistics__user-search');
    const totalResults = document.querySelector('.statistics__amount_all');
    const titleReferences = document.querySelector('.statistics__amount_title');

    const statistics = new Statistics();
    const dataStorage = new DataStorage();

    function getSearchText() {
        userSearch.textContent = dataStorage.getDataStorage('query');
    }

    function getTotalResults() {
        totalResults.textContent = dataStorage.getDataStorage('totalResults');
    }

    function getTitleReference() {
        titleReferences.textContent = dataStorage.getDataStorage('news').filter(news => {
            return news.title.includes(dataStorage.getDataStorage('query'))
        }).length;
    }

    getSearchText();
    getTotalResults();
    getTitleReference();

})();
