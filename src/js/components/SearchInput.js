"use strict";

/**
 * @callback onSearchSubmit
 * @param {string} query
 */

export class SearchInput {
    /**
     * @param form {Element}
     * @param onSubmit {onSearchSubmit}
     */
    constructor(form, onSubmit) {
        this.form = form;
        this.onSubmit = onSubmit;
    }

    /**
     * @private
     */
    _checkInputValidity() {
        /**
         * @type {Element}
         */
        const error = this.form.querySelector('.search-input__error');
        const input = this.form.querySelector('.search-input__input');


        const isValid = input.checkValidity();

        if (input.validity.valueMissing) {
            error.innerText = "Нужно ввести ключевое слово";
        } else {
            error.innerText = "";
        }

        if (isValid) {
            this.onSubmit(input.value);
        }
    }

    /**
     * @private
     */
    _checkFormValidity() {
        this._checkInputValidity();
    }

    setSubmitButtonState() {
        /**
         * @type {Element}
         */
        const submitButton = this.form.querySelector('.search-input__button');
        submitButton.disabled = this.form.checkValidity();

    }

    setEventListeners() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._checkFormValidity();
        });
    }
}