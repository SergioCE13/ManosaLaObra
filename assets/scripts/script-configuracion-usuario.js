document.addEventListener('DOMContentLoaded', function() {
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
window.matchMedia("(max-width: 600px)").addEventListener("change", function() {
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
  setTimeout(function() { 
      $('#alerta-success').fadeOut(1000); 
  }, 5000);
}

//Función para aparecer la alerta-danger
function myFunctionAlertDanger() {
  $('#alerta-danger').fadeIn(1000);
  setTimeout(function() { 
      $('#alerta-danger').fadeOut(1000); 
  }, 5000);
}

//Función para aparecer la alerta-dangerCampos
function myFunctionAlertDangerCampos() {
  $('#alerta-dangerCampos').fadeIn(1000);
  setTimeout(function() { 
      $('#alerta-dangerCampos').fadeOut(1000); 
  }, 5000);
}


//Función para aparecer la alerta-dangerContra
function myFuntionAlertaDangerContra() {
  $('#alerta-dangerContra').fadeIn(1000);
  setTimeout(function() { 
      $('#alerta-dangerContra').fadeOut(1000); 
  }, 5000);
}


//Función para aparecer la alerta-dangerNameApellidos
function myFuntionAlertaDangerNameApellidos() {
  $('#alerta-dangerNameApellidos').fadeIn(1000);
  setTimeout(function() { 
      $('#alerta-dangerNameApellidos').fadeOut(1000); 
  }, 5000);
}

//Función para aparecer la alerta-dangerNumber
function myFuntionAlertaDangerNumber() {
  $('#alerta-dangerNumber').fadeIn(1000);
  setTimeout(function() { 
      $('#alerta-dangerNumber').fadeOut(1000); 
  }, 5000);
}

//Función para aparecer la alerta-dangerCard
function myFuntionAlertaDangerCard() {
  $('#alerta-dangerCard').fadeIn(1000);
  setTimeout(function() { 
      $('#alerta-dangerCard').fadeOut(1000); 
  }, 5000);
}


//Función para aparecer la alerta-dangerExpiryDate
function myFuntionAlertaDangerExpiryDate() {
  $('#alerta-dangerExpiryDate').fadeIn(1000);
  setTimeout(function() { 
      $('#alerta-dangerExpiryDate').fadeOut(1000); 
  }, 5000);
}


//Función para aparecer la alerta-dangerCVV
function myFuntionAlertaDangerCVV() {
  $('#alerta-dangerCVV').fadeIn(1000);
  setTimeout(function() { 
      $('#alerta-dangerCVV').fadeOut(1000); 
  }, 5000);
}

//Función para aparecer la alerta errorMessageCP
function myFuntionAlertaErrorMessageCP() {
  $('#errorMessageCP').fadeIn(1000);
  setTimeout(function() { 
      $('#errorMessageCP').fadeOut(1000); 
  }, 5000);
}







/*----------------------------------------------------------------------------------------------------------*/ 


/**----------------------------------Funciones para Detalles de cuenta------------------------------------------- */


let user = {
  firstName: "Cristian",
  middleName: "Nodales",
  lastName: "Bonaparte",
  email: "crisbona@gmail.com",
  telefono: "2969613706",
  password: "Password123!"
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
  let regex = new RegExp( /^\d{10}$/);

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

  if (isValid_NameApellidos(newFirstName) && isValid_NameApellidos(newMiddleName) &&  isValid_NameApellidos(newLastName) && isValid_Password(newPassword) && confirmPassword && isValid_Tel(newTel)) {
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

function displayMicuenta() {
  let nombre = document.getElementById("name");
  let lastnameDad = document.getElementById("lastnameDad");
  let lastnameMom = document.getElementById("lastnameMom");
  let email = document.getElementById("email");
  let number = document.getElementById("num");
  let password = document.getElementById("password");

  nombre.innerHTML = `${user.firstName}`
  lastnameDad.innerHTML = `${user.middleName}`
  lastnameMom.innerHTML = `${user.lastName}`
  email.innerHTML = `${user.email}`
  number.innerHTML = `${user.telefono}`
  password.innerHTML = '*******'

}


// Mostrar detalles de la cuenta al cargar la página
window.onload = function() {
  displayAccountInfo();
  displayMicuenta();
};



  /**---------------------------------------Funcion formulario direcciones----------------------------------------- */

  let addresses = []; // Arreglo para almacenar las direcciones

  function openFormAddresses() {
    document.getElementById("addressForm").style.display = "block";
  }
  
  function closeFormAddresses() {
    document.getElementById("addressForm").style.display = "none";
    document.getElementById("addressFormContent").reset(); // Limpiar el formulario al cerrar
  }


    async function fetchPostalCodeInfo() {
    const postalCode = document.getElementById('postalCode').value; //Aquí se obtiene el valor del campo de entrada del código postal.
    //const apiUrl = `https://api.copomex.com/query/info_cp/09810?token=0acd3e82-60b5-4281-9947-9b5e93338282`; 
    const apiUrl =`https://api.copomex.com/query/info_cp/${postalCode}?type=simplified&token=pruebas`;
    try {
      const response = await fetch(apiUrl); //Utiliza fetch para realizar una solicitud GET a la API.
      if (!response.ok) {
        throw new Error('Network response was not ok'); //Si la respuesta no es exitosa (código de estado diferente de 200), se lanza un error.
      }
  
      const data = await response.json(); //La respuesta se convierte a un objeto JSON.
      console.log(data['response']);

      select = document.getElementById('neighborhood');

      for (var i = 0; i<data['response'].asentamiento.length; i++){
          var opt = document.createElement('option');
          opt.value = data['response'].asentamiento[i];
          opt.innerHTML = data['response'].asentamiento[i];
          select.appendChild(opt);
      }
  
      // Suponiendo que los datos se encuentran en propiedades específicas del JSON devuelto
      //Se asignan los valores de colonia, estado y ciudad obtenidos del objeto data a los campos correspondientes en el formulario. Además, se oculta el mensaje de error en caso de que estuviera visible.
      //document.getElementById('neighborhood').value = data['response'].asentamiento[0];
      document.getElementById('state').value = data['response'].estado;
      document.getElementById('city').value = data['response'].ciudad;
      document.getElementById('municipio').value = data['response'].municipio;
      
  
    } catch (error) {
      console.error('Error fetching postal code details:', error);
      myFuntionAlertaErrorMessageCP()
      document.getElementById('neighborhood').value = '';
      document.getElementById('state').value = '';
      document.getElementById('city').value = '';
      document.getElementById('municipio').value = '';
    }
  }
  
  function saveAddress() {
    let fullName = document.getElementById("fullName").value;
    let street = document.getElementById("street").value;
    let numberInt = document.getElementById("numberInt").value;
    let numberExt = document.getElementById("numberExt").value;
    let postalCode = document.getElementById("postalCode").value;
    let neighborhood = document.getElementById("neighborhood").value;
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    let municipio = document.getElementById("municipio").value;
    let city = document.getElementById("city").value;
  
    if (isValid_NameApellidos(fullName) && street && numberInt && numberExt && neighborhood && postalCode && country && city && municipio) {
      let newAddress = {
        fullName: fullName,
        street: street,
        numberInt: numberInt,
        numberExt: numberExt,
        neighborhood: neighborhood,
        postalCode: postalCode,
        city: city,
        municipio : municipio,
        state: state,
        country: country
      };
      addresses.push(newAddress);
      displayAddresses();
      closeFormAddresses();
      //Se llama a la función para aparecer la alerta-Success
      myFunctionAlertSuccess();
    } else {
      //Se llama a la función para aparecer la alerta-danger
      myFunctionAlertDangerCampos();
    }
  }
  
  function editAddress(index) {
    let address = addresses[index];
    document.getElementById("fullName").value = address.fullName;
    document.getElementById("street").value = address.street;
    document.getElementById("numberInt").value = address.numberInt;
    document.getElementById("numberExt").value = address.numberExt;
    document.getElementById("postalCode").value = address.postalCode;
    document.getElementById("neighborhood").value = address.neighborhood;
    document.getElementById("country").value = address.country;
    document.getElementById("state").value = address.state;
    document.getElementById("municipio").value = address.municipio;
    document.getElementById("city").value = address.city;
    addresses.splice(index, 1); // Eliminar la dirección actual antes de editarla
    openFormAddresses();
  }
  
 // Resto del código...

 function deleteAddress(index) {
  // Eliminar la dirección del array de direcciones
  addresses.splice(index, 1);
  
  /*// Obtener la lista de direcciones existentes del localStorage
  let direcciones = JSON.parse(localStorage.getItem('direcciones')) || [];

  // Eliminar la dirección correspondiente del localStorage
  direcciones.splice(index, 1);

  // Actualizar el localStorage con la lista de direcciones actualizada
  localStorage.setItem('direcciones', JSON.stringify(direcciones));*/

  // Mostrar la lista de direcciones actualizada en la interfaz de usuario
  displayAddresses(); // Esta línea se agrega para volver a mostrar las direcciones actualizadas
}


// Funciones y código adicionales...

  function displayAddresses() {
    let addressList = document.getElementById("addressList");
    addressList.innerHTML = ""; // Limpiar la lista antes de mostrar las direcciones
  
    addresses.forEach((address, index) => {
      let item = document.createElement("div");
      item.classList.add("address-item");
      item.innerHTML = `
        <p><strong>${address.fullName}</strong></p>
        <p>${address.street}, ${address.numberInt}, ${address.numberExt} , ${address.postalCode}, ${address.neighborhood}</p>
        <p>${address.municipio}, ${address.city}, ${address.state},${address.country}</p>
        <button class="ButtonsConfig ButtonEditCard" onclick="editAddress(${index})">Editar</button>
        <button class="ButtonsConfig ButtonEditCard" onclick="deleteAddress(${index})">Eliminar</button>
      `;
      addressList.appendChild(item);
    });
  }

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

  if (CVV_Number.length < 3) {
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





 /**----------- Apartado para el local Storage -----------------------------------------------*/


/*// Añadir el escucha de eventos al botón para guardar la tarjeta
 const guardarTarjeta = document.getElementById('guardar-tarjeta');
 guardarTarjeta.addEventListener('click', function(){
     // Obtener la lista de tarjetas existentes del localStorage
     let tarjetas = JSON.parse(localStorage.getItem('tarjetas')) || [];

     // Obtener los valores de los campos del formulario
     const numeroTarjeta = document.getElementById('cardNumber').value;
     const propietarioTarjeta = document.getElementById('cardOwner').value;
     const fechaExpiracion = document.getElementById('expiryDate').value;
     const codigoSeguridad = document.getElementById('securityCode').value;
     const compania = document.getElementById('company').value;
     const banco = document.getElementById('bank').value;
     const cardType = document.querySelector('input[name="cardType"]:checked').value;
     
     console.log("datos obtenidos");

     // Crear un objeto JavaScript para proceder a generar el formato JSON
     const tarjetaJSON = {
         "cardNumber": numeroTarjeta,
         "cardOwner": propietarioTarjeta,
         "expiryDate": fechaExpiracion,
         "securityCode": codigoSeguridad,
         "company": compania,
         "bank": banco,
         "cardType": cardType
     };

     // Agregar la nueva tarjeta a la lista
     tarjetas.push(tarjetaJSON);

     try {
         // Intentar actualizar el localStorage con la lista de tarjetas actualizada
         localStorage.setItem('tarjetas', JSON.stringify(tarjetas));
         // Código para mostrar una alerta de éxito
         document.getElementById("alerta-success").style.display = "block";
     } catch (error) {
         // En caso de error al actualizar el localStorage mostramos una alerta de error
         document.getElementById("alerta-danger2").style.display = "block";
     }
     saveCard();
 });

-------------------------------------------------------------------------------------------- */
/*function cargarCuenta(){
  let cuenta = JSON.parse(localStorage.getItem('cuentas')) || [];
  const cuentaJSON = {
    "nombre": user.firstName,
    "ape_pat": user.middleName,
    "ape_mat": user.lastName,
    "email": user.email,
    "password": user.password
  }

  localStorage.setItem('cuentas', JSON.stringify(cuentaJSON));
}



const guardarDireccion = document.getElementById('guardar-direccion');
guardarDireccion.addEventListener('click', function(){
// Obtener la lista de direcciones existentes del localStorage
let direcciones = JSON.parse(localStorage.getItem('direcciones')) || [];

// Obtener los valores de los campos del formulario
const nombreCompleto = document.getElementById('fullName').value;
const calle = document.getElementById('street').value;
const numero = document.getElementById('number').value;
const colonia = document.getElementById('neighborhood').value;
const codigoPostal = document.getElementById('postalCode').value;
const ciudad = document.getElementById('city').value;
const pais = document.getElementById('country').value;

// Crear un objeto JavaScript para proceder a generar el formato JSON
const direccionJSON = {
    "fullName": nombreCompleto,
    "street": calle,
    "number": numero,
    "neighborhood": colonia,
    "postalCode": codigoPostal,
    "city": ciudad,
    "country": pais
};

// Agregar la nueva dirección a la lista
direcciones.push(direccionJSON);

try {
    // Intentar actualizar el localStorage con la lista de direcciones actualizada
    localStorage.setItem('direcciones', JSON.stringify(direcciones));
    // Código para mostrar una alerta de éxito
    document.getElementById("alerta-success").style.display = "block";
} catch (error) {
    // En caso de error al actualizar el localStorage mostramos una alerta de error
    document.getElementById("alerta-danger2").style.display = "block";
}
saveAddress();
});*/







