"use strict";

export class CommitCardList {
    constructor(commits) {
        this.commits = commits;
    }

    _addCard(card) {
        this.commits.appendChild(card.create());
    }

    render(array) {
        array.forEach(card => {
            this._addCard(card);
        });
    }
}