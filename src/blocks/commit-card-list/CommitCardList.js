"use strict";

export class CommitCardList {
    constructor(commits) {
        this.commits = commits;
    }

    addCard(card) {
        this.commits.appendChild(card.create());
    }

    render(array) {
        array.forEach(card => {
            this.addCard(card);
        });
    }
}