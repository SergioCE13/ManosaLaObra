function agregarElemento() {
  // Obtener el valor del input
  let nuevoTextoBoton = document.getElementById("nuevoElemento").value;
  
  // Crear un nuevo botón
  let boton = document.createElement("button");
  
  // Agregar el texto ingresado al nuevo botón
  boton.appendChild(document.createTextNode(nuevoTextoBoton));
  
  // Agregar el botón al contenedor de botones en el HTML
  document.getElementById("contenedorBotones").appendChild(boton);
  
  // Asociar un evento al botón para mostrar contenido específico
  boton.addEventListener("click", function() {
      let contenido = "";
      if (nuevoTextoBoton === "Botón 1") {
          contenido = "¡Este es el contenido del Botón 1!";
      } else if (nuevoTextoBoton === "Botón 2") {
          contenido = "El Botón 2 muestra este contenido.";
      } else {
          contenido = "No hay contenido específico para este botón.";
      }
      document.getElementById("contenido").innerText = contenido;
  });
  
  // Limpiar el input después de agregar el botón al contenedor
  document.getElementById("nuevoElemento").value = "";
}
 