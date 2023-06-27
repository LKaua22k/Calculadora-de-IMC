export const Alert = {
    element: document.querySelector('.alert'),

    open:() => {
        Alert.element.classList.add('erro');
    },
    close:() => {
        Alert.element.classList.remove('erro');
    }
}