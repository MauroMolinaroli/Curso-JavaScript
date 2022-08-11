

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




// function calcular() {
//     let primerNro = parseInt(prompt("ingresa el primer nro"))
//     let segundoNro = parseInt(prompt("ingresa el segundo numero"))
//     let operador = prompt("selecciona la operacion +, -, *, /")
//     console.log("resultado", realizarCalculo(primerNro, segundoNro, operador))
// }   

// function realizarCalculo(num1, num2, ope) {

//     switch(ope) {
//         case "+":
//             return num1 + num2

//         case "-":
//             return num1 - num2

//         case "*":
//             return num1 * num2

//         case "/":
//             return num1 / num2

                        
//         default:
//             return "error de calculo."
//     }
// }

// calcular();








// let welcome = alert("bienvenidos a pizzeria los hijos de puta, a continuacion elegi tu pedido.")
// let menu = prompt(" que queres comer? pizza o empanadas? (ingresa solamente una de las dos opciones)")
//     while (menu != "pizza" && menu != "empanadas") {
//         menu = prompt("porfavor elegi una opcion valida, solo hay pizza y empanadas");

// }



// function pedido () {
    
//     switch (menu) {
//         case "pizza":
//             let saborPizza = prompt("elegi el sabor de la pizza, muzarella, provolone, clasica")
            
//             while (saborPizza != "muzarella" && saborPizza != "provolone" && saborPizza != "clasica") {
//                 saborPizza = prompt("elegi los gustos que tenemos")
//             }

//             if (saborPizza === "muzarella") {
//                     alert("esta lista en 20min, sale 500pe");
//             } 
            
//             else if (saborPizza === "provolone") {
//                     alert("esta lista en 20min, sale 700pe")
//             }
            
//             else if (saborPizza === "clasica") {
//                     alert("esta lista en 20min, sale 900pe")
//             }
            

//             break

            

//         case "empanadas":
//             let saborEmpandas = prompt("elegi el sabor de las empanadas, carne, jamon y queso, verdura")
            
//             while (saborEmpandas != "carne" && saborEmpandas != "jamon y queso" && saborEmpandas != "verdura") {
//                 saborEmpandas = prompt("elegi de los gustos que tenemos")
//             }

//             if (saborEmpandas === "carne") {
//                 alert("bien, ahora elegi cuantas queres")
//             }

//             else if (saborEmpandas === "jamon y queso") {
//                 alert("bien, ahora elegi cuantas queres")
//             }

//             else if (saborEmpandas === "verdura") {
//                 alert("bien, ahora elegi cuantas queres, cada uma sale 300pe")
//             }

                             
//             let cantidad = parseInt(prompt("porfavor elegi la cantidad de empanadas q vas a llevar "))
//             let total = cantidad * 300
//             alert("en 30min estan listas, el total es " + total)
//     }

// } 

// pedido();

// const personal = {
//     nombre: "mauro",
//     apellido: "molinaroli",
//     edad: 22,
//     calle: "ocampo",
// }

// personal.nombre = "tomas"

// function Empleado(nombre, apellido, cargo, ingreso) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.cargo = cargo
//     this.ingreso = ingreso
    
// }

// const empleado1 = new Empleado("nico", "moon", "it manager", 1995)
// const empleado2 = new Empleado("tomas", "molinaroli", "servicio tecnico", 1996)


// const IVA9 = 1.21
// function Producto(nombre, precio, stock) {
    //     this.nombre = nombre
    //     this.precio = precio
    //     this.stock = stock
    //     this.precioConIVA = function(){
        //         let precioFinal = this.precio * IVA
        //     }
// }

// const producto1 = new Producto("pc asus ryzen5", 150000, 10)
// const producto2 = new Producto("pc intel i5", 130000, 15)

// function Platos(nombre, precio, descripcion) {
//     this.nombre = nombre
//     this.precio = precio
//     this.ingredientes = descripcion
// }

// const plato1 = new Platos("rabas", 1500, "rabas fritas con limon")


const buy = []
const PRODUCTOS = []
const TOBUY = []
let rooms = 0
let ceramica = 0
let l = 0
let ancho = 0
let totalPrice = 0



class Product{
    constructor(order, brand, price){
        this.order = order
        this.brand = brand
        this.price = price
    }
}


PRODUCTOS.push(new Product("A", "Lourdes", 20))
PRODUCTOS.push(new Product("B", "San Lorenzo", 12))
PRODUCTOS.push(new Product("C", "Cortines", 9))
PRODUCTOS.push(new Product("D", "Cerro Negro", 27))
PRODUCTOS.push(new Product("E", "Cañuelas", 22))
PRODUCTOS.push(new Product("F", "Alberdi", 15))
console.table(PRODUCTOS)

class Carro{
    constructor(brand, width, height, totalMts, price){
        this.brand = brand
        this.width = width
        this.height = height
        this.totalMts = totalMts
        this.price = price
    }
}

let cotizar = confirm("está buscando poner pisos de ceramica?")
if (cotizar){
    windows = parseInt(prompt("por favor, ingrese la cantidad de habitaciones"))
    if(windows != NaN){
        for(let j = 0; j < windows; j++){
            carrito()      
        }
    }
}         

function carrito(){    
    let which = parseInt(prompt(`elija un producto:\n 1) ${PRODUCTOS[0].brand}\n 2) ${PRODUCTOS[1].brand}\n 3) ${PRODUCTOS[2].brand}\n 4) ${PRODUCTOS[3].brand}\n 5) ${PRODUCTOS[4].brand}\n 6) ${PRODUCTOS[5].brand}\n` ))
    l = which - 1
    let brand = PRODUCTOS[l].brand
    let width = parseInt(prompt("ingrese el ancho de la habitacion en m²"))
    let height = parseInt(prompt("ingrese el largo de la habitacion en m²"))
    let totalMts = width * height
    let precioTotal = PRODUCTOS[l].price * totalMts
       TOBUY.push(new Carro(brand, width, height, totalMts, precioTotal))
       console.table(TOBUY)
}

for(let t = 0;  t < TOBUY.length; t++){
    totalPrice = TOBUY[t].price + totalPrice
}
alert("deberas abonar $: " + totalPrice)













































