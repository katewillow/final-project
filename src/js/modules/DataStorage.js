"use strict";

export class DataStorage {

    setDataStorage(value, key) {
        return localStorage.setItem(key, JSON.stringify(value));
    }

    getDataStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }

}