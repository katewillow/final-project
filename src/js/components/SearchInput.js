"use strict";

export class SearchInput {

    constructor(form, onSubmit) {
        this.form = form;
        this.onSubmit = onSubmit;
    }

    _checkInputValidity() {
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

    _checkFormValidity() {
        this._checkInputValidity();
    }

    /*setSubmitButtonState() {
        const submitButton = this.form.querySelector('.search-input__button');
        submitButton.disabled = ;
    }*/

    setEventListeners() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._checkFormValidity();
        });
    }
}