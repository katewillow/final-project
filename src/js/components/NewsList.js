"use strict";

export class NewsList {
    constructor(element) {
        this.element = element;
    }

    show() {
        this.element.classList.remove('news-list_hidden');
    }

    hideButton() {
        this.element.classList.add('news-list__button_hidden');
    }

}
