const productos= [
  {nombre: "harina", precio: 150},
  {nombre: "leche", precio: 140},
  {nombre: "azucar", precio: 160},
  {nombre: "manteca", precio: 400},
  {nombre: "aceite", precio: 180},
  {nombre: "levadura", precio: 100},
  {nombre: "sal", precio: 100},
  {nombre: "chocolate", precio: 500},
  {nombre: "dulce de leche", precio: 300},
  {nombre: "vainilla", precio: 150},
  {nombre: "huevos", precio: 380},
];
let carrito = []

let seleccion = prompt("Hola! Bienvenido a Market Shop. ¿Quiere comprar algun producto?")
while(seleccion != "si" && seleccion !="no"){
  alert("por favor ingresar si o no")
  seleccion = prompt("¿Quiere comprar algun producto? si o no")
}

if(seleccion == "si"){
  alert("A continuacion esta la lista de productos")
  let todoslosProductos = productos.map((producto) => producto.nombre + "" + producto.precio + "$");
  alert(todoslosProductos.join("-"));
}else if (seleccion == "no"){
alert("Gracias por visitar, hasta luego!")
}

while(seleccion != "no"){
  let producto = prompt("Agrega un producto al carrito")
  let precio = 0 

  if(producto == "harina" || producto == "leche" || producto == "azucar" || producto == "manteca"
  || producto == "aceite" || producto == "levadura" || producto == "sal" || producto == "chocolate"
  || producto == "dulce de leche" || producto == "vainilla" || producto == "huevos"){
    switch(producto){
      case "harina":
        precio = 150
        break;
      case "leche":
        precio = 140
        break;
      case "azucar":
        precio = 160
        break;
      case "manteca":
        precio = 400
        break;
      case "aceite":
        precio = 180
        break;
      case "levadura":
        precio = 100
        break;
      case "sal":
        precio = 100
        break;
      case "chocolate":
        precio = 500
        break;
      case "dulce de leche":
        precio = 300
        break;
      case "vainilla":
        precio = 150
        break;
      case "huevos":
        precio = 380
        break;
        default:
          break;
    }
  let unidades = parseInt(prompt("¿Cuantas unidades quiere comprar?"))

  carrito.push({producto, unidades, precio})
  } else{
    alert("No tenemos ese producto")
  }
  seleccion = prompt("¿Desea seguir comprando?")
  while(seleccion === "no"){
    alert("Gracias por la compra, a continuacion el total a pagar")
  carrito.forEach((carritoFinal) => {
  console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
  total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
  })
  break;
}
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar es: ${total}`);
alert(`El total a pagar es: $${total} ¡Gracias y hasta luego!`);
