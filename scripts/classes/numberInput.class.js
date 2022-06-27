export class NumberInput {
    /**
     * @private
     * @type {number}
     * */
    #range

    constructor() {
        this.setRange = this.setRange.bind(this)
    }

    /**
     * @returns {number}
     * */
    get Range() {return this.#range}

    /**
     * @param {number} numberUserInput
     * */
    setRange(numberUserInput) {
        this.#range = numberUserInput
    }

    reset() {
        this.#range = 0
    }
}