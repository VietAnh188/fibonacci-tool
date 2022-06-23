export class Util {
    #eachFibonacciSpan
    #fibonacciResult

    constructor(eachFibonacciSpan, fibonacciResult) {
        this.#eachFibonacciSpan = eachFibonacciSpan
        this.#fibonacciResult = fibonacciResult
    }

    handleChangeNumberInput(targetValue, instance) {
        instance.setRange(targetValue)
    }

    #renderFibonacci(fibonacciNumber, container) {
        const li = document.createElement('li')
        li.classList.add(...['result-item', 'shadow-box', 'border-radius'])
        const span = document.createElement('span')
        span.textContent = fibonacciNumber.toString()
        li.append(span)
        container.append(li)
    }

    handleStartCalculate(range, fibonacci) {
        if (range > 2) {
            for (let i = 0; i < range - 2; i++) {
                if (i === 0) {
                    this.#renderFibonacci(fibonacci.beforeNumber, this.#fibonacciResult)
                    this.#renderFibonacci(fibonacci.afterNumber, this.#fibonacciResult)
                }
                if (fibonacci.currentNumber === Infinity) {
                    break
                }
                this.#renderFibonacci(fibonacci.currentNumber, this.#fibonacciResult)
                this.#renderEachFibonacci(fibonacci.currentNumber, this.#eachFibonacciSpan)
                fibonacci.pushFibonacciCollection(fibonacci.currentNumber)
                fibonacci.beforeNumber = fibonacci.calculateNext(fibonacci.afterNumber, fibonacci.currentNumber)
                fibonacci.afterNumber = fibonacci.currentNumber
                fibonacci.currentNumber = fibonacci.beforeNumber
            }
        } else {
            for (let i = 0; i < range; i++) {
                this.#renderFibonacci(fibonacci.FibonacciCollection[i], this.#fibonacciResult)
            }
        }
        fibonacci.reset()
    }

    clearResult(parent, childs) {
        childs.forEach(child => {
            parent.removeChild(child)
        })
    }

    #renderEachFibonacci(fibonacci, target) {
        target.textContent = fibonacci.toString()
    }
}