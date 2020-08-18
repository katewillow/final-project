"use strict";

export class DataStorage {

    setDataStorage(array, key) {
        return localStorage.setItem(key, JSON.stringify(array));
    }

    getDataStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }

}