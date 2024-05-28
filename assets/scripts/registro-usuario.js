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

// Sección de datos de la dirección.
const inputCalle = document.getElementById("input-calle");
const inputNumeroInt = document.getElementById("input-numero-interior");
const inputNumeroExt = document.getElementById("input-numero-exterior");
const inputColonia = document.getElementById("input-colonia");
const inputCodigoPostal = document.getElementById("input-codigo-postal");
const inputDelegaMuni = document.getElementById("input-delegacion");

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
const regexCP = /^\d{5}$/;
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
  const valorCP = inputCodigoPostal.value;

  // Verificación de los campos info-personal con regex
  const validaNombre = regexNombreApellidos.test(valorNombreVend);
  const validaApePat = regexNombreApellidos.test(valorApellidoPat);
  const validaApeMat = regexNombreApellidos.test(valorApellidoMat);
  const validaTelefono = regexTelefono.test(valorTelefono);
  
  // Verificación de los campos info-cuenta con regex
  const validaEmail = regexCorreo.test(valorEmail);
  const validaPassword = regexPassword.test(valorPassword);

  // Verificación de los campos direccion con regex
  const validaCP = regexCP.test(valorCP);
  
  // Verificación del checkbox
  const validaCheckbox = checkboxTerminos.checked;

  if (valorPassword === valorConfirmarPassword) {
    if (validaNombre && validaApePat && validaApeMat && validaTelefono && validaEmail && validaPassword && validaCP && validaCheckbox) {
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

inputCodigoPostal.addEventListener("input", function(){
  validarCampos();
  console.log("Llamada a validar campos hecha.")
  if(inputCodigoPostal.value.length == 5) {
    fetchPostalCodeInfo();
    console.log("Llamada a fetchPostalCodeInfo hecha");
  }
});

// Escucha de evento para el checkbox
checkboxTerminos.addEventListener("change", validarCampos);

// Evento para el botón:
buttonSubmit.addEventListener("click", function () {
  if (validados) {
    document.getElementById("alerta-success").style.display = "block";
    document.getElementById("alerta-danger").style.display = "none";
  } else {
    document.getElementById("alerta-danger").style.display = "block";
    document.getElementById("alerta-success").style.display = "none";
  }
});


// --------------------------------------------------------------- Solicitudes a la API -------------------------------------------------
async function fetchPostalCodeInfo() {
  const postalCode = document.getElementById('input-codigo-postal').value;
  const apiUrl = `https://api.copomex.com/query/info_cp/${postalCode}?type=simplified&token=pruebas`;

  try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data['response']);

      const select = document.getElementById('input-colonia');
      select.innerHTML = '<option selected>Selecciona la colonia</option>';

      for (let i = 0; i < data['response'].asentamiento.length; i++) {
          const opt = document.createElement('option');
          opt.value = data['response'].asentamiento[i];
          opt.innerHTML = data['response'].asentamiento[i];
          select.appendChild(opt);
      }

      document.getElementById('input-estado').value = data['response'].estado;
      document.getElementById('input-delegacion').value = data['response'].municipio;
      document.getElementById('alerta-danger').style.display = 'none';

  } catch (error) {
      console.error('Error fetching postal code details:', error);
      document.getElementById('alerta-danger').style.display = 'block';
      document.getElementById('input-colonia').innerHTML = '<option selected>Selecciona la colonia</option>';
      document.getElementById('input-estado').value = '';
      document.getElementById('input-delegacion').value = '';
  }
}
