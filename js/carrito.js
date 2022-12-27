
const pintarCarrito = () => {
const modalHeader= document.createElement("div");
  modalContainer.innerHTML="";
  modalContainer.style.display ="flex";
  modalHeader.className = "modal-header"
  modalHeader.innerHTML = ` <h1 class="modal-header-title">Carrito.</h1> `;
  modalContainer.append(modalHeader);

  const modalButton = document.createElement("h1");
  modalButton.innerText = "x";
  modalButton.className = "modal-header-button";

  modalButton.addEventListener("click", () =>{
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalButton);

carrito.forEach((productos)=>{
  let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `<img src="${productos.img}">
    <h3>${productos.nombre}</h3>
    <p>${productos.precio} $</p>
    <span class="restar"> - </span>
    <p>Cantidad: ${productos.cantidad}</p>
    <span class="sumar"> + </span>
    <p> Total : ${productos.cantidad * productos.precio}</p>
  `;
  modalContainer.append(carritoContent);

  let restar = carritoContent.querySelector(".restar")


  restar.addEventListener("click", () => {
    if (productos.cantidad!== 1){
      productos.cantidad --;
    }
    saveLocal();
    pintarCarrito();
  });

  let sumar = carritoContent.querySelector(".sumar")

  sumar.addEventListener("click",() => {
    productos.cantidad ++;
    saveLocal();
    pintarCarrito();
  });
  let eliminar = document.createElement("span");
  eliminar.innerText = "❌";
  eliminar.className = "delete-product";
  carritoContent.append(eliminar);

  eliminar.addEventListener("click", eliminarProducto);
  });

const total =  carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

const totalCompra = document.createElement("div")
totalCompra.className = "total-content"
totalCompra.innerHTML = ` total a pagar : ${total} $`;
modalContainer.append(totalCompra);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
  const foundId = carrito.find((element)=> element.id);
  
  carrito = carrito.filter((carritoId) => {
  return carritoId !== foundId;
});
carritoCounter();
saveLocal();
pintarCarrito();
};

const carritoCounter = () => {
  cantidadCarrito.style.display= "block";
  cantidadCarrito.innerText = carrito.lenght;

  const carritoLenght = carrito.lenght;

  localStorage.setItem("carritoLenght", JSON.stringify());

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLenght"));
};
carritoCounter();
