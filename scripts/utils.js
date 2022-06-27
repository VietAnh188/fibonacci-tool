import {fibonacciResult, currentFibonacci, resultBoard} from "./constants.js";

/**
 * @typedef {Function} FunctionRender
 * @param {number} fibonacciNumber
 * @param {Element} target
 * @returns {void}
 * */

/** @type {FunctionRender}*/
const renderFibonacci = (fibonacciNumber, target) => {
    const li = document.createElement('li')
    li.classList.add(...['result-item', 'shadow-box', 'border-radius'])
    const span = document.createElement('span')
    span.textContent = fibonacciNumber.toString()
    li.append(span)
    target.append(li)
}

/**
 * @param ms {number}
 * @returns {{promise: Promise, cancel: (function(): void)}}
 * */
const timeoutRender = (ms) => {
    let /** @type {number}*/ timeout, /** @type {Promise}*/ promise
    promise = new Promise(resolve => {
        timeout = setTimeout(resolve, ms)
    })
    return {
        promise,
        cancel: () => clearTimeout(timeout)
    }
}

/** @type {FunctionRender}*/
const renderCurrentFibonacci = (fibonacciNumber, target) => {
    target.textContent = fibonacciNumber.toString()
}

/**
 * @function
 * @param {number} range
 * @returns {Promise<void>}
 * */
export const calculateFibonacci = async (range) => {
    /** @type {number}*/
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

/**
 * @function
 * @param {Element} parent
 * @param {NodeListOf<Element>} childs
 * */
export const handleClearResult = (parent, childs) => {
    childs.forEach(child => {
        parent.removeChild(child)
    })
}

