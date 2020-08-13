"use strict";
import {getCurrentDate} from "../utils/date";
import {getDateWeekAgo} from "../utils/date";

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
            `${this.options.baseUrl}/everything?q=${query}&from=${getDateWeekAgo()}&to=${getCurrentDate()}&sortBy=popularity&pageSize=100&language=ru`,
            {headers: this.options.headers});
        return this._getResponseData(response);
    }
}