function navH5(){
    let header = document.getElementsByTagName("header")[0];
let navbar = document.createElement("nav");
navbar.classList.add("nav");
navbar.innerHTML = `
    <ul class= "barra">
        <div class="logo">
            <a href="../index.html"><img src='https://picsum.photos/300/200' alt="Logo"></a>
        </div>
        <li class="barraItems">
            <a href ="remeras.html" class="barraLinks">Remeras</a>
        </li>
        <li class="barraItems">
            <a href="remeras.html" class="barraLinks">Buzos</a>
        </li>
        <li class="barraItems">
            <a href="remeras.html" class="barraLinks">Camperas</a>
        </li>
        <li class="barraItems">
            <a href="remeras.html" class="barraLinks">Zapatillas</a>
        </li>
    </ul>
`;
header.appendChild(navbar)

let h5Titulo = document.createElement("h5");
h5Titulo.innerText = "Productos Destacados";
header.append(h5Titulo);
}
navH5()
let productos = [];
async function obtenerRemeras() {
    try {
        let response = await fetch('https://fakestoreapi.com/products/category/men\'s clothing');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener las remeras:', error);
    }
}

async function mostrarRemeras() {
    productos = await obtenerRemeras();
    let contenedor = document.querySelector('#productos');
    let productosHTML = '';

    for (const product of productos) {
        productosHTML += `
            <div class="seccion1" id=${product.id}>
                <div class="contenedorProducto">
                    <img src=${product.image} alt=${product.description}>
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <p>$${product.price}</p>
                    <button class="agregar-carrito" data-id=${product.id}>Agregar</button>
                </div>
            </div>
        `;
    }
    contenedor.innerHTML = productosHTML;

    document.querySelectorAll('.agregar-carrito').forEach(btn => {
        btn.addEventListener('click', () => {
            const productoID = btn.getAttribute('data-id');
            agregarAlCarrito(productoID);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarRemeras();
});

function agregarAlCarrito(productoID) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const products = productos.find(product => product.id == productoID);
    const productosEnCarrito = carrito.find(p => p.id == productoID);
    
    if (productosEnCarrito) {
        productosEnCarrito.cantidad += 1;
        productosEnCarrito.total = productosEnCarrito.cantidad * productosEnCarrito.price;
    } else {
        carrito.push({
            id: productoID,
            nombre: products.title,
            precio: products.price,
            cantidad: 1,
            total: products.price
        });
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();

    // Mostrar alerta con Toastify
    Toastify({
        text: `Producto agregado al carrito.`,
        duration: 3000, // Duración de la alerta en milisegundos
        close: true, // Mostrar botón de cierre
        gravity: "top", // Posición de la alerta: top o bottom
        position: "right", // Posición en la pantalla: left, center o right
        background: "#4CAF50", // Color de fondo
        stopOnFocus: true, // Detener la alerta cuando se hace clic en ella
    }).showToast();
}

function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let contenedorCarrito = document.querySelector('#contenedorCarrito');
    contenedorCarrito.innerHTML = "";

    // Agregar título al carrito
    let tituloCarrito = document.createElement('h2');
    tituloCarrito.textContent = 'Carrito de Compras';
    contenedorCarrito.appendChild(tituloCarrito);

    let carritoHTML = '';

    for (const p of carrito) {
        carritoHTML += `
            <div class="card-carrito" id=${p.id}>
                <h5>${p.nombre}</h5>
                <p>$${p.precio}</p>
                <p>Cantidad: ${p.cantidad}</p>
                <button class="eliminar-carrito" data-id=${p.id}>❌</button>
            </div>
        `;
    }

    // Mostrar las cards en el centro
    let divCards = document.createElement('div');
    divCards.classList.add('cards-center');
    divCards.innerHTML = carritoHTML;
    contenedorCarrito.appendChild(divCards);

    // Mostrar el total final
    let totalCarrito = document.createElement('div');
    let total = carrito.reduce((acc, item) => acc + item.total, 0);
    totalCarrito.innerHTML = `<p class="pTota">Total: $${total}</p>`;
    contenedorCarrito.appendChild(totalCarrito);

    // Botón de comprar
    let comprarBtn = document.createElement('button');
    comprarBtn.textContent = 'Comprar';
    comprarBtn.classList.add('btn-comprar');
    comprarBtn.addEventListener('click', () => {
        if(carrito.length > 0){
            Swal.fire('Compra realizada con éxito!');
            localStorage.removeItem('carrito');
            contenedorCarrito.innerHTML = '';
            contenedorCarrito.classList.remove("mostrar");
            }else{
            alert('no hay productos en carrito!');
            contenedorCarrito.classList.remove("mostrar");
            }
    });
    contenedorCarrito.appendChild(comprarBtn);

    // Agregar evento para eliminar productos del carrito
    document.querySelectorAll('.eliminar-carrito').forEach(btn => {
        btn.addEventListener('click', () => {
            let btnDelete = btn.getAttribute('data-id');
            eliminarDelCarrito(btnDelete);
        });
    });
}

function eliminarDelCarrito(deleteID) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productoEnCarrito = carrito.find(p => p.id == deleteID);

    if (productoEnCarrito.cantidad > 1) {
        productoEnCarrito.cantidad -= 1;
        productoEnCarrito.total = productoEnCarrito.cantidad * productoEnCarrito.price;
    } else {
        carrito = carrito.filter(p => p.id != deleteID);
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}
document.getElementById('carrito').addEventListener('click', () => {
    let contenedorCarrito = document.querySelector('#contenedorCarrito');
    contenedorCarrito.classList.toggle("mostrar");
    mostrarCarrito();
  });