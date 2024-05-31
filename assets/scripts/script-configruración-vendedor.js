
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
  firstName: "Carmen",
  middleName: "Romero",
  lastName: "Garcia",
  email: "carmenrom@gmail.com",
  password: "password123",
  tel: 5552962378,
  desc: "Hola soy Carmen. Soy originaria de Cuetzalan, Puebla,  realizo prendas textiles tejidas en telar de cintura; además, utiliza una técnica única en el mundo conocida como 'tejido en curva' a muy corta edad aprendí a utilizar el telar gracias a mi abuela, en mi  juventud y adultez perfeccioné la técnica y generé piezas únicas que la hicieron destacar de manera internacional. Mi lengua natal es el  Náhuatl y a través de mi trabajo conservo las tradiciones de la cultura de la Sierra Norte del estado de Puebla. " ,
  resi: "Puebla",
  foto: null
};

let editPassword = false;

function openFormCuenta() {
    document.getElementById("editForm").style.display = "block";
    document.getElementById("firstName").value = user.firstName;
    document.getElementById("middleName").value = user.middleName;
    document.getElementById("lastName").value = user.lastName;
    document.getElementById("email").value = user.email;
    document.getElementById("tel").value = user.tel;
    document.getElementById("desc").value = user.desc;
    document.getElementById("resi").value = user.resi;
    document.getElementById("passwordFields").style.display = "none";
  }
  
  function closeFormCuenta() {
    document.getElementById("editForm").style.display = "none";
    document.getElementById("editFormContent").reset(); // Limpiar el formulario al cerrar
    document.getElementById("passwordFields").style.display = "none"; // Ocultar campos de contraseña
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
    let newPassword = document.getElementById("pwd").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let newtel = document.getElementById("tel").value;
    let newDesc = document.getElementById("desc").value;
    let newResi = document.getElementById("resi").value;
    let fotoInput = document.getElementById("foto");
  
    if (newFirstName && newMiddleName && newLastName && newDesc && newResi && newtel && fotoInput) {
      if (editPassword) {
        if (newPassword && confirmPassword) {
          if (newPassword === confirmPassword) {
            user.password = newPassword;
          } else {
            document.getElementById("alerta-danger").style.display = "block";
            return;
          }
        } else {
          document.getElementById("alerta-danger2").style.display = "block";
          return;
        }
      }
  
      user.firstName = newFirstName;
      user.middleName = newMiddleName;
      user.lastName = newLastName;
      user.desc = newDesc;
      user.resi = newResi;
      user.tel = newtel;
  
      if (fotoInput.files && fotoInput.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
          user.foto = e.target.result;
          displayAccountInfo();
        };
        reader.readAsDataURL(fotoInput.files[0]);
      } else {
        displayAccountInfo();
      }
  
      closeFormCuenta();
      document.getElementById("alerta-success").style.display = "block";
    } else {
      document.getElementById("alerta-danger2").style.display = "block";
    }
  }
  
  function displayAccountInfo() {
    let accountInfo = document.getElementById("accountInfo");
    accountInfo.innerHTML = `
      <p><strong>Nombre:</strong> ${user.firstName} ${user.middleName} ${user.lastName}</p>
      <p><strong>Correo:</strong> ${user.email}</p>
      <p><strong>Contraseña:</strong> ********</p>
      <p><strong>Número de teléfono: </strong>${user.tel}</p>
      <p><strong>Descripción del vendedor: </strong>${user.desc}</p>
      <p><strong>Estado de residencia: </strong>${user.resi}</p>
      ${user.foto ? `<p><strong>Foto:</strong><br><img src="${user.foto}" alt="Foto de ${user.firstName}" style="max-width:200px;"></p>` : ''}
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
  
  function saveAddress() {
    let fullName = document.getElementById("fullName").value;
    let street = document.getElementById("street").value;
    let number = document.getElementById("number").value;
    let neighborhood = document.getElementById("neighborhood").value;
    let postalCode = document.getElementById("postalCode").value;
    let country = document.getElementById("country").value;
    let city = document.getElementById("city").value;
  
    if (fullName && street && number && neighborhood && postalCode && country && city) {
      let newAddress = {
        fullName: fullName,
        street: street,
        number: number,
        neighborhood: neighborhood,
        postalCode: postalCode,
        country: country,
        city: city
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
    document.getElementById("number").value = address.number;
    document.getElementById("neighborhood").value = address.neighborhood;
    document.getElementById("postalCode").value = address.postalCode;
    document.getElementById("country").value = address.country;
    document.getElementById("city").value = address.city;
    addresses.splice(index, 1); // Eliminar la dirección actual antes de editarla
    openFormAddresses();
  }
  
  function deleteAddress(index) {
    addresses.splice(index, 1);
    displayAddresses();
  }
  
  function displayAddresses() {
    let addressList = document.getElementById("addressList");
    addressList.innerHTML = ""; // Limpiar la lista antes de mostrar las direcciones
  
    addresses.forEach((address, index) => {
      let item = document.createElement("div");
      item.classList.add("address-item");
      item.innerHTML = `
        <p><strong>${address.fullName}</strong></p>
        <p>${address.street}, ${address.number}, ${address.neighborhood}, ${address.postalCode}</p>
        <p>${address.country}, ${address.city}</p>
        <button class="ButtonsConfig ButtonEditCard" onclick="editAddress(${index})">Editar</button>
        <button class="ButtonsConfig ButtonEditCard" onclick="deleteAddress(${index})">Eliminar</button>
      `;
      addressList.appendChild(item);
    });
  }



  /**---------------funcion para formulario de tarjeta ------------*/


  let cards = []; // Arreglo para almacenar las tarjetas

        function openFormCards() {
            document.getElementById("cardForm").style.display = "block";
        }

        function closeFormCards() {
            document.getElementById("cardForm").style.display = "none";
            document.getElementById("cardFormContent").reset(); // Limpiar el formulario al cerrar
            document.getElementById("alerta-danger2").style.display = "none"; // Ocultar la alerta
        }

        function saveCard() {
          let cardNumber = document.getElementById("cardNumber").value;
          let cardOwner = document.getElementById("cardOwner").value;
          let bank = document.getElementById("bank").value;
          let compañia = document.getElementById("compañia").value;
          let estadoCuenta = document.getElementById("estadoCuenta");
          
      
          // Validar que todos los campos incluyendo el archivo de estado de cuenta estén presentes
          if (cardNumber && cardOwner && bank && compañia && estadoCuenta.files.length > 0) {
              let newCard = {
                  cardNumber: cardNumber,
                  cardOwner: cardOwner,
                  bank: bank,
                  compañia: compañia,
                  estadoCuentaData: estadoCuenta.files[0].name
              };
      
              // Leer el archivo y guardarlo en el objeto newCard
              let reader = new FileReader();
              reader.onload = function (e) {
                  newCard.estadoCuentaData = e.target.result; // Guardar el contenido del archivo
                  cards.push(newCard);
                  displayCards();
                  closeFormCards();
                  document.getElementById("alerta-success").style.display = "block";
              };
              reader.readAsDataURL(estadoCuenta.files[0]);
          } else {
              // En caso de error mostramos una alerta-danger
              document.getElementById("alerta-danger2").style.display = "block";
          }
      }

        function editCard(index) {
            let card = cards[index];
            document.getElementById("cardNumber").value = card.cardNumber;
            document.getElementById("cardOwner").value = card.cardOwner;
            document.getElementById("bank").value = card.bank;
            document.getElementById("compañia").value = card.compañia;
            // El archivo no puede ser editado una vez subido
            cards.splice(index, 1); // Eliminar la tarjeta actual antes de editarla
            openFormCards();
        }

        function deleteCard(index) {
            cards.splice(index, 1);
            displayCards();
        }

        function displayCards() {
            let cardList = document.getElementById("cardList");
            cardList.innerHTML = ""; // Limpiar la lista antes de mostrar las tarjetas

            cards.forEach((card, index) => {
                let item = document.createElement("div");
                item.classList.add("card-item"); //añadiendo clase del div
                item.innerHTML = `
                    <p><strong>Numero de tarjeta:</strong> ${card.cardNumber}</p>
                    <p><strong>Propietario de la tarjeta:</strong> ${card.cardOwner}</p>
                    <p><strong>Banco:</strong> ${card.bank}</p>
                    <p><strong>Compañía:</strong> ${card.compañia}</p>
                    <p><strong>Archivo de estado de cuenta:</strong> estadoCuenta.pdf </p>
                    <button class="ButtonsConfig ButtonEditCard" onclick="editCard(${index})">Editar</button>
                    <button class="ButtonsConfig ButtonEditCard" onclick="deleteCard(${index})">Eliminar</button>
                `;
                cardList.appendChild(item);
            });
        }

