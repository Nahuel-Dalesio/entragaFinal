function crearUsuarios(){
    //Todo este codigo es para el boton CREAR USUARIO
//Crear un arreglo para almacenar usuarios
// Variable para boton Crear usuario
let crearUsuario = document.querySelector("#crearUsuario");
//Evento click del boton Crear Usuario + funcion
crearUsuario.addEventListener("click", () => {
   let div1 = document.createElement("div");
// Div Contendor del modal
   div1.innerHTML = `
   <div id="crearUsuarioModal" class="modal">
       <div class="modal-content">
           <span class="close">&times;</span>
           <h2>Crear Usuario</h2>
           <form id="crearUsuarioForm">
               <label for="nombreInput">Nombre:</label><br>
               <input type="text" id="nombreInput" name="nombre"><br><br>
               
               <label for="passwordInput">Contraseña:</label><br>
               <input type="password" id="passwordInput" name="password"><br><br>

               <button type="button" id="btnCrear">Crear</button>
           </form>
       </div>
   </div>
   `

   document.body.appendChild(div1);

   document.getElementById('nombreInput').focus();

   let closeBtn = document.querySelector(".close");
   closeBtn.addEventListener("click", function() {
       div1.remove();
   });
   let crearBtn = document.getElementById('btnCrear');
   crearBtn.addEventListener("click", function() {
       // Aquí puedes agregar la lógica para guardar el usuario
       // Por ejemplo:
       let nombre = document.getElementById('nombreInput').value;
       let password = document.getElementById('passwordInput').value;
       let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
       usuarios.push({nombre, password});
       localStorage.setItem("usuarios",JSON.stringify(usuarios))
       div1.remove();
       });
   });
}
function iniciarSesion(){
    //Todo este codigo Va a ser para INICIAR SESION con el usuario creado
//Variable almacenar el nombre y el pasword
// Recuperar datos de localStorage

let iniciarSesion = document.querySelector("#inicioSesion");
 //Evento click del boton Crear Usuario + funcion
iniciarSesion.addEventListener("click", () => {
    let div2 = document.createElement("div");
// Div Contendor del modal
    div2.innerHTML = `
    <div id="iniciarSesionModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Inicia Sesión</h2>
            <form id="iniciarSesionForm">
                <label for="nombreInputInicio">Nombre:</label><br>
                <input type="text" id="nombreInputInicio" name="nombre"><br><br>
                
                <label for="passwordInputInicio">Contraseña:</label><br>
                <input type="password" id="passwordInputInicio" name="password"><br><br>

                <button type="button" id="btnIniciar">Iniciar Sesion</button>
            </form>
        </div>
    </div>
    `

    document.body.appendChild(div2);

    document.getElementById('nombreInputInicio').focus();

    let closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", function() {
        div2.remove();
    });
    let IniciarBtn = document.getElementById('btnIniciar');
    IniciarBtn.addEventListener("click", function() {
        // Aquí puedes agregar la lógica para guardar el usuario
        // Por ejemplo:
        let nombre = document.getElementById('nombreInputInicio').value;
        let password = document.getElementById('passwordInputInicio').value;
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        let usuarioEncontrado = usuarios.find(user => user.nombre === nombre && user.password === password);
        if (usuarioEncontrado) {
            alert("Inicio de sesión exitoso");
            div2.remove();
        } else {
            alert("Nombre de usuario o contraseña incorrectos");
            document.getElementById('nombreInputInicio').value = "";
            document.getElementById('passwordInputInicio').value = "";
            document.getElementById('nombreInputInicio').focus();
        }
        });
    });
}
function navH5(){
    let header = document.getElementsByTagName("header")[0];
let navbar = document.createElement("nav");
navbar.classList.add("nav");
navbar.innerHTML = `
    <ul class= "barra">
        <div class="logo">
            <a href="./index.html"><img src='https://picsum.photos/300/200' alt="Logo"></a>
        </div>
        <li class="barraItems">
            <a href ="../pages.html/remeras.html" class="barraLinks">Remeras</a>
        </li>
        <li class="barraItems">
            <a href="../pages.html/remeras.html" class="barraLinks">Buzos</a>
        </li>
        <li class="barraItems">
            <a href="../pages.html/remeras.html" class="barraLinks">Camperas</a>
        </li>
        <li class="barraItems">
            <a href="../pages.html/remeras.html" class="barraLinks">Zapatillas</a>
        </li>
    </ul>
`;
header.appendChild(navbar)

let h5Titulo = document.createElement("h5");
h5Titulo.innerText = "Productos Destacados";
header.append(h5Titulo);
}
crearUsuarios()
iniciarSesion()
navH5()

//Ubicado en Header ⬆⬆⬆
let productos = [
  {
    art: "1",
    nombre:"Remera OverZide",
    descripcion: "Algodon, Holgadas",
    precio: 1500,
    imagen: 'https://picsum.photos/200/300'
  },
  {
    art: "2",
    nombre:"Pantalon Sett",
    descripcion: "Tela sett, Chupin",
    precio: 6250,
    imagen: 'https://picsum.photos/200/300'
  },
  {
    art: "3",
    nombre:"Buzo Cuello redondo",
    descripcion: "Algodon doble frisa, Talles reales",
    precio: 18000,
    imagen: 'https://picsum.photos/200/300'
  },
  {
    art: "4",
     nombre:"Zapatillas Nacionales",
    descripcion: "Cuero ecologico, Horma chica",
    precio: 2500,
    imagen: 'https://picsum.photos/200/300'
  },
  {
    art: "5",
    nombre:"Remera OverZide",
    descripcion: "Algodon, Holgadas",
    precio: 1500,
    imagen: 'https://picsum.photos/200/300'

  },
  {
    art: "6",
    nombre:"Pantalon Sett",
    descripcion: "Tela sett, Chupin",
    precio: 6250,
    imagen: 'https://picsum.photos/200/300'
  },
  {
    art: "7",
    nombre:"Buzo Cuello redondo",
    descripcion: "Algodon doble frisa, Talles reales",
    precio: 18000,
    imagen: 'https://picsum.photos/200/300'
  },
  {
    art: "8",
    nombre:"Zapatillas Nacionales",
    descripcion: "Cuero ecologico, Horma chica",
    precio: 2500,
    imagen: 'https://picsum.photos/200/300'
  },
];
//Ubicados en Main
function mostrarProductos() {
    let contenedor = document.querySelector('#productos');
    let productosHTML = '';
  
    for (const product of productos) {
      productosHTML += `
        <div class="seccion1" id=${product.art}>
          <div class="contenedorProducto">
            <img src=${product.imagen} alt=${product.descripcion}>
            <h3>${product.nombre}</h3>
            <p>${product.descripcion}</p>
            <p>$${product.precio}</p>
            <button class="agregar-carrito" data-id=${product.art}>Agregar</button>
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
mostrarProductos()

function agregarAlCarrito(productoArt) {

  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const products = productos.find(product => product.art === productoArt);
  const productosEnCarrito = carrito.find(p => p.art === productoArt);
  
  if (productosEnCarrito) {
    productosEnCarrito.cantidad += 1;
    productosEnCarrito.total = productosEnCarrito.cantidad * productosEnCarrito.precio;
    }else{
      carrito.push({
        art: productoArt,
        nombre: products.nombre,
        precio: products.precio,
        cantidad: 1,
        total: products.precio
    });
  }
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito()
  Toastify({
    text: `Producto "${products.nombre}" agregado al carrito.`,
    duration: 1000, // Duración de la alerta en milisegundos
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

    let tituloCarrito = document.createElement('h2');
    tituloCarrito.textContent = 'Carrito de Compras';
    contenedorCarrito.appendChild(tituloCarrito);

    let carritoHTML = '';
    for (const p of carrito) {
      carritoHTML += `
        <div class="card-carrito" id=${p.art}>
          <h5>${p.nombre}</h5>
          <p>$${p.precio}</p>
          <p>Cantidad: ${p.cantidad}</p>
          <button class="eliminar-carrito" data-id=${p.art}>❌</button>
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
      if(carrito.length > 0) {
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

    document.querySelectorAll('.eliminar-carrito').forEach(btn => {
      btn.addEventListener('click', () => {
        let btnDelete = btn.getAttribute('data-id');
        eliminarDelCarrito(btnDelete);

      });
    });
  }
function eliminarDelCarrito(deleteArt) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const productoEnCarrito = carrito.find(p => p.art === deleteArt);

  if (productoEnCarrito.cantidad > 1) {
    productoEnCarrito.cantidad -= 1;
    productoEnCarrito.total = productoEnCarrito.cantidad * productoEnCarrito.precio;
} else {
    carrito = carrito.filter(p => p.art !== deleteArt);
}
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
}

// Asigna el evento del botón del carrito solo una vez
document.getElementById('carrito').addEventListener('click', () => {
  let contenedorCarrito = document.querySelector('#contenedorCarrito');
  contenedorCarrito.classList.toggle("mostrar");
  mostrarCarrito();
});