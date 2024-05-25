//---------------------------------------- Componentes del formulario: --------------------------------------------------------------

//Sección de datos personales.
const inputNombreVend = document.getElementById("input-nombre-vendedor").value;
const inputApellidoPat = document.getElementById("input-apellido-paterno").value;
const inputApellidoMat = document.getElementById("input-apellido-materno").value;
const inputTelefono = document.getElementById("input-telefono");

//Sección de datos de la cuenta.
const inputEmail = document.getElementById("input-email").value;
const inputPassword = document.getElementById("input-password").value;
const inputConfirmarPassword = document.getElementById("input-confirmar-password").value;

//Sección de datos de la dirección.
const inputCalle = document.getElementById("input-calle").value;
const inputNumeroInt = document.getElementById("input-numero-interior").value;
const inputNumeroExt = document.getElementById("input-numero-ext").value;
const inputColonia = document.getElementById("input-colonia").value;
const inputCodigoPostal = document.getElementById("input-codigo-postal").value;
const inputDelegaMuni = document.getElementById("input-delegacion-municipio").value;

//Botón para enviar el formulario.
const buttonSubmit = document.getElementById("button-submit");

//------------------------------------------- Deshabilitar el botón del formulario cuando termina de cargar el DOM ---------------------------------
document.addEventListener("DOMContentLoaded", function () {
  // Deshabilitamos el botón del formularo ya que incialmente los campos están vacíos.
    buttonSubmit.classList.add("button-disabled");
    buttonSubmit.disabled = true;
});

//-------------------------------------------- Declaración de las expresiones regulares ----------------------------------------------------------
const regexNombreApellidos = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
const regexTelefono = /^\d{10}$/;
const regexCorreo = /^(?:(?:[^<>()[\]\\.,;:\s@\"]+(?:\.[^<>()[\]\\.,;:\s@\"]+)*)|(?:\".+\"))@(?:(?:\[(?:IPv6:(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))\])|(?:(?:[a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
const regexPassword = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&.,\-_:])[A-Za-z\d@$!%?&.,\-_:]{8,}$/;

//-------------------------------------------- Funcion para validar los campos del formulario -----------------------------------------------------
function validarCamposs(){
    const validaNombre = inputNombreVend.test(regexNombreApellidos);
    const validaApePat = inputApellidoPat.test(regexNombreApellidos);
    const validaApeMat = inputApellidoMat.test(regexNombreApellidos);
}


