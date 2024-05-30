//La función saveData guarda los datos añadidos en el login en Local Storage
/*function saveData(){  
    //Accediendo al valor de los inputs (username y password)
    let user = document.getElementById("username").value;
    let pwd = document.getElementById("password").value;
    //Creando un Objeto llamado persona
    let person = {username:user, password:pwd};
    //Se establece una variable llamada data en localStorage y le mando mi objeto person
    localStorage.setItem("data", JSON.stringify(person));
} */

//---------------------------------Declarando las funciones para mostrar errores-----------------------------//

//Función para aparecer la alerta AlertaErrorMessageLogin
function  myFunctionAlertaErrorMessageLogin() {
    $('#errorMessageLogin').fadeIn(1000);
    setTimeout(function() { 
        $('#errorMessageLogin').fadeOut(1000); 
    }, 5000);
  }

//Función para aparecer la alerta InicioSesionExitoso
  function  myFunctionInicioSesionExitoso() {
    $('#InicioSesionExitoso').fadeIn(1000);
    setTimeout(function() { 
        $('#InicioSesionExitoso').fadeOut(1000); 
    }, 5000);
  }

//Función para aparecer la alerta InicioSesionExitoso
function  myFunctionErrorInicioSesion() {
    $('#errorInicioSesion').fadeIn(1000);
    setTimeout(function() { 
        $('#errorInicioSesion').fadeOut(1000); 
    }, 5000);
  }
  

//Función para llamar a la Api

async function login() {
    const id = document.getElementById('correo').value;

    const apiUrl =`http://localhost:8081/api/manosalaobrabackend/cliente${id}`; // URL de tu API para obtener los datos del usuario por correo
    try {
        console.log(`Llamando a la API: ${apiUrl}`); ////Utiliza fetch para realizar una solicitud GET a la API.
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('La respuesta de la red no fue correcta');
        }

        const data = await response.json(); ////La respuesta se convierte a un objeto JSON.

        // Suponiendo que los datos se encuentran en propiedades específicas del JSON devuelto
        // Comparar el correo y la contraseña
        if (document.getElementById('correo').value == data['response'].correo && document.getElementById('pwd').value == data['response'].password) {
            // Si la comparación es correcta, redirigir a inicio
            console.log('Inicio de sesión exitoso');
            myFunctionInicioSesionExitoso();
            window.location.href= '../../Index.html';
        } else {
            // Si la comparación falla, mostrar mensaje de error
            console.error('Error de inicio de sesión: Correo o contraseña incorrectos');
            myFunctionErrorInicioSesion();
            //myFunctionAlertaErrorMessageLogin(); // Función para mostrar el error
        }

    } catch (error) {
        console.error('Error al obtener los datos de inicio de sesión', error);
        myFunctionAlertaErrorMessageLogin(); // Función para mostrar el error
    }
}


//const button= document.getElementById('loginButton'); 
//button.addEventListener('click', login);

