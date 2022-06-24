import {number_input, number_input_clear, number_input_submit, fibonacciResult, eachFibonacci, number_input_form} from "./constants.js";
import {NumberInput} from "./classes/numberInput.class.js";
import {Util} from "./utils.js";
import {Fibonacci} from "./classes/fibonacci.class.js";

(() => {
    if (window.location.pathname === '/') {
        const handleSubmitCalculate = () => {
            if (NumberInputInstance.Range <= 0) {
                alert("Range must be not empty and larger than 0")
                number_input.value = ''
                number_input.focus()
            }
            FibonacciInstance.reset()
            const fibonacciResultItems = fibonacciResult.querySelectorAll('.result-item')
            util.clearResult(fibonacciResult, fibonacciResultItems)
            util.handleStartCalculate(NumberInputInstance.Range, FibonacciInstance)
        }
        const util = new Util(eachFibonacci, fibonacciResult)
        const NumberInputInstance = new NumberInput()
        const FibonacciInstance = new Fibonacci()
        number_input.addEventListener('change', (event) => {
            util.handleChangeNumberInput(Number(Number(event.target.value).toFixed()), NumberInputInstance)
            if (Number(event.target.value) !== Number(Number(event.target.value).toFixed())) {
                number_input.value = NumberInputInstance.Range
            }
        })
        number_input_submit.addEventListener('click', (_event) => {
            handleSubmitCalculate()
        })
        number_input_clear.addEventListener('click', (_event) => {
            const fibonacciResultItems = fibonacciResult.querySelectorAll('.result-item')
            util.clearResult(fibonacciResult, fibonacciResultItems)
            number_input.value = ''
            number_input.focus()
        })
        window.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                handleSubmitCalculate()
            }
        })
        number_input_form.addEventListener('submit', (event) => {
            event.preventDefault()
            handleSubmitCalculate()
        })
    }
})()
