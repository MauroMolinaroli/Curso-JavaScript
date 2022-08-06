

/*let confirmar = confirm("¿desea formatear su disco?")
let datoIngresado = prompt("ingrese su nro. de cuenta bancaria:")
let salida = datoIngresado + " " + "ingresada"
alert(salida)
*/


//let username = prompt("ingrese su nombre:")
//debugger

//if (username == "mauro molinaroli") {
//    console.log("bienvenido", username)

//}
//else {
//    console.warn("no se reconoce el usuario")
//}

// let miOferta = prompt("ingrese su oferta")

// if (miOferta < 22) {
//     console.error("no seas raton")
// }
// else if (miOferta < 30) {
//     console.warn("seguis siendo una rata")
// }
// else if (miOferta < 50) {
//     console.warn("¿sos pobre?")
// }
// else {
//     console.log("oferta aceptada")
// } 

// let username = prompt("ingrese su nombre de usuario")
// let password = prompt("ingrese su contraseña")
// let fingerPrint = confirm("¿desea utilizar su huella digital?")

// if ((username == "mauro" && password == 123) || (fingerPrint == true)) {

//     console.log("bienvenido", username)
// }

// else {
//     console.warn("no se reconoce el usuario y/o contraseña.")
// }

// let nombreIngresado = prompt("ingresar nombre")

// if (((nombreIngresado !="") && (nombreIngresado == "EMA")) || (nombreIngresado == "ema")) {
//     console.log("bienvenido", nombreIngresado)
// }

// else {
//     alert("error: ingresar nombre valido")
// }


// for (let i = 0; i <= 21; i++) {
//     console.log("iteracion Nro.", i)
// }

// let limite = parseInt(prompt("ingrese un numero"))

// for (let i = 0; i < limite; i++) {
//     let resultado = limite * i;
//     console.log(limite +"X"+ i +"="+ resultado);
//     if (i === 5) {
//         break
//     }
// }

// let seguimos = true
// let num = parseInt(prompt("ingresa un numero:"))
// let factor = 1

// while(seguimos) {
//     console.log("resultado", num * factor)
//     seguimos = confirm("quiere continuar?")
//     if(seguimos) {
//         factor++
//     }
// }

// let color = prompt ("eliga un color de prenda")
//     color = color.toLowerCase()

// switch (color) {
//     case "rojo":
//     console.log("si,tenemos el color", color)
//     break

//     case "azul":
//     console.log("si,tenemos el color", color)
//     break

//     case "verde":
//     console.log("si,tenemos el color", color)
//     break           

//     case "violeta":
//     console.log("si,tenemos el color", color)
//     break

//     default:
//         console.warn("no trabajamos el color", color)


// }   

//     for (let i = 0; i < 7; i++) {
//         console.log("iterando la vez nro.", i)
//     }


//     let numero = parseInt(prompt("ingresa un numero"))
//     let otroNumero = parseInt(prompt("ingrese un nuevo numero"))

// let welcome = alert("Bienvenidos a hamburgueseria la spezia, a continuación elegi el producto que vas a llevar!");
// let menu = parseInt(prompt("Que se te antoja hoy?(Ingresa solamente el número de la opción): 1-hamburguesas, 2-acompañamiento"));
// while (menu != 1 && menu != 2) {
//     menu = parseInt(
//         prompt("Por favor escoja una opción válida. Que se te antoja hoy?(Ingresa solamente el número de la opción): 1-hamburguesa 2-acompañamiento")
//     );
// }


// function pedirNombre (num1, num2) {
//     num1 = parseInt(prompt("pone un numero"))
//     num2 = parseInt(prompt("pone otro numero forro"))
//     alert("resultado " + num1 * num2)
// }

// pedirNombre();  

// let numero1 = 0
// let numero2 = 0
// let resultadoMulti = 0

// function multiplicar() {
//     numero1 = parseInt(prompt("ingresa un numero"))
//     numero2 = parseInt(prompt("ingresa otro numero"))
//     resultadoMulti = calcular(numero1, numero2)
//     console.log("resultado final", resultadoMulti)
// }

// function calcular(num1, num2) {
//     return num1 * num2
// }



