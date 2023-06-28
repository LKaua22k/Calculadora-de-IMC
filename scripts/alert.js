export const Alert = {
    element: document.querySelector('.alert'),

    open:() => {
        Alert.element.classList.add('erro');
        inputWeight.value = ""
        inputHeight.value = ""
    },
    close:() => {
        Alert.element.classList.remove('erro');
    }
}