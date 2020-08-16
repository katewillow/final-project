"use strict";
import {GITHUB_ID} from "../constants/constants";
import {GITHUB_REPOSITORY} from "../constants/constants";

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
            `${this.options.baseUrl}/${GITHUB_ID}/${GITHUB_REPOSITORY}/commits`);
        return this._getResponseData(response);
    }
}