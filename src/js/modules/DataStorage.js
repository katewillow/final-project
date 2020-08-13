"use strict";

export class DataStorage {
    constructor(array) {
        this.array = array;
    }

    setDataStorage() {
        localStorage.setItem(this.array.join(), value);
    }

    getDataStorage() {
        localStorage.getItem(this.array.slice(0, 2));
    }

    clearDataStorage() {
        localStorage.clear();
    }

}