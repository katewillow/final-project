"use strict";

export class News {
    constructor(element) {
        this.element = element;
    }

    show() {
        this.element.classList.remove('news_hidden');
    }

    hide() {
        this.element.classList.add('news_hidden');
    }

    addMoreCards(array, button) {
        if (array.length <= 3) {
            button.classList.add('news__button_hidden');
        } else {
            button.classList.remove('news__button_hidden');
            button.addEventListener('click', () => {

            });
        }
    }
}
