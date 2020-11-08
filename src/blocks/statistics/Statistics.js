//Класс, отвечающий за логику работы графиков со статистикой на странице аналитики.
//Конструктор класса получает объект, содержащий текущее состояние локального браузерного хранилища.

"use strict";

import {getGraphDate, getNDayAgo} from "../../js/utils/date";


export class Statistics {
    constructor(dataStorage, template) {
        this.dataStorage = dataStorage;
        this.template = template;
    }

    countNewsNumber() {
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
        const numbers = this.countNewsNumber();
        const nodes = [];

        for (let i = 0; i < dates.length; i++) {
            const node = this.template.cloneNode(true);
            const weekDay = node.querySelector('.statistics__table-cell');
            const dayResult = node.querySelector('.statistics__table-bar');
            weekDay.textContent = dates[i];
            dayResult.textContent = numbers[i];
            nodes.push(node);
        }

        return nodes;
    }

}