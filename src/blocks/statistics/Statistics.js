"use strict";

import {getGraphDate, getNDayAgo} from "../../js/utils/date";

export class Statistics {
    constructor(dataStorage, template) {
        this.dataStorage = dataStorage;
        this.template = template;
    }

    _countNewsNumber() {
        let result = [];
        for (let i = 0; i < 7; i++) {
            result.push(this.dataStorage.getDataStorage('news').filter(news => {
                return news.publishedAt.includes(getNDayAgo(i))
            }).length);
        }
        return result.reverse();
    }


    renderStatistics() {
        const dates = getGraphDate();
        const numbers = this._countNewsNumber();
        const nodes = [];

        for (let i = 0; i < dates.length; i++) {
            const node = this.template.cloneNode(true);
            const weekDay = node.querySelector('.statistics__table-cell');
            const dayResult = node.querySelector('.statistics__table-bar');
            dayResult.style.width = numbers[i] + '%';
            weekDay.textContent = dates[i];
            dayResult.textContent = numbers[i];
            nodes.push(node);
        }

        return nodes;
    }

}