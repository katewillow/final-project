"use strict";

import './analytics.css';
import { DataStorage } from "../../js/modules/DataStorage";
import { Statistics } from "../../blocks/statistics/Statistics";
import { getCurrentMonth } from "../../js/utils/date";

(function() {
    const userSearch = document.querySelector('.statistics__user-search');
    const totalResults = document.querySelector('.statistics__amount_all');
    const titleReferences = document.querySelector('.statistics__amount_title');
    const currentMonth = document.querySelector('.statistics__table-month');
    const statisticsBody = document.querySelector('.statistics__table-body');
    const stringTemplate = document.querySelector('.statistics__table-template').content;

    const dataStorage = new DataStorage();
    const statistics = new Statistics(dataStorage, stringTemplate);

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

    function setCurrentMonth() {
        currentMonth.textContent = getCurrentMonth();
    }

    getSearchText();
    getTotalResults();
    getTitleReference();
    setCurrentMonth();

    statistics.renderStatistics().forEach(node => statisticsBody.append(node));

})();
