"use strict";
import {NO_RESULT_TITLE} from "../../js/constants/constants";
import {NO_RESULT_SUBTITLE} from "../../js/constants/constants";
import {NO_NETWORK_TITLE} from "../../js/constants/constants";
import {NO_NETWORK_SUBTITLE} from "../../js/constants/constants";

export class ServerErrors {

    _showError(element) {
        element.classList.remove('server-errors_hidden');
    }

    showNoResult(element) {
        this._showError(element);
        element.querySelector('.server-errors__title').textContent = NO_RESULT_TITLE;
        element.querySelector('.server-errors__subtitle').textContent = NO_RESULT_SUBTITLE;

    }

    showNoNetwork(element) {
        this._showError(element);
        element.querySelector('.server-errors__title').textContent = NO_NETWORK_TITLE;
        element.querySelector('.server-errors__subtitle').textContent = NO_NETWORK_SUBTITLE;
    }

    hide(element) {
        element.classList.add('server-errors_hidden');
    }

}

