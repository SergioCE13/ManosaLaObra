/* Traemos los componentes que vamos a utilizar para la verificación de los campos por medio de getElementById*/ 

// Campo de texto para el nombre:
const nameInput = document.getElementById('input-name');
// Campo de texto para el correo:
const emailInput = document.getElementById('input-email');
// Campo de texto para el teléfono:
const phoneInput = document.getElementById('input-phone');
//Campo de texto para escribir un mensaje:
const mensajeInput = document.getElementById('input-mensage');
// Botón para enviar el formulario:
const buttonSubmit = document.getElementById("button--submit");


// Deshabilitamos el botón del formularo ya que incialmente los campos están vacíos.
buttonSubmit.classList.add('button-disabled');
buttonSubmit.disabled = true;


/*Creamos las expresiones regulares para la verificación de las cadenas existentes en los difernetes campos de texto. */

/* Almacenamos la expresión regular para verificar los nombres en una constante:
    Esta expresión regular es valida cadenas de texto con espacios, que contienen letras a-z mayúsculas y minúsculas además de los caracteres tildados: áéíóúÁÉÍÓÚüÜñÑ
*/
const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;

/* Almacenamos la expresión regular para verificar los correos en una constante:
    Esta expresión regular valida direcciones de correo electrónico acorde a los estandares RFC 5321 y RFC 5322.
*/
const emailRegex = /^(?:(?:[^<>()[\]\\.,;:\s@\"]+(?:\.[^<>()[\]\\.,;:\s@\"]+)*)|(?:\".+\"))@(?:(?:\[(?:IPv6:(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))\])|(?:(?:[a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

/* Almacenamos la expresión regular para verificar los números de telefono:
    Esta expresión regular valida cadenas compuestas por 10 dígitos numéricos.
*/
const phoneRegex = /^\d{10}$/;


/* Creamos la funciones para verificar si las cadenas de texto de cada campo cumplen con su expresión regular correspondiente*/

// Función para verificar si todos los campos cumplen con las expresiones regulares:
function validarCampos() {
    // Obtenermos las cadenas de texto extistentes en los campos.
    const nombre = nameInput.value;
    const correo = emailInput.value;
    const telefono = phoneInput.value;
    const mensaje = mensajeInput.value;

    // Evaluamos las cadenas en la expresión Regex correspondiente
    const nombreValido = nameRegex.test(nombre);
    const correoValido = emailRegex.test(correo);
    const telefonoValido = phoneRegex.test(telefono);

    // Si todos los campos cumplen con las expresiones regulares, habilitamos el botón:
    if (nombreValido && correoValido && telefonoValido && mensaje !== ""){
        buttonSubmit.disabled = false;
        buttonSubmit.classList.remove('button-disabled');
    } else {
        buttonSubmit.disabled = true;
        buttonSubmit.classList.add('button-disabled');
    }
}

// Agregamos escucha de eventos a cada uno de los campos de entrada para llamar a la función validarCampos cuando se ingrese  o modifique texto:
nameInput.addEventListener('input', validarCampos);
emailInput.addEventListener('input', validarCampos);
phoneInput.addEventListener('input', validarCampos);


