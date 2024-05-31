//---------------------------------------- Componentes del formulario: --------------------------------------------------------------

// Sección de datos personales.
const inputNombreVend = document.getElementById("input-nombre-vendedor");
const inputApellidoPat = document.getElementById("input-apellido-paterno");
const inputApellidoMat = document.getElementById("input-apellido-materno");
const inputTelefono = document.getElementById("input-telefono");

// Sección de datos de la cuenta.
const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");
const inputConfirmarPassword = document.getElementById("input-confirmar-password");


// Checkbox de términos y condiciones
const checkboxTerminos = document.getElementById("exampleCheck1");

// Botón para enviar el formulario.
const buttonSubmit = document.getElementById("button-submit");

// Variable para el botón:
let validados = false;

//------------------------------------------- Deshabilitar el botón del formulario cuando termina de cargar el DOM ---------------------------------
document.addEventListener("DOMContentLoaded", function () {
  // Deshabilitamos el botón del formulario ya que inicialmente los campos están vacíos.
  buttonSubmit.classList.add("button-disabled");
  buttonSubmit.disabled = true;
  // Ocultar ambas alertas al principio
  document.getElementById("alerta-success").style.display = "none";
  document.getElementById("alerta-danger").style.display = "none";
});

//-------------------------------------------- Declaración de las expresiones regulares ----------------------------------------------------------
const regexNombreApellidos = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
const regexTelefono = /^\d{10}$/;
const regexCorreo = /^(?:(?:[^<>()[\]\\.,;:\s@\"]+(?:\.[^<>()[\]\\.,;:\s@\"]+)*)|(?:\".+\"))@(?:(?:\[(?:IPv6:(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))\])|(?:(?:[a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,\-_:])[A-Za-z\d@$!%*?&.,\-_:]{8,}$/;
const regexNums = /^\d+$/;

//-------------------------------------------- Función para validar los campos del formulario -----------------------------------------------------
function validarCampos() {
  // Obtención de los valores actuales de los inputs
  const valorNombreVend = inputNombreVend.value;
  const valorApellidoPat = inputApellidoPat.value;
  const valorApellidoMat = inputApellidoMat.value;
  const valorTelefono = inputTelefono.value;
  const valorEmail = inputEmail.value;
  const valorPassword = inputPassword.value;
  const valorConfirmarPassword = inputConfirmarPassword.value;

  // Verificación de los campos info-personal con regex
  const validaNombre = regexNombreApellidos.test(valorNombreVend);
  const validaApePat = regexNombreApellidos.test(valorApellidoPat);
  const validaApeMat = regexNombreApellidos.test(valorApellidoMat);
  const validaTelefono = regexTelefono.test(valorTelefono);
  
  // Verificación de los campos info-cuenta con regex
  const validaEmail = regexCorreo.test(valorEmail);
  const validaPassword = regexPassword.test(valorPassword);

  
  // Verificación del checkbox
  const validaCheckbox = checkboxTerminos.checked;

  if (valorPassword === valorConfirmarPassword) {
    if (validaNombre && validaApePat && validaApeMat && validaTelefono && validaEmail && validaPassword && validaCheckbox) {
      buttonSubmit.classList.remove("button-disabled");
      buttonSubmit.disabled = false;
      validados = true;
    } else {
      buttonSubmit.classList.add("button-disabled");
      buttonSubmit.disabled = true;
    }
  } else {
    buttonSubmit.classList.add("button-disabled");
    buttonSubmit.disabled = true;
  }
}

//---------------------------------------- Escuchas de eventos ---------------------------------------------------------------------
inputNombreVend.addEventListener("input", validarCampos);
inputApellidoPat.addEventListener("input", validarCampos);
inputApellidoMat.addEventListener("input", validarCampos);
inputTelefono.addEventListener("input", validarCampos);

inputEmail.addEventListener("input", validarCampos);
inputPassword.addEventListener("input", validarCampos);
inputConfirmarPassword.addEventListener("input", validarCampos);



// Escucha de evento para el checkbox
checkboxTerminos.addEventListener("change", validarCampos);

// Evento para el botón:
buttonSubmit.addEventListener("click", function () {
  if (validados) {
    document.getElementById("alerta-success").style.display = "block";
    document.getElementById("alerta-danger").style.display = "none";
    window.location.href = '../html/login-vendedor.html';
  } else {
    document.getElementById("alerta-danger").style.display = "block";
    document.getElementById("alerta-success").style.display = "none";
  }
});


