

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

let welcome = alert("Bienvenidos a hamburgueseria la spezia, a continuación elegi el producto que vas a llevar!");
let menu = parseInt(prompt("Que se te antoja hoy?(Ingresa solamente el número de la opción): 1-hamburguesas, 2-acompañamiento"));
while (menu != 1 && menu != 2) {
    menu = parseInt(
        prompt("Por favor escoja una opción válida. Que se te antoja hoy?(Ingresa solamente el número de la opción): 1-hamburguesa 2-acompañamiento")
    );
}



function pedido() {
    switch (menu) {
        case 1:
            let saborHamburguesa = parseInt(
                prompt(
                    "que tipo de hamburguesa vas a pedir?(Ingresa solamente el número de la opción): 1-cheeseburguer, 2-crispy, 3-bbq, 4-smoked, 5-clasica."
                )
            );
            if (saborHamburguesa === 1) {
                alert("Nuestra especialidad, estará lista para retirar dentro de 60min minutos. El valor es de $850");
                
            } else if (saborHamburguesa === 2) {
                alert(
                    "Estará lista para retirar en 60 minutos. El valor es de $900"
                );
                
            } else if (saborHamburguesa === 3) {
                alert("Gran opción! La podras retirar en 60 minutos. Total a pagar: $900");
                
            } else if (saborHamburguesa === 4) {
                alert("Estara lista para retirar en 60 minutos. Total a pagar: $950");
                
            } else if (saborHamburguesa === 5) {
                alert("Estará lista para retirar en 60 minutos. Total a pagar: $850");
                
            }
            break;
        case 2:
            
            let tipoAcompañamiento = parseInt(
                prompt(
                    "Que acompañamiento vas a elegir?(Ingresa solamente el número de la opción): 1-porcion de papas fritas, 2-porcion de bastones de muzzarella, 3-porcion de aros de cebolla"
                )
            );
            if (tipoAcompañamiento === 1) {
                alert("las clasicas papas Mcain, no fallan. Ahora elegí la cantidad.");
                
            } else if (tipoAcompañamiento === 2) {
                alert("rellenos de la muzzarella de mejor calidad. Ahora elegí la cantidad.");
               
            } else if (tipoAcompañamiento === 3) {
                alert("crocantes y riquisimos aros de cebolla. Ahora elegí la cantidad");
               
            }
            let cantidad = parseInt(prompt("Cuantas porciones vas a llevar? El valor por porcion es de $230"));
    let total = cantidad * 230;
    alert("Perfecto, estarán listas para retirar en 20 minutos. El total a pagar es de :" + total);
    }
    
}

pedido();

