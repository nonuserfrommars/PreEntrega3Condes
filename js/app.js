const contenidoShop = document.getElementById("contenidoShop");
const verCarrito = document.getElementById("verCarrito");
const modalContainer =document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito= document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((productos) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = ` 
  <img src="${productos.img}">
  <h3>${productos.nombre}</h3>
  <p class="precio">${productos.precio} $</p>
  `;

contenidoShop.append(content);

let comprar = document.createElement("button");
comprar.innerText= "comprar";
comprar.className= "comprar";

content.append(comprar);

comprar.addEventListener("click",() => {
  const repeat = carrito.some((repeatProductos) => repeatProductos.id === productos.id);  
    if(repeat === true){
      carrito.map((prod) => {
        if (prod.id === productos.id){
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
      id : productos.id,
      img : productos.img,
      nombre : productos.nombre,
      precio : productos.precio,
      cantidad : productos.cantidad,      
    });
    console.log(carrito);
    console.log(carrito.length);
    carritoCounter();
    saveLocal();
    }
  });
});


//set item
const saveLocal = () => {
  localStorage.setItem("carrito",JSON.stringify(carrito));
};
//get item
JSON.parse(localStorage.getItem("carrito"));