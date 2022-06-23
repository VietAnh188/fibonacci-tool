export class Fibonacci {
    beforeNumber
    afterNumber
    currentNumber

    #fibonacciCollection

    constructor() {
        this.beforeNumber = 0
        this.afterNumber = 1
        this.currentNumber = 1
        this.#fibonacciCollection = [this.beforeNumber, this.afterNumber]
    }

    get FibonacciCollection() {return this.#fibonacciCollection}

    pushFibonacciCollection(fibonacciNumber) {
        this.#fibonacciCollection.push(fibonacciNumber)
    }

    calculateNext(before, after) {
        return before + after
    }

    reset() {
        this.beforeNumber = 0
        this.afterNumber = 1
        this.currentNumber = 1
        this.#fibonacciCollection = [this.beforeNumber, this.afterNumber]
    }
}