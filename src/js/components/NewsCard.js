"use strict";
import {getItemDate} from "../utils/date";

export class NewsCard {
    constructor(card, template) {
        this.template = template;
        this.card = card;
    }

    create () {
        const cardTemplate = this.template.cloneNode(true);
        const link = cardTemplate.querySelector('.news-card');
        link.href = this.card.url;
        const image = cardTemplate.querySelector('.news-card__image');
        if (image.src = this.card.urlToImage) {
            image.hidden=false;
        } else {
            image.src = './images/no-result__image.svg';
        }
        cardTemplate.querySelector('.news-card__date').textContent = getItemDate(this.card.publishedAt);
        cardTemplate.querySelector('.news-card__title').textContent = this.card.title;
        cardTemplate.querySelector('.news-card__lead').textContent = this.card.description;
        cardTemplate.querySelector('.news-card__source-name').textContent = this.card.source.name;

        return cardTemplate;

    }
}