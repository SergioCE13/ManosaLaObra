function agregarLista() {
  var input = document.getElementById("product-input");
  var lista = input.value.trim();

  if (lista !== "") {
    var select = document.getElementById("product-list");
    var option = document.createElement("option");
    option.text = lista;
    option.value = lista;
    select.add(option);

    // Limpiar el campo de entrada después de agregar el producto
    input.value = "";
  }
}
function agregarProducto() {
var input = document.getElementById("product-input");
var producto = input.value.trim();

if (producto !== "") {
  var select = document.getElementById("product-list");
  var option = document.createElement("option");
  option.text = producto;
  option.value = producto;
  select.add(option);

  // Limpiar el campo de entrada después de agregar el producto
  input.value = "";
}
}

function seleccionarProducto(nombreProducto) {
  var listaSeleccionados = document.getElementById("selected-products");

  // Verificar si el producto ya ha sido seleccionado
  var productosSeleccionados = listaSeleccionados.getElementsByTagName("li");
  for (var i = 0; i < productosSeleccionados.length; i++) {
    if (productosSeleccionados[i].textContent === nombreProducto) {
      alert("¡Este producto ya ha sido seleccionado!");
      return; // Salir de la función si el producto ya está en la lista
    }
  }

  // Si el producto no ha sido seleccionado previamente, agregarlo a la lista
  var nuevoProducto = document.createElement("li");
  nuevoProducto.textContent = nombreProducto;
  listaSeleccionados.appendChild(nuevoProducto);
}


// Crear ventana emergente


function abrirVentana() {
  // Abrir una nueva ventana
  var nuevaVentana = window.open("", "button", "width=300,height=200");

  // Escribir contenido en la nueva ventana
  nuevaVentana.document.write("<!DOCTYPE html><html lang='es'><head><meta charset='UTF-8'><title>Ventana Emergente</title></head><body><div class='ventana'><h1>Contenido de la ventana emergente</h1><button onclick='cerrarVentana()'>Cerrar Ventana</button></div></body></html>");

  // Estilo de la nueva ventana
  nuevaVentana.document.querySelector('body').style.margin = '0';
  nuevaVentana.document.querySelector('.button').style.margin = '20px';
}

function cerrarVentana() {
  // Cerrar la ventana
  window.close();
}