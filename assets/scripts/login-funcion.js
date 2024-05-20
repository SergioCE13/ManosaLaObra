//La función saveData guarda los datos añadidos en el login en Local Storage
function saveData(){  
    //Accediendo al valor de los inputs (username y password)
    let user = document.getElementById("username").value;
    let pwd = document.getElementById("password").value;
    //Creando un Objeto llamado persona
    let person = {username:user, password:pwd};
    //Se establece una variable llamada data en localStorage y le mando mi objeto person
    localStorage.setItem("data", JSON.stringify(person));
} 