
const pintarCarrito = () => {
  modalContainer.innerHTML="";
  modalContainer.style.display ="flex";
  const modalHeader= document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = ` <h1 class="modal-header-title">Carrito.</h1> `;
  modalContainer.append(modalHeader);

  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";

  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalbutton);

  carrito.forEach((productos) => {
    let cantidadCarrito = document.createElement("div");
      cantidadCarrito.className = "modal-content";
      cantidadCarrito.innerHTML = `<img src="${productos.img}">
      <h3>${productos.nombre}</h3>
      <p>${productos.precio} $</p>
      <span class= "restar"> - </span>
      <p>Cantidad: ${productos.cantidad}</p>
      <span class = "sumar" > + </span>
      <p> Total : ${productos.cantidad * productos.precio}</p>
      <span class = "delete-product" > ❌ </span>
    `;
  modalContainer.append(cantidadCarrito);

    let restar = cantidadCarrito.querySelector(".restar");

    restar.addEventListener("click", () => {
      if (productos.cantidad !== 1){
        productos.cantidad --;
      }
    saveLocal();
    pintarCarrito();
  });

    let sumar = cantidadCarrito.querySelector(".sumar");
      sumar.addEventListener("click", () => {
      productos.cantidad ++;
      saveLocal();
      pintarCarrito();
  }); 

let eliminar = cantidadCarrito.querySelector(".delete-product");
eliminar.addEventListener("click", () => {
  eliminarProducto(productos.id);
  saveLocal();
  pintarCarrito();
});

  //let eliminar = document.createElement("span");
  //eliminar.innerText = "❌";
  //eliminar.className = "delete-product";
  //carritoContent.append(eliminar); 
  //eliminar.addEventListener("click", eliminarProducto);
  });

const total =  carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

const totalCompra = document.createElement("div");
totalCompra.className = "total-content";
totalCompra.innerHTML = ` Total a pagar : ${total} $`;
modalContainer.append(totalCompra);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (id) => {
  const foundId = carrito.find((element) => element.id === id );
  
  carrito = carrito.filter((carritoId) => {
  return carritoId !== foundId;
  });
  pintarCarrito();
  carritoCounter();
  saveLocal();
};

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";
  cantidadCarrito.innerText = carrito.carritoLength;

const carritoLength = carrito.length;

localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};
carritoCounter();
