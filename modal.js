export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('h2'),
    btnClose: document.querySelector('i'),

    open:() => {
        Modal.wrapper.classList.add('open');
    },
    close:() => {
        Modal.wrapper.classList.remove('open');
    }

}

Modal.btnClose.onclick = () => {
    Modal.close()
}