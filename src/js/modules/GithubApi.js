"use strict";

export class GithubApi {
    constructor(options) {
        this.options = options;
    }

    async _getResponseData(response) {
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        return response.json();
    }

    async getCommits() {
        const response = await fetch(
            `${this.options.baseUrl}/katewillow/final-project/commits`);
        return this._getResponseData(response);
    }
}