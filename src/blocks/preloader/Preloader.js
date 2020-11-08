"use strict";

export class Preloader {

    constructor(element) {
        this.element = element;
    }

    show() {
        this.element.classList.remove('preloader_hidden');
    }

    hide() {
        this.element.classList.add('preloader_hidden');
    }
}