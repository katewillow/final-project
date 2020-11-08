"use strict";

export class SearchInput {

    constructor(form, onSubmit) {
        this.form = form;
        this.onSubmit = onSubmit;
        this.input = this.form.querySelector('.search-input__input');
        this.button = this.form.querySelector('.search-input__button');
    }

    _checkInputValidity() {
        const error = this.form.querySelector('.search-input__error');
        const isValid = this.input.checkValidity();

        if (this.input.validity.valueMissing) {
            error.innerText = "Нужно ввести ключевое слово";
        } else {
            error.innerText = "";
        }

        if (isValid) {
            this.onSubmit(this.input.value);
        }
    }

    _checkFormValidity() {
        this._checkInputValidity();
    }

    hasInput(string) {
      this.input.value = string;
    }

    setEventListeners() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._checkFormValidity();
        });

    }
}