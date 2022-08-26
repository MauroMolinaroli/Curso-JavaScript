const IVA = 1.21
const productos = [];
const carrito = [];
class Productos {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
    precioFinal() {
        return parseFloat((this.importe * IVA).toFixed(2));
    }
}

function generadorAutomatico() {
    productos.push(new Productos(1234, "notebook exo e17", 29000));
    productos.push(new Productos(2345, "macbook air12", 29000));
    productos.push(new Productos(3456, "lenovo ipad12", 29000));
    productos.push(new Productos(4567, "ipad pro 12", 29000));
    productos.push(new Productos(5678, "lenovo gamer 15", 29000));
    productos.push(new Productos(6789, "macbook pro 15", 29000));
    productos.push(new Productos(8901, "asus gaming pro 16", 29000));
    productos.push(new Productos(9012, "ipad mini 79", 29000));
    productos.push(new Productos(9123, "asus pro gaming 34", 29000));
}

const containerDiv = document.querySelector(".container");
const carritoDiv = document.querySelector(".carrito");

function crearCards() {
    productos.forEach(prod => {
        containerDiv.innerHTML +=`<div>
        <h4>${prod.nombre}</h4>
        <p>$${prod.importe}</p>
        <button id= "btn-agregar${prod.id}">Agregar</button>
        </div>`;
    });
    agregarFuncionalidad()
}

function agregarFuncionalidad() {
    productos.forEach(prod => {
        document.querySelector(`#btn-agregar${prod.id}`)
        .addEventListener("click", ()=> {
            console.log(prod);
            agregarAlCarrito(prod)
        });
    });
}

function agregarAlCarrito(prod) {
    let existe = carrito.some((productoSome) => productoSome.id === prod.id);
    if (existe === false) {
        prod.cantidad = 1;
        carrito.push(prod);
    } else {
        let prodFind = carrito.find((productoFind) => productoFind.id === prod.id);
        prodFind.cantidad++;
    }
    console.log(carrito);
    renderizarCarrito();
}

function renderizarCarrito() {
    carritoDiv.innerHTML = "";
    carrito.forEach((prod) => {
        carritoDiv.innerHTML += `<div>
        <h4>${prod.nombre}</h4>
        <p>$${prod.importe}</p>
        <button class="btnCarrito" id= "btn-borrar${prod.id}">borrar</button>
        </div>`;
    })
    borrarProducto();
}

function borrarProducto() {
    carrito.forEach(prod => {
        document.querySelector(`#btn-borrar${prod.id}`)
        .addEventListener("click", ()=> {
            console.log("click");   
        });
    });
}

generadorAutomatico();
crearCards();

