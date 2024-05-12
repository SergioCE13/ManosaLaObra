/* Traemos los componentes que vamos a utilizar para realizar la validación de los campos */
const inputNombre = document.getElementById('input-nombre-usuario');
const inputApellido1 = document.getElementById('input-apellido-paterno');
const inputApellido2 = document.getElementById('input-apellido-materno');
const inputNumTel = document.getElementById('input-numero-telefono');
const inputEmail = document.getElementById('input-email-usuario');
const inputContraseña = document.getElementById("input-contraseña");
const radio1 = document.getElementById('inlineRadio1');
const radio2 = document.getElementById('inlineRadio2');
const radio3 = document.getElementById('inlineRadio3');
const inputDireccion = document.getElementById('input-direccion-envio');
const inputEdad = document.getElementById('input-edad-usuario');
const checkboxTerms = document.getElementById('exampleCheck1');
const buttonSubmit  = document.getElementById('button-submit');


// Variable para almacenar el estado de carga de imágenes
// let imagenesCargadas = false;

// Deshabilitamos el botón del formularo ya que incialmente los campos están vacíos.
buttonSubmit.classList.add('button-disabled');
buttonSubmit.disabled = true;

// Ocultar ambas alertas al principio
document.getElementById("alerta-success").style.display = "none";
document.getElementById("alerta-danger").style.display = "none";

//--------------------------------------- Función para validar que todos los campos del formulario hayan sido llenados ---------------------------------------------------------
function validarCampos(){
    const nombreUsuario = inputNombre.value;    
    const apellidoPaterno = inputApellido1.value;
    const apellidoMaterno= inputApellido2.value;
    const numeroTel = inputNumTel.value;
    const emailUsuario = inputEmail.value;
    const contraseñaUsuario = inputContraseña.value;
    const radioB1 = radio1.checked;
    const radioB2 = radio2.checked;
    const radioB3 = radio3.checked;
    const direccionEnvio = inputDireccion.value;
    const edadUsuario = inputEdad.value;
    const checkboxTermsConditions = checkboxTerms.checked;
 

    //Verificamos que exista contenido en los campos de formulario, es decir que el valor del campo no sea vacío.
    if(nombreUsuario && apellidoPaterno && apellidoMaterno && numeroTel && emailUsuario && contraseñaUsuario &&  (radioB1 || radioB2 || radioB3) && direccionEnvio && edadUsuario && checkboxTermsConditions){
        buttonSubmit.classList.remove('button-disabled'); // Cambiamos el estilo del botón
        buttonSubmit.disabled = false; // Habilitamos el botón
    } else {
        buttonSubmit.classList.add('button-disabled'); // Cambiamos el estilo del botón
        buttonSubmit.disabled = true; // Deshabilitamos el botón
    }
}

// Agregamos escucha de eventos a cada uno de los campos de entrada para llamar a la función validarCampos cuando se ingrese o modifique texto:
inputNombre.addEventListener('input', validarCampos);
inputApellido1.addEventListener('input', validarCampos);
inputApellido2.addEventListener('input', validarCampos);
inputNumTel.addEventListener('input', validarCampos);
inputEmail.addEventListener('input', validarCampos);
inputContraseña.addEventListener('input', validarCampos);
radio1.addEventListener('change', validarCampos);
radio2.addEventListener('change', validarCampos);
radio3.addEventListener('change', validarCampos);
inputDireccion.addEventListener('input', validarCampos);
inputEdad.addEventListener('input', validarCampos);
checkboxTerms.addEventListener('input', validarCampos);


// ----------------------------------------------  Añadimos el escucha de eventos al botón a través de una función anónima.  ----------------------------------------------------------
buttonSubmit.addEventListener('click', function(){ 
    // Obtener la lista de datos de usuario existentes del localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    //Obtenemos los valores de los campos.
    const nombreUsuario = inputNombre.value;
    const apellidoPaterno = inputApellido1.value;
    const apellidoMaterno = inputApellido2.value;
    const numeroTel = inputNumTel.value;
    const emailUsuario = inputEmail.value;
    const radioSeleccionado = obtenerRadioSeleccionado();
    //const imagenes = obtenerNombresImagenes();
    const contraseñaUsuario = inputContraseña.value;
    const direccionEnvio = inputDireccion.value;
    const edadUsuario = inputEdad.value;


    //Creamos un objeto JavaScript para proceder a generar el formato JSON
    const usuarioJSON = { 
        "name" : nombreUsuario,
        "lastName" : apellidoPaterno,
        "lastName2" : apellidoMaterno,
        "category": radioSeleccionado,
        "telephone" : numeroTel,
        "email" : emailUsuario,
        "password" : contraseñaUsuario,
        "adress": direccionEnvio,
        "age": edadUsuario
        //"images": imagenes
    };
    
    // Agregar el nuevo producto a la lista
    usuarios.push(usuarioJSON);

    try {
        // Intentar actualizar el localStorage con la lista de usuarios actualizada
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        //Código para aparecer y desaparecer alertas (aparece la alerta-success)
        document.getElementById("alerta-success").style.display = "block";
    } catch(error) {
        // En caso de error al actualizar el localStorage mostramos una alerta-danger
        document.getElementById("alerta-danger").style.display = "block";
    }
});

// Función para obtener el radio button seleccionado
function obtenerRadioSeleccionado() {
    // Selecciona todos los radio buttons con el nombre "inlineRadioOptions"
    const radios = document.querySelectorAll('input[name="inlineRadioOptions"]');
    let radioSeleccionado = ''; // Variable para almacenar el valor del radio button seleccionado

    // Itera sobre cada radio button
    radios.forEach(radio => {
        // Verifica si el radio button está marcado (seleccionado)
        if (radio.checked) {
            // Si está marcado, asigna su valor a la variable radioSeleccionado
            radioSeleccionado = radio.value;
        }
    });

    // Retorna el valor del radio button seleccionado
    return radioSeleccionado;
}

// Función para obtener los nombres de las imágenes cargadas
//function obtenerNombresImagenes() {
    // Obtiene la lista de archivos seleccionados en el campo de entrada de archivos
    //const files = document.querySelector("input[type=file]").files;
    //const nombresImagenes = []; // Arreglo para almacenar los nombres de las imágenes

    // Verifica si hay archivos seleccionados
   // if (files) {
        // Itera sobre cada archivo seleccionado
        //Array.prototype.forEach.call(files, function(file) {
            // Agrega el nombre del archivo al arreglo nombresImagenes
            //nombresImagenes.push(file.name);
       // });
    //}

    // Retorna el arreglo con los nombres de las imágenes
    //return nombresImagenes;
//}


// ------------------------------------------------------  Función que muestra vista previa de las fotos cargadas por el usuario  -------------------------------------------------

// Esta función se activa cuando se selecciona un archivo usando el campo de entrada de archivo
//function previewFiles() {
    // Selecciona el elemento donde se mostrarán las vistas previas de las imágenes
    //const preview = document.querySelector("#preview");
    // Obtiene la lista de archivos seleccionados
    //const files = document.querySelector("input[type=file]").files;

    // Esta función lee y muestra la vista previa de un archivo
    //function readAndPreview(file) {
        // Se asegura de que el nombre del archivo coincida con nuestros criterios de extensiones
       // if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
            // Crea un nuevo objeto FileReader para leer el archivo
            //const reader = new FileReader();

            // Cuando el archivo se haya cargado, ejecuta esta función
           // reader.addEventListener(
                //"load",
                //() => {
                    // Crea un nuevo elemento de imagen
                    //const image = new Image();
                    // Establece la altura de la imagen
                    //image.height = 100;
                    // Establece el título de la imagen como el nombre del archivo
                    //image.title = file.name;
                    // Establece la fuente de la imagen como los datos codificados en base64 del archivo
                    //image.src = reader.result;
                    // Agrega la imagen al área de vista previa
                    //preview.appendChild(image);
                //},
                //false
            //);

            // Lee el archivo como una URL de datos
            //reader.readAsDataURL(file);

            // Actualiza la variable de estado de carga de imágenes
            //imagenesCargadas = true;

            // Llama a la función para validar los campos cada vez que se carga una imagen
            //validarCampos();
        //}
    //}

    // Si hay archivos seleccionados, itera sobre ellos y muestra las vistas previas
    //if (files) {
        //Array.prototype.forEach.call(files, readAndPreview);
    //}
//}

// Selecciona el campo de entrada de archivo
//const picker = document.querySelector("#browse");
// Agrega un evento de cambio que activará la función previewFiles cuando se seleccionen archivos
//picker.addEventListener("change", previewFiles);