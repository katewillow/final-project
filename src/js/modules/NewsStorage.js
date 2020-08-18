"use strict";

export class NewsStorage {

    constructor(dataStorage) {
        this.dataStorage = dataStorage;
    }

    _getCards() {
        return this.dataStorage.getDataStorage("news");
    }

    setCards(cards) {
        return this.dataStorage.setDataStorage(cards, "news");
    }

    getNextCards(n) {
        const cards = this._getCards();
        const result = cards.slice(0, n);
        this.setCards(cards.slice(n, cards.length));
        return result;
    }

    hasMoreCards() {
        return this._getCards().length > 0;
    }

}