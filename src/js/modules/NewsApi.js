"use strict";
import {getCurrentDate} from "../utils/date";
import {getDateWeekAgo} from "../utils/date";
import {NEWS_API_KEY} from "../constants/constants";
import {NEWS_PAGE_SIZE} from "../constants/constants";
import {NEWS_LANGUAGE} from "../constants/constants";
import {NEWS_SORT_BY} from "../constants/constants";

export class NewsApi {
    constructor(options) {
        this.options = options;
    }

    async _getResponseData(response) {
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        return response.json();
    }

    async getNews(query) {
        const response = await fetch(
            `${this.options.baseUrl}/everything?q=${query}&apiKey=${NEWS_API_KEY}&from=${getDateWeekAgo()}&to=${getCurrentDate()}&sortBy=${NEWS_SORT_BY}&pageSize=${NEWS_PAGE_SIZE}&language=${NEWS_LANGUAGE}`);
        return this._getResponseData(response);
    }
}