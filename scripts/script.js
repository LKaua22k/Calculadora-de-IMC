import { Modal } from "./modal.js";
import { Alert } from "./alert.js";
import { notNumber, IMC } from "./util.js";

const form = document.querySelector('form');
const inputWeight = document.querySelector('#inputWeight');
const inputHeight = document.querySelector('#inputHeight');

inputWeight.focus()

inputWeight.oninput = () => Alert.close()
inputWeight.oninput = () => Alert.close()


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