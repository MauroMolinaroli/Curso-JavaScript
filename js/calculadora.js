debugger

function calcular() {
    let primerNro = parseInt(prompt("ingresa el primer nro"))
    let segundoNro = parseInt(prompt("ingresa el segundo numero"))
    let operador = prompt("selecciona la operacion +, -, *, /")
    console.log("resultado", realizarCalculo(primerNro, segundoNro, operador))
}   

function realizarCalculo(num1, num2, ope) {

    switch(ope) {
        case "+":
            return num1 + num2

        case "-":
            return num1 - num2

        case "*":
            return num1 * num2

        case "/":
            return num1 / num2

                        
        default:
            return "error de calculo."
    }
}

  