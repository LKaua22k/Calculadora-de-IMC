const inputWeight = document.querySelector('#inputWeight')
const inputHeight = document.querySelector('#inputHeight')
const calcButton = document.querySelector('#calcButton')

function calc(e){
    e.preventDefault()
    const result = (inputWeight.value / ((inputHeight.value / 100) ** 2)).toFixed(2)

    if(inputWeight.value != "" & inputHeight.value != ""){
        return alert(result)
    } else{
        return alert("Please enter")
       }

}



calcButton.addEventListener('click', calc)