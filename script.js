import { Modal } from "./modal.js";
import { Alert } from "./alert.js";

const form = document.querySelector('form');
const inputWeight = document.querySelector('#inputWeight');
const inputHeight = document.querySelector('#inputHeight');


form.onsubmit = (e) => {
    e.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertNuber = notNumber(weight) || notNumber(height)

    if (showAlertNuber) {
        Alert.open()
        return;
    }

    Alert.close()
    const result = IMC(height,weight)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

function notNumber(value) {
   return isNaN(value) || value == ""
} 


function IMC(altura,peso){
    return (peso / ((altura / 100) ** 2)).toFixed(2)
}