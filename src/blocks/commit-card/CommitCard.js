"use strict";

import {getCardDate} from "../../js/utils/date";

export class CommitCard {
    constructor(card, template) {
        this.template = template;
        this.card = card;
    }

    create () {
        const commitTemplate = this.template.cloneNode(true);
        const link = commitTemplate.querySelector('.commit-card');
        link.href = this.card.html_url;
        const image = commitTemplate.querySelector('.commit-card__avatar');
        image.src = this.card.author.avatar_url;
        commitTemplate.querySelector('.commit-card__date').textContent = getCardDate(this.card.commit.committer.date);
        commitTemplate.querySelector('.commit-card__name').textContent = this.card.commit.committer.name;
        commitTemplate.querySelector('.commit-card__email').textContent = this.card.commit.committer.email;
        commitTemplate.querySelector('.commit-card__commit').textContent = this.card.commit.message;

        return commitTemplate;

    }
}