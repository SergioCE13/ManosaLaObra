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
  

//-------------------------------------Función para llamar a la Api--------------------------------------

function login(){ 
    const correoElectronico = document.getElementById('correo').value;
    const url = `https://manos-a-la-obra.onrender.com/api/mao/cliente/${correoElectronico}`;

    //fetch para metodo get
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Guardado', data);
            const pwd = document.getElementById('pwd').value;
            if(data.password == pwd){
                myFunctionInicioSesionExitoso();
                console.log("La contraseña es correcta");
                window.location.href = '../html/Index2.html';
            }else{
                console.log("Las contraseñas no coinciden");
            }
        })
        .catch(error => {
            console.log(error);
        })
};

const button= document.getElementById('loginButton'); 
button.addEventListener('click', login);
