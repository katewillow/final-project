"use strict";

export class NewsCardList {

    constructor(news) {
        this.news = news;
    }

    _addCard(card) {
        this.news.appendChild(card.createCard());
    }

    render(array) {
        array.forEach(card => {
            this._addCard(card);
        });
    }

    clear() {
        while (this.news.firstChild) {
            this.news.removeChild(this.news.firstChild);
        }
    }
}