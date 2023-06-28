export function notNumber(value) {
    return isNaN(value) || value == ""
 } 
 
 
export function IMC(altura,peso){
     return (peso / ((altura / 100) ** 2)).toFixed(2)
 }