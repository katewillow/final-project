"use strict";
import {NewsCard} from "../news-card/NewsCard";

export class News {
    constructor(element, button, newsStorage, newsList, template) {
        this.element = element;
        this.button = button;
        this.newsStorage = newsStorage;
        this.newsList = newsList;
        this.template = template;

        this.button.addEventListener('click', () => {
            this.render();
        });
    }

    show() {
        this.element.classList.remove('news_hidden');
    }

    hide() {
        this.element.classList.add('news_hidden');
    }

    clear() {
        this.newsList.clear();
    }

    render() {
        this.newsList.render(this.newsStorage.getNextCards(3).map(card => new NewsCard(card, this.template)));
        if (this.newsStorage.hasMoreCards()) {
            this.button.classList.remove('news__button_hidden');
        } else {
            this.button.classList.add('news__button_hidden');
        }
    }

}
