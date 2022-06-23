export class NumberInput {
    #range

    constructor() {
        this.setRange = this.setRange.bind(this)
    }

    get Range() {return this.#range}

    setRange(numberUserInput) {
        this.#range = numberUserInput
    }
}