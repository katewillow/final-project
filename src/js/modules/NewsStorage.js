"use strict";

export class NewsStorage {
    constructor(dataStorage) {
        this.dataStorage = dataStorage;
        this.numberOfRenderedCards = 0;
    }

    _getCards() {
        return this.dataStorage.getDataStorage('news');
    }

    setCards(cards) {
        this.dataStorage.setDataStorage(cards, 'news');
        this.numberOfRenderedCards = 0;
    }

    getNextCards(n) {
        const result = this._getCards().slice(this.numberOfRenderedCards, this.numberOfRenderedCards + n);
        this.numberOfRenderedCards += n;
        return result;
    }

    hasCards() {
        return this._getCards() && this._getCards().length;
    }

    hasMoreCards() {
        return this.numberOfRenderedCards < this._getCards().length;
    }
}