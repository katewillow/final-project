"use strict";

export class NewsCardList {

    constructor(news) {
        this.news = news;
    }

    addCard(card) {
        this.news.appendChild(card.create());
    }

    render(array) {
        array.forEach(card => {
            this.addCard(card);
        });
    }
}