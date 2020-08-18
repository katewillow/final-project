"use strict";
export class BaseComponent {

    constructor(domElement) {
        this.domElement = domElement;
    }

    _setHandlers(...args) {
            this.domElement.addEventListener(...args);
        }

}