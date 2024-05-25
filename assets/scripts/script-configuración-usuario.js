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
/**--------Función para Detalles de cuenta---------- */

let user = {
  firstName: "Roberto",
  middleName: "Rodriguez",
  lastName: "Castro",
  email: "example@example.com",
  telefono: "2969613706",
  password: "password123"
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

  if (newFirstName && newMiddleName &&  newLastName && newPassword && confirmPassword) {
    if (newPassword === confirmPassword) {
      user.firstName = newFirstName;
      user.middleName = newMiddleName;
      user.lastName = newLastName;
      user.password = newPassword;
      user.telefono = newTel;
      displayAccountInfo();
      closeFormCuenta();
       //Código para aparecer y desaparecer alertas (aparece la alerta-success)
      document.getElementById("alerta-success").style.display = "block";
    } else {
      // En caso de error mostramos una alerta-danger
      document.getElementById("alerta-danger").style.display = "block";
    }
  } else {
    // En caso de error mostramos una alerta-danger
    document.getElementById("alerta-danger2").style.display = "block";
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
window.onload = function() {
  displayAccountInfo();
};



  /**------------Funcion formulario direcciones------------ */

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
      document.getElementById('errorMessage').style.display = 'none';
  
    } catch (error) {
      console.error('Error fetching postal code details:', error);
      document.getElementById('errorMessage').style.display = 'block';
      document.getElementById('neighborhood').value = '';
      document.getElementById('state').value = '';
      document.getElementById('city').value = '';
      document.getElementById('municipio').value = '';
    }
  }


  /*let endpoint_sepomex  = "https://api.copomex.com/query/";
  let method_sepomex = 'info_cp/';
  let cp = "09810";
  let variable_string = '?type=simplified';
  let  token = '&token=0acd3e82-60b5-4281-9947-9b5e93338282';
  let url = endpoint_sepomex + method_sepomex + cp + variable_string + token;

  $.get(url){
      .done(function( data ) {
          let content = JSON.parse(data);

          if((content[0].error){
              console.log('Algo salio mal');
          }else{
              console.log('Todo bien');
          }
      });
  }*/

  
  function saveAddress() {
    let fullName = document.getElementById("fullName").value;
    let street = document.getElementById("street").value;
    let numberInt = document.getElementById("numberInt").value;
    let numberExt = document.getElementById("numberExt").value;
    let neighborhood = document.getElementById("neighborhood").value;
    let postalCode = document.getElementById("postalCode").value;
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    let municipio = document.getElementById("municipio").value;
    let city = document.getElementById("city").value;
  
    if (fullName && street && numberInt && numberExt && neighborhood && postalCode && country && city && municipio) {
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
    } else {
      // En caso de error mostramos una alerta-danger
      document.getElementById("alerta-danger2").style.display = "block";
    }
  }
  
  function editAddress(index) {
    let address = addresses[index];
    document.getElementById("fullName").value = address.fullName;
    document.getElementById("street").value = address.street;
    document.getElementById("numberInt").value = address.numberInt;
    document.getElementById("numberExt").value = address.numberExt;
    document.getElementById("neighborhood").value = address.neighborhood;
    document.getElementById("postalCode").value = address.postalCode;
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
  
  // Obtener la lista de direcciones existentes del localStorage
  let direcciones = JSON.parse(localStorage.getItem('direcciones')) || [];

  // Eliminar la dirección correspondiente del localStorage
  direcciones.splice(index, 1);

  // Actualizar el localStorage con la lista de direcciones actualizada
  localStorage.setItem('direcciones', JSON.stringify(direcciones));

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
        <p>${address.street}, ${address.numberInt}, ${address.numberExt} , ${address.neighborhood}, ${address.postalCode}</p>
        <p>${address.municipio}, ${address.city}, ${address.state},${address.country}</p>
        <button class="ButtonsConfig ButtonEditCard" onclick="editAddress(${index})">Editar</button>
        <button class="ButtonsConfig ButtonEditCard" onclick="deleteAddress(${index})">Eliminar</button>
      `;
      addressList.appendChild(item);
    });
  }

 /**---------------funcion para formulario de tarjeta ------------*/

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

// Función para guardar una nueva tarjeta
 function saveCard() {
   let cardNumber = document.getElementById("cardNumber").value;
   let cardOwner = document.getElementById("cardOwner").value;
   let expiryDate = document.getElementById("expiryDate").value;
   let securityCode = document.getElementById("securityCode").value;
   let company = document.getElementById("company").value;
   let bank = document.getElementById("bank").value;
   let cardType = document.querySelector('input[name="cardType"]:checked').value;

   if (cardNumber && cardOwner && expiryDate && securityCode && company && bank && cardType) {
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
   } else {
     // En caso de error mostramos una alerta-danger
     document.getElementById("alerta-danger2").style.display = "block";
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


// Añadir el escucha de eventos al botón para guardar la tarjeta
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






















  /**---------------funcion para formulario de tarjeta ------------*/

/*let cards = []; // Arreglo para almacenar las tarjetas

function openFormCards() {
  document.getElementById("cardForm").style.display = "block";
}

function closeFormCards() {
  document.getElementById("cardForm").style.display = "none";
  document.getElementById("cardFormContent").reset(); // Limpiar el formulario al cerrar
}

function saveCard() {
  let cardNumber = document.getElementById("cardNumber").value;
  let cardOwner = document.getElementById("cardOwner").value;
  let expiryDate = document.getElementById("expiryDate").value;
  let securityCode = document.getElementById("securityCode").value;

  if (cardNumber && cardOwner && expiryDate && securityCode) {
    let newCard = {
      cardNumber: cardNumber,
      cardOwner: cardOwner,
      expiryDate: expiryDate,
      securityCode: securityCode
    };
    cards.push(newCard);
    displayCards();
    closeFormCards();
  } else {
    // En caso de error mostramos una alerta-danger
    document.getElementById("alerta-danger2").style.display = "block";
  }
}

function editCard(index) {
  let card = cards[index];
  document.getElementById("cardNumber").value = card.cardNumber;
  document.getElementById("cardOwner").value = card.cardOwner;
  document.getElementById("expiryDate").value = card.expiryDate;
  document.getElementById("securityCode").value = card.securityCode;
  cards.splice(index, 1); // Eliminar la tarjeta actual antes de editarla
  openFormCards();
}

function deleteCard(index) {
  cards.splice(index, 1);
      // Obtener la lista de direcciones existentes del localStorage
      let tarjetas = JSON.parse(localStorage.getItem('tarjetas')) || [];
  
      // Eliminar la dirección correspondiente del localStorage
      tarjetas.splice(index, 1);
    
      // Actualizar el localStorage con la lista de direcciones actualizada
      localStorage.setItem('tarjetas', JSON.stringify(tarjetas));
  displayCards();
}

function displayCards() {
  let cardList = document.getElementById("cardList");
  cardList.innerHTML = ""; // Limpiar la lista antes de mostrar las tarjetas

  cards.forEach((card, index) => {
    let item = document.createElement("div");
    /*item.setAttribute( "class", "newCard" ); --
    item.classList.add("card-item");
    item.innerHTML = `
      <p><strong>Numero de tarjeta:</strong> ${card.cardNumber}</p>
      <p><strong>Propietario de la tarjeta:</strong> ${card.cardOwner}</p>
      <p><strong>Fecha de expitación:</strong> ${card.expiryDate}</p>
      <p><strong>Código de seguridad:</strong> ${card.securityCode}</p>
      <button class="ButtonsConfig ButtonEditCard" onclick="editCard(${index})">Editar</button>
      <button class="ButtonsConfig ButtonEditCard" onclick="deleteCard(${index})">Eliminar</button>
    `;
    cardList.appendChild(item);
  });
}*/

/**----------- Apartado para el local Storage -----------------------------------------------

// ----------------------------------------------  Añadimos el escucha de eventos al botón a través de una función anónima.  ----------------------------------------------------------

const guardarTarjeta = document.getElementById('guardar-tarjeta');
guardarTarjeta.addEventListener('click', function(){
    // Obtener la lista de tarjetas existentes del localStorage
    let tarjetas = JSON.parse(localStorage.getItem('tarjetas')) || [];

    // Obtener los valores de los campos del formulario
    const numeroTarjeta = document.getElementById('cardNumber').value;
    const propietarioTarjeta = document.getElementById('cardOwner').value;
    const fechaExpiracion = document.getElementById('expiryDate').value;
    const codigoSeguridad = document.getElementById('securityCode').value;
    console.log("datos obtenidos");
  
    // Crear un objeto JavaScript para proceder a generar el formato JSON
    const tarjetaJSON = {
        "cardNumber": numeroTarjeta,
        "cardOwner": propietarioTarjeta,
        "expiryDate": fechaExpiracion,
        "securityCode": codigoSeguridad
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
});*/


/*-------------------------------------------------------------------------------------------- */
function cargarCuenta(){
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
});







