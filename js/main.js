

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

                             
            // let cantidad = parseInt(prompt("porfavor elegi la cantidad de empanadas q vas a llevar "))
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
// const IVA = 1.21
// class Producto {
//     constructor(nombre, precio, stock) {
//         this.nombre = nombre
//         this.precio = precio
//         this.stock = stock
//         this.precioConIVA = function () {
//             let precioFinal = this.precio * IVA
//             return "$" + precioFinal
//         }
//         this.restarStock = function (unidades) {
//             this.stock = this.stock - unidades 
//         }
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


// producto1.restarStock(3)

// class Producto{
//     constructor(nombre,precio){
//         this.nombre = nombre
//         this.precio = precio
//     }
// }

// let gaseosa = new Producto("gaseosa",500)
// let alfajor = new Producto("alfajor",600)
// let doritos = new Producto("doritos",1000)

// function ingresarNombre() {

//     alert("bienvenido al kiosko 24h");
//     let nombre = prompt("ingrese su nombre");
//     while(nombre === "" || nombre === null) {
//         nombre = prompt("porfavor, ingrese un nombre");
//     }
// }

// function mostrarProductos() {
//     let producto;
//     do {
//         producto = parseInt(prompt("¿que llevara hoy? \n1) Gaseosa \n2) Alfajor \n3) Doritos"));
//     }   while (producto != 1 && producto != 2 && producto != 3);

//     switch(producto) {
//         case 1: 
//             return gaseosa
//         case 2:
//             return alfajor
//         case 3:
//             return doritos
      
//     }
// }

// function cobrar(producto) {
//     alert("usted lleva el siguiente producto: " + producto.nombre + "\nPrecio $" + producto.precio);
//     let abonar = parseInt(prompt("con cuanto paga?"));
//     if(abonar > producto.precio) {
//         alert("su vuelto es $" + (abonar - producto.precio));
//     } else if(abonar === producto.precio) {
//         alert("gracias por su compra");
//     } else {
//         alert("no llegas con la plata tomatela");
//     }
        
    
// }


// ingresarNombre();
// let productoSeleccionado = mostrarProductos();
// cobrar(productoSeleccionado);


// const IVA = 1.21
// const paises = ["argentina", "brasil", "chile", "venezuela", "uruguay", "bolivia"];


// function listarPaises() {
//     for (let i = 0; i < paises.length; i++) {
//         console.log(paises[i])
//     }
// }
// paises.push("costa rica");
// paises.unshift("USA");
// paises.pop();
// let paisQuitado = paises.pop()

// function agregarPais() {
//     let nuevoPais = prompt("agregue un nuevo pais");
//         paises.push(nuevoPais)
// }

// function quitarPais() {
//     let aQuitar = prompt("ingrese el pais a quitar");
//     let indice = paises.indexOf(aQuitar);
//     let resultado = paises.splice(indice, 1);
//     console.log("se ha eliminado el pais ", resultado);      
// }


// // agregarPais();
// // quitarPais();

// const IVA = 1.21
// const productos = [];
// const carrito = [];
// class Productos {
//     constructor(id, nombre, importe) {
//         this.id = id
//         this.nombre = nombre
//         this.importe = importe
//     }
//     precioFinal() {
//         return parseFloat((this.importe * IVA).toFixed(2));
//     }
// }

// // function creoID() { return parseInt(Math.random() * 100000) }

// // function agregarProductos() {
// //     let id = creoID();
// //     let descripcion = prompt("ingresa el nombre del producto");
// //     let importe = parseInt(prompt("ingresa el importe"));

// //     productos.push(new Productos(id, descripcion, importe));
// //     console.table(productos);
// // }

// function generadorAutomatico() {
//     productos.push(new Productos(1234, "notebook exo e17", 29000));
//     productos.push(new Productos(2345, "macbook air12", 29000));
//     productos.push(new Productos(3456, "lenovo ipad12", 29000));
//     productos.push(new Productos(4567, "ipad pro 12", 29000));
//     productos.push(new Productos(5678, "lenovo gamer 15", 29000));
//     productos.push(new Productos(6789, "macbook pro 15", 29000));
//     productos.push(new Productos(8901, "asus gaming pro 16", 29000));
//     productos.push(new Productos(9012, "ipad mini 79", 29000));
//     productos.push(new Productos(9123, "asus pro gaming 34", 29000));
// }

// function recorrerElementos() {
//     for(let producto of productos) {
//         console.table(producto);
//     } 
// }

// function buscarProducto() {
//     let prod = prompt("eliga el producto a buscar");
//         const resultado = productos.filter(elemento => {
//             return elemento.nombre === prod     
//         })
//         console.table(resultado)
// }




// // agregarProductos();
// generadorAutomatico();
// recorrerElementos();
// buscarProducto();
// filtrarProducto();






// const IVA = 1.21
// const productos = [];
// const carrito = [];

// class Productos {
//     constructor(id, name, price) {
//         this.id = id
//         this.name = name
//         this.price = price
//     }       
// }

// function generadorAutomatico() {
//     productos.push(new Productos(1234, "notebook exo e17", 29000));
//     productos.push(new Productos(2345, "macbook air12", 29000));
//     productos.push(new Productos(3456, "macbook lenovo ipad12", 29000));
//     productos.push(new Productos(4567, "ipad pro 12", 29000));
//     productos.push(new Productos(5678, "notebook lenovo gamer 15", 29000));
//     productos.push(new Productos(6789, "macbook pro 15", 29000));
//     productos.push(new Productos(8901, "notebook asus gaming pro 16", 29000));
//     productos.push(new Productos(9012, "ipad mini 79", 29000));
//     productos.push(new Productos(9123, "asus pro gaming 34", 29000));
// }

// function filtrarProductos() {
//     let prod = prompt("bienvenido a xdComputacion ¿que esta buscando?");
//     const resultado = productos.filter (producto => {
//         return producto.name.includes(prod);
//     } )
//     console.table(resultado);
// }

// function elegirProductos() {
//     let seguir
//     do {
//         let prod = prompt("bien, ahora elija el producto a llevar");
//         const resultado = productos.find (producto => {
//             return producto.name === prod
//         });
//         carrito.push(resultado);
//         seguir = confirm("desea seguir comprando?");
//     } 
//     while(seguir === true); 
// }

// function cobrar() {
//     const total = carrito.map(procucto => procucto.price).reduce((prev, curr) => prev + curr, 0);
//     alert("el precio total a pagar es $" + total * IVA);
// }



// generadorAutomatico();
// filtrarProductos();
// elegirProductos();
// cobrar();






















































