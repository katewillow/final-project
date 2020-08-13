"use strict";

export class Errors {
    constructor(element, template) {
        this.element = element;
        this.template = template;
    }

    showNoResult() {
        this.element.classList.remove('no-result_hidden');
    }

    showError() {
        const errorTemplate = this.template.cloneNode(true);
        return errorTemplate;
    }
}

