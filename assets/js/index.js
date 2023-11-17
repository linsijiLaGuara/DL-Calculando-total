var precio = 400000;

var precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

// crear una variable precio total
// mostar precio total enn el html
// crear una funcion que me permita actualiza precio total tomando la catidad por el precio

var precioTotal = 0;
var valorTotal = document.querySelector(".valor-total");
valorTotal.innerHTML = precioTotal;

//debe multiploicar precio base por el valor total

var cantidadTotal = Number(document.querySelector(".cantidad").innerHTML);

function crearFactura() {
  console.log("valor factura " + cantidadTotal * precio);
  precioTotal = cantidadTotal * precio;
  valorTotal.innerHTML = precioTotal;
}

// se agrega suma y resta para aumentar o restar valor cantidad

function aunmentarCantidad() {
  aunmenta = cantidadTotal + 1;
  cantidadTotal = aunmenta;
  document.querySelector(".cantidad").innerHTML = cantidadTotal;
  crearFactura();
}

function restarCantidad() {
  //se agrega condicion para que el boton no reste cuando este en 0
  if (cantidadTotal != 0) {
    resta = cantidadTotal - 1;
    cantidadTotal = resta;
    document.querySelector(".cantidad").innerHTML = cantidadTotal;
    crearFactura();
  }
}
