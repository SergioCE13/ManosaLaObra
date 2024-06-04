
document.addEventListener('DOMContentLoaded', function () {
  cargarCuenta();
});


const hamBurger = document.querySelector("#toggle-btn");

hamBurger.addEventListener("click", function () {
  if (window.matchMedia("(min-width: 800px)").matches) {
    /* La pantalla tiene al menos 600 píxeles de ancho */
    document.querySelector("#sidebar").classList.toggle("expand");
  }
});

// Crea un objeto MediaQueryList para funcionamiento responsive
// Adjunta una función de Listener, que se aplicará al cambio
//La función remueve la clase expand
window.matchMedia("(max-width: 600px)").addEventListener("change", function () {
  document.querySelector("#sidebar").classList.remove("expand");
});



// Esta función recibe como parámetro una opción que determina qué formulario mostrar
function mostrarFormulario(opcion) {
  // Ocultar todos los formularios que tengan la clase 'formulario'
  let formularios = document.getElementsByClassName('formulario'); //Busca los elementos del DOM que tienen asignada la clase 'formulario'
  for (var i = 0; i < formularios.length; i++) { // For para iterar sobre los distintos formularios.
    formularios[i].style.display = 'none'; // Oculta el formulario estableciendo su estilo de visualización como 'none'
  }

  // Mostrar el formulario correspondiente a la opción seleccionada
  let formulario = document.getElementById(opcion); // Busca el elemento del DOM que tiene el ID igual al parámetro 'opcion'
  if (formulario) { // Verifica si se encontró un formulario con el ID especificado
    formulario.style.display = 'block'; // Muestra el formulario estableciendo su estilo de visualización como 'block'
  }
}


/*----------------------------------------------------------------------------------------------------------*/

//Función para aparecer la alerta-success
function myFunctionAlertSuccess() {
  $('#alerta-success').fadeIn(1000);
  setTimeout(function () {
    $('#alerta-success').fadeOut(1000);
  }, 5000);
}

//Función para aparecer la alerta-danger
function myFunctionAlertDanger() {
  $('#alerta-danger').fadeIn(1000);
  setTimeout(function () {
    $('#alerta-danger').fadeOut(1000);
  }, 5000);
}

//Función para aparecer la alerta-dangerCampos
function myFunctionAlertDangerCampos() {
  $('#alerta-dangerCampos').fadeIn(1000);
  setTimeout(function () {
    $('#alerta-dangerCampos').fadeOut(1000);
  }, 5000);
}


//Función para aparecer la alerta-dangerContra
function myFuntionAlertaDangerContra() {
  $('#alerta-dangerContra').fadeIn(1000);
  setTimeout(function () {
    $('#alerta-dangerContra').fadeOut(1000);
  }, 5000);
}


//Función para aparecer la alerta-dangerNameApellidos
function myFuntionAlertaDangerNameApellidos() {
  $('#alerta-dangerNameApellidos').fadeIn(1000);
  setTimeout(function () {
    $('#alerta-dangerNameApellidos').fadeOut(1000);
  }, 5000);
}

//Función para aparecer la alerta-dangerNumber
function myFuntionAlertaDangerNumber() {
  $('#alerta-dangerNumber').fadeIn(1000);
  setTimeout(function () {
    $('#alerta-dangerNumber').fadeOut(1000);
  }, 5000);
}

//Función para aparecer la alerta-dangerCard
function myFuntionAlertaDangerCard() {
  $('#alerta-dangerCard').fadeIn(1000);
  setTimeout(function () {
    $('#alerta-dangerCard').fadeOut(1000);
  }, 5000);
}


//Función para aparecer la alerta-dangerExpiryDate
function myFuntionAlertaDangerExpiryDate() {
  $('#alerta-dangerExpiryDate').fadeIn(1000);
  setTimeout(function () {
    $('#alerta-dangerExpiryDate').fadeOut(1000);
  }, 5000);
}


//Función para aparecer la alerta-dangerCVV
function myFuntionAlertaDangerCVV() {
  $('#alerta-dangerCVV').fadeIn(1000);
  setTimeout(function () {
    $('#alerta-dangerCVV').fadeOut(1000);
  }, 5000);
}

//Función para aparecer la alerta errorMessageCP
function myFuntionAlertaErrorMessageCP() {
  $('#errorMessageCP').fadeIn(1000);
  setTimeout(function () {
    $('#errorMessageCP').fadeOut(1000);
  }, 5000);
}







/*----------------------------------------------------------------------------------------------------------*/


/**----------------------------------Funciones para Detalles de cuenta------------------------------------------- */

let user = {
  firstName: "Carmen",
  middleName: "Romero",
  lastName: "Gracia",
  email: "carmen.romero@gmail.com",
  telefono: "5552962378",
  password: "Contraseña123."
};

let editPassword = false;

function openFormCuenta() {
  document.getElementById("editForm").style.display = "block";
  document.getElementById("firstName").value = user.firstName;
  document.getElementById("middleName").value = user.middleName;
  document.getElementById("lastName").value = user.lastName;
  document.getElementById("email").value = user.email;
  document.getElementById("tel").value = user.telefono;
  document.getElementById("passwordFields").style.display = "none";
}

function closeFormCuenta() {
  document.getElementById("editForm").style.display = "none";
  document.getElementById("editFormContent").reset(); // Limpiar el formulario al cerrar
  document.getElementById("passwordFields").style.display = "none";
  editPassword = false;
}

function togglePasswordFields() {
  editPassword = !editPassword;
  document.getElementById("passwordFields").style.display = editPassword ? "block" : "none";
}

//Funciones Regex para validaciones de campos

function isValid_Password(password) {
  // Regex to check valid
  // Contraseña tenga al menos una letra minúscula, una letra mayúscula, un dígito, un carácter especial y un mínimo de 8 caracteres.
  let regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&.,\-_:])[A-Za-z\d@$!%?&.,\-_:]{8,}$/);

  // if password
  // is empty return false
  if (password == null) {
    myFuntionAlertaDangerContra()
    return false;

  }

  // Return true if the password
  // matched the ReGex
  if (regex.test(password) == true) {
    return true;
  }
  else {
    myFuntionAlertaDangerContra()
    return false;
  }
}

function isValid_NameApellidos(name) {
  // Regex to check valid
  //isValid_NameApellidos
  let regex = new RegExp(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/);

  // if name
  // is empty return false
  if (name == null) {
    myFuntionAlertaDangerNameApellidos()
    return false;
  }

  // Return true if the name
  // matched the ReGex
  if (regex.test(name) == true) {
    return true;
  }
  else {
    myFuntionAlertaDangerNameApellidos()
    return false;
  }
}

function isValid_Tel(tel) {
  //Regex to check valid
  //isValid_Tel
  let regex = new RegExp(/^\d{10}$/);

  // if tel
  // is empty return false
  if (tel == null) {
    myFuntionAlertaDangerNumber()
    return false;
  }

  // Return true if the tel
  // matched the ReGex
  if (regex.test(tel) == true) {
    return true;
  }
  else {
    myFuntionAlertaDangerNumber()
    return false;
  }
}


function saveChanges() {

  let newFirstName = document.getElementById("firstName").value;
  let newMiddleName = document.getElementById("middleName").value;
  let newLastName = document.getElementById("lastName").value;
  let newTel = document.getElementById("tel").value;
  let newPassword = document.getElementById("pwd").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (!editPassword) {
    newPassword = user.password
    confirmPassword = user.password
  }

  if (isValid_NameApellidos(newFirstName) && isValid_NameApellidos(newMiddleName) && isValid_NameApellidos(newLastName) && isValid_Password(newPassword) && confirmPassword && isValid_Tel(newTel)) {
    if (newPassword === confirmPassword) {
      user.firstName = newFirstName;
      user.middleName = newMiddleName;
      user.lastName = newLastName;
      user.password = newPassword;
      user.telefono = newTel;
      displayAccountInfo();
      closeFormCuenta();
      //Se llama a la función para aparecer la alerta-success
      myFunctionAlertSuccess();
    } else {
      //Se llama a la función para aparecer la alerta-danger
      myFunctionAlertDanger()
    }
  } else {
    //Se llama a la función para aparecer la alerta-danger2
    myFunctionAlertDangerCampos()
  }
}

function displayAccountInfo() {
  let accountInfo = document.getElementById("accountInfo");
  accountInfo.innerHTML = `
    <p><strong>Nombre:</strong> ${user.firstName} ${user.middleName} ${user.lastName}</p>
    <p><strong>Correo:</strong> ${user.email}</p>
    <p><strong>Teléfono:</strong> ${user.telefono}</p>
    <p><strong>Contraseña:</strong> ********</p>
  `;
}

// Mostrar detalles de la cuenta al cargar la página
window.onload = function () {
  displayAccountInfo();
};



/**---------------------------------------Funcion formulario direcciones----------------------------------------- */


/**--------------------------------------Funciones para formulario de tarjeta ------------------------------------*/

let cards = []; // Arreglo para almacenar las tarjetas

// Función para abrir el formulario de tarjetas
function openFormCards() {
  document.getElementById("cardForm").style.display = "block";
}

// Función para cerrar el formulario de tarjetas y limpiar los campos
function closeFormCards() {
  document.getElementById("cardForm").style.display = "none";
  document.getElementById("cardFormContent").reset(); // Limpiar el formulario al cerrar
}

// Función para detectar la compañía y el banco basado en los primeros 4 números de la tarjeta
function detectCompanyAndBank() {
  let cardNumber = document.getElementById("cardNumber").value;
  let companyField = document.getElementById("company");
  let bankField = document.getElementById("bank");

  if (cardNumber.length >= 4) {
    let prefix = cardNumber.slice(0, 4);
    let company = "";
    let bank = "";

    // Ejemplo de datos de mapeo de prefijos a compañías y bancos
    const cardInfo = {
      "4000": { company: "Visa", bank: "BBVA" },
      "4555": { company: "Visa", bank: "BBVA" },
      "4152": { company: "Visa", bank: "BBVA" },
      "5474": { company: "MasterCard", bank: "Santander" },
      "3759": { company: "Amex", bank: "American Express" },
      "3799": { company: "Amex", bank: "Santander" },
      "5709": { company: "MasterCard", bank: "Banamex" },
      "5204": { company: "MasterCard", bank: "Banamex" },
      "4037": { company: "MasterCard", bank: "Banamex" },
      "4213": { company: "Visa", bank: "HSBC" },
      "4524": { company: "Visa", bank: "HSBC" },
    };

    if (cardInfo[prefix]) {
      company = cardInfo[prefix].company;
      bank = cardInfo[prefix].bank;
    } else {
      company = "Desconocida";
      bank = "Desconocido";
    }

    companyField.value = company;
    bankField.value = bank;
  } else {
    companyField.value = "";
    bankField.value = "";
  }
}


//Funciones Regex para validaciones de campos

function isValid_CVV_Number(CVV_Number) {

  if (CVV_Number.length < 4) {
    myFuntionAlertaDangerCVV();
    return false;
  }
  // Regex to check valid
  // CVV_Number  
  let regex = new RegExp(/^[0-9]{3,4}$/);

  // if CVV_Number 
  // is empty return false
  if (CVV_Number == null) {
    myFuntionAlertaDangerCVV();
    return false;
  }

  // Return true if the CVV_Number
  // matched the ReGex
  if (regex.test(CVV_Number) == true) {
    return true;
  }
  else {
    myFuntionAlertaDangerCVV();
    return false;
  }
}

function isValid_expiryDate(expiryDate_Number) {

  if (expiryDate_Number.length < 4) {
    myFuntionAlertaDangerExpiryDate();
    return false;
  }
  // Regex to check valid
  // expiryDate_Number
  let regex = new RegExp(/^(0[1-9]|1[0-2])([0-9]{2})$/);

  // if expiryDate_Number
  // is empty return false
  if (expiryDate_Number == null) {
    myFuntionAlertaDangerExpiryDate();
    return "false";
  }

  // Return true if the expiryDate_Number
  // matched the ReGex
  if (regex.test(expiryDate_Number) == true) {
    return "true";
  }
  else {
    myFuntionAlertaDangerExpiryDate();
    return "false";
  }
}

function isValid_cardNumber(cardNumber) {

  if (cardNumber.length < 16) {
    myFuntionAlertaDangerCard();
    return false;
  }
  // Regex to check valid
  // cardNumber 
  let regex = new RegExp(/^(?:\d[ -]*?){13,16}$/);

  // if cardNumber
  // is empty return false
  if (cardNumber == null) {
    myFuntionAlertaDangerCard();
    return false;
  }

  // Return true if the cardNumber
  // matched the ReGex
  if (regex.test(cardNumber) == true) {
    return true;
  }
  else {
    myFuntionAlertaDangerCard();
    return false;
  }

}

// Función para guardar una nueva tarjeta
function saveCard() {

  let cardNumber = document.getElementById("cardNumber").value;
  let cardOwner = document.getElementById("cardOwner").value;
  let expiryDate = document.getElementById("expiryDate").value;
  let securityCode = document.getElementById("securityCode").value;
  let company = document.getElementById("company").value;
  let bank = document.getElementById("bank").value;
  let cardType = document.querySelector('input[name="cardType"]:checked').value;



  if (isValid_cardNumber(cardNumber) && isValid_NameApellidos(cardOwner) && isValid_expiryDate(expiryDate) && isValid_CVV_Number(securityCode) && company && bank && cardType) {
    let newCard = {
      cardNumber: cardNumber,
      cardOwner: cardOwner,
      expiryDate: expiryDate,
      securityCode: securityCode,
      company: company,
      bank: bank,
      cardType: cardType
    };
    cards.push(newCard); // Agregar la nueva tarjeta al arreglo
    displayCards(); // Actualizar la lista de tarjetas mostradas
    closeFormCards(); // Cerrar el formulario
    myFunctionAlertSuccess(); //llamamos la función de la alerta alerta-success

  } else {
    // En caso de error llamamos la función de la alerta alerta-dangerCampos
    myFunctionAlertDangerCampos();
  }
}

// Función para editar una tarjeta existente
function editCard(index) {
  let card = cards[index];
  document.getElementById("cardNumber").value = card.cardNumber;
  document.getElementById("cardOwner").value = card.cardOwner;
  document.getElementById("expiryDate").value = card.expiryDate;
  document.getElementById("securityCode").value = card.securityCode;
  document.getElementById("company").value = card.company;
  document.getElementById("bank").value = card.bank;
  document.querySelector(`input[name="cardType"][value="${card.cardType}"]`).checked = true;
  cards.splice(index, 1); // Eliminar la tarjeta actual antes de editarla
  openFormCards(); // Abrir el formulario para editar
}

// Función para eliminar una tarjeta
function deleteCard(index) {
  cards.splice(index, 1); // Eliminar la tarjeta del arreglo
  // Obtener la lista de direcciones existentes del localStorage
  let tarjetas = JSON.parse(localStorage.getItem('tarjetas')) || [];

  // Eliminar la dirección correspondiente del localStorage
  tarjetas.splice(index, 1);

  // Actualizar el localStorage con la lista de direcciones actualizada
  localStorage.setItem('tarjetas', JSON.stringify(tarjetas));
  displayCards(); // Actualizar la lista de tarjetas mostradas
}

// Función para mostrar las tarjetas guardadas
function displayCards() {
  let cardList = document.getElementById("cardList");
  cardList.innerHTML = ""; // Limpiar la lista antes de mostrar las tarjetas

  cards.forEach((card, index) => {
    let item = document.createElement("div");
    item.classList.add("card-item");
    item.innerHTML = `
       <p><strong>Numero de tarjeta:</strong> ${card.cardNumber}</p>
       <p><strong>Propietario de la tarjeta:</strong> ${card.cardOwner}</p>
       <p><strong>Fecha de expiración:</strong> ${card.expiryDate}</p>
       <p><strong>Código de seguridad:</strong> ${card.securityCode}</p>
       <p><strong>Compañía:</strong> ${card.company}</p>
       <p><strong>Banco:</strong> ${card.bank}</p>
       <p><strong>Tipo de tarjeta:</strong> ${card.cardType}</p>
       <button class="ButtonsConfig ButtonEditCard" onclick="editCard(${index})">Editar</button>
       <button class="ButtonsConfig ButtonEditCard" onclick="deleteCard(${index})">Eliminar</button>
     `;
    cardList.appendChild(item); // Agregar el elemento de tarjeta a la lista
  });
}

/**----------------------------Configuración del producto------------------------------------- */

let product = [];

// Función que nos permite abrir el formulario, cambia la configuración del display a block
function openFormProduct() {
  
  document.getElementById("productForm").style.display= "block";
  document.getElementById("productFormContent").style.display = "block";
} 

// Función para cerrar el formulario
function closeFormProduct(){
  document.getElementById("productForm").style.display= "none";
  document.getElementById("productFormContent").reset();
}

// Traemos los componentes que vamos a utilizar para realizar la validación de los campos

  const newEditProduct = document.getElementById("editProduct").value;
  const newEditPrice = document.getElementById("editPrice").value;
  const newEditDescription = document.getElementById("editDescription").value;
  const newEditInfo = document.getElementById("editInfo").value;
  const newEditStock = document.getElementById("editStock").value;
  const newEditHeight = document.getElementById("editHeight").value;
  const newEditWidth = document.getElementById("editWidth").value;
  const newEditLength = document.getElementById("editLength").value;
  const newButtonSubmit = document.getElementById("buttonSubmit").value;

  let imagenesCargadas = false;

  //Deshabilitamos el botón del formulario, para poder habilitarlo posteriormente mediante la validación de los campos.
  newButtonSubmit.classList.add('button-disabled');
  newButtonSubmit.disabled = true;

  function validarCampos(){
    const editProduct = newEditProduct.value;
    const editPrice = newEditPrice.value;
    const editDescription = newEditDescription.value;
    const editInfo = newEditInfo.value;
    const editStock = newEditStock.value;
    const editHeight = newEditHeight.value;
    const editWidth = newEditWidth.value;
    const editLength = newEditLength.value;
  

  //Verificamos que haya contenido en los campos del formulario, != null.
  if(editProduct && editPrice && editDescription && editInfo && editStock && editStock && editHeight && editWidth && editLength) {
    newButtonSubmit.classList.remove('button-disabled');
    newButtonSubmit.disabled = false;
  } else{
    newButtonSubmit.classList.add('button-disabled'); //Cambiamos el estilo del botón
    newButtonSubmit.disabled = true; // Deshabilitamos el botón
  }


}

newEditProduct.addEventListener('input', validarCampos);
newEditPrice.addEventListener('input', validarCampos);
newEditDescription.addEventListener('input', validarCampos);
newEditInfo.addEventListener('input', validarCampos); 
newEditStock.addEventListener('input', validarCampos); 
newEditHeight.addEventListener('input', validarCampos); 
newEditWidth.addEventListener('input', validarCampos); 
newEditLength.addEventListener('input', validarCampos); 
newButtonSubmit.addEventListener('input', validarCampos); 