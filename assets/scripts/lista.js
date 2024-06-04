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
