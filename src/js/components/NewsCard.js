"use strict";
import {getCardDate} from "../utils/date";

export class NewsCard {
    constructor(card, template) {
        this.template = template;
        this.card = card;
    }

    create() {
        const cardTemplate = this.template.cloneNode(true);
        const link = cardTemplate.querySelector('.news-card');
        link.href = this.card.url;
        const image = cardTemplate.querySelector('.news-card__image');
        if (this.card.urlToImage === null) {
            image.src = './images/no-result__image.svg';
        } else {
            image.src = this.card.urlToImage;
        }
        cardTemplate.querySelector('.news-card__date').textContent = getCardDate(this.card.publishedAt);
        cardTemplate.querySelector('.news-card__title').textContent = this.card.title;
        cardTemplate.querySelector('.news-card__lead').textContent = this.card.description;
        cardTemplate.querySelector('.news-card__source-name').textContent = this.card.source.name;

        return cardTemplate;

    }
}