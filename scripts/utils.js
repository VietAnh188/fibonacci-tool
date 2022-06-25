import {fibonacciResult, currentFibonacci, resultBoard} from "./constants.js";

const renderFibonacci = (fibonacciNumber, container) => {
    const li = document.createElement('li')
    li.classList.add(...['result-item', 'shadow-box', 'border-radius'])
    const span = document.createElement('span')
    span.textContent = fibonacciNumber.toString()
    li.append(span)
    container.append(li)
}

const timeoutRender = (ms) => {
    let timeout, promise
    promise = new Promise(resolve => {
        timeout = setTimeout(resolve, ms)
    })
    return {
        promise,
        cancel: () => clearTimeout(timeout)
    }
}

const renderCurrentFibonacci = (fibonacciNumber, target) => {
    target.textContent = fibonacciNumber
}

export const calculateFibonacci = async (range) => {
    let before = 0, after = 1, next
    for (let i = 1; i <= range; i++) {
        const timeout = timeoutRender(i)
        if (before === Infinity) {
            break
        }
        await timeout.promise
        renderFibonacci(before, fibonacciResult)
        renderCurrentFibonacci(before, currentFibonacci)
        resultBoard.scrollTo(0, resultBoard.scrollHeight)
        next = before + after
        before = after
        after = next
        timeout.cancel()
    }
}

export const handleClearResult = (parent, childs) => {
    childs.forEach(child => {
        parent.removeChild(child)
    })
}

