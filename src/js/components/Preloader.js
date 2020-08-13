export class Preloader {
    /**
     * @param {Element} element
     */
    constructor(element) {
        this.element = element;
    }

    show() {
        this.element.classList.remove('preloader_hidden');
    }

    hide() {
        this.element.classList.add('preloader_hidden');
    }
}