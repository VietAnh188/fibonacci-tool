import {number_input, number_input_clear, number_input_submit, fibonacciResult, eachFibonacci} from "./constants.js";
import {NumberInput} from "./classes/numberInput.class.js";
import {Util} from "./utils.js";
import {Fibonacci} from "./classes/fibonacci.class.js";

(() => {
    const util = new Util(eachFibonacci, fibonacciResult)
    const NumberInputInstance = new NumberInput()
    const FibonacciInstance = new Fibonacci()
    number_input.addEventListener('change', (event) => {
        util.handleChangeNumberInput(Number(event.target.value), NumberInputInstance)
    })
    number_input_submit.addEventListener('click', (_event) => {
        if (NumberInputInstance.Range <= 0) {
            alert("Range must be not empty and  larger than 0")
            number_input.value = ''
            number_input.focus()
        }
        FibonacciInstance.reset()
        const fibonacciResultItems = fibonacciResult.querySelectorAll('.result-item')
        util.clearResult(fibonacciResult, fibonacciResultItems)
        util.handleStartCalculate(NumberInputInstance.Range, FibonacciInstance)
    })
    number_input_clear.addEventListener('click', (_event) => {
        const fibonacciResultItems = fibonacciResult.querySelectorAll('.result-item')
        util.clearResult(fibonacciResult, fibonacciResultItems)
        number_input.value = ''
        number_input.focus()
    })
})()