import {number_input, number_input_clear, number_input_submit, fibonacciResult, number_input_form, currentFibonacci} from "./constants.js";
import {NumberInput} from "./classes/numberInput.class.js";
import {calculateFibonacci, handleClearResult} from "./utils.js";

(() => {
    if (window.location.pathname === '/') {
        const numberInput = new NumberInput()
        const handleSubmit = async () => {
            if (number_input.value !== '' && Number(number_input.value) > 0) {
                numberInput.setRange(Number(Number(number_input.value).toFixed()))
                const fibonaccis = fibonacciResult.querySelectorAll('.result-item')
                if (fibonaccis.length) {
                    handleClearResult(fibonacciResult, fibonaccis)
                }
                await calculateFibonacci(numberInput.Range)
            } else {
                alert("Input must be greater than 0 and not empty")
                number_input.value = ''
                number_input.focus()
            }
        }
        number_input_form.addEventListener('submit',async(event) => {
            event.preventDefault()
            await handleSubmit()
        })
        number_input_submit.addEventListener('click',async (_event) => {
            await handleSubmit()
        })
        number_input_clear.addEventListener('click', (event) => {
            const fibonaccis = fibonacciResult.querySelectorAll('.result-item')
            if (fibonaccis.length) {
                handleClearResult(fibonacciResult, fibonaccis)
                currentFibonacci.textContent = ''
                number_input.value = ''
                number_input.focus()
                numberInput.reset()
            }
        })
    }
})()
