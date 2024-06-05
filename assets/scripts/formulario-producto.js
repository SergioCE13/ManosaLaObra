/* Traemos los componentes que vamos a utilizar para realizar la validación de los campos */
const inputNombre = document.getElementById('input-nombre-producto');
const inputPrecio = document.getElementById('input-precio-producto');
const inputDescripcion = document.getElementById('textArea-desc-producto');
const inputInfoAd = document.getElementById('textArea-info-adicional');
const inputStock = document.getElementById('input-stock-producto');
const buttonSubmit = document.getElementById("button-submit");
const radio1 = document.getElementById('inlineRadio1');
const radio2 = document.getElementById('inlineRadio2');
const radio3 = document.getElementById('inlineRadio3');
const radio4 = document.getElementById('inlineRadio4'); 
const radio5 = document.getElementById('inlineRadio5');
const inputAlto = document.getElementById('input-alto');
const inputAncho = document.getElementById('input-ancho');
const inputLargo = document.getElementById('input-largo');

// Variable para almacenar el estado de carga de imágenes
let imagenesCargadas = false;


// Deshabilitamos el botón del formularo ya que incialmente los campos están vacíos.
buttonSubmit.classList.add('button-disabled');
buttonSubmit.disabled = true;

// Ocultar ambas alertas al principio
document.getElementById("alerta-success").style.display = "none";
document.getElementById("alerta-danger").style.display = "none";

//--------------------------------------- Función para validar que todos los campos del formulario hayan sido llenados ---------------------------------------------------------
function validarCampos(){
    const nombreProducto = inputNombre.value;    
    const precioProducto = inputPrecio.value;
    const descProducto = inputDescripcion.value;
    const InforAdici = inputInfoAd.value;
    const Stock = inputStock.value;
    const radio1Checked = radio1.checked;
    const radio2Checked = radio2.checked;
    const radio3Checked = radio3.checked;
    const radio4Checked = radio4.checked;
    const radio5Checked = radio5.checked;
    const altoProducto = inputAlto.value;
    const anchoProducto = inputAncho.value;
    const largoProducto = inputLargo.value;

    //Verificamos que exista contenido en los campos de formulario, es decir que el valor del campo no sea vacío.
    if(nombreProducto && precioProducto && descProducto && InforAdici && Stock && (radio1Checked || radio2Checked || radio3Checked || radio4Checked || radio5Checked) && altoProducto && anchoProducto && largoProducto && imagenesCargadas){
        buttonSubmit.classList.remove('button-disabled'); // Cambiamos el estilo del botón
        buttonSubmit.disabled = false; // Habilitamos el botón
    } else {
        buttonSubmit.classList.add('button-disabled'); // Cambiamos el estilo del botón
        buttonSubmit.disabled = true; // Deshabilitamos el botón
    }
}

// Agregamos escucha de eventos a cada uno de los campos de entrada para llamar a la función validarCampos cuando se ingrese o modifique texto:
inputNombre.addEventListener('input', validarCampos);
inputDescripcion.addEventListener('input', validarCampos);
inputInfoAd.addEventListener('input', validarCampos);
inputPrecio.addEventListener('input', validarCampos);
inputStock.addEventListener('input', validarCampos);
radio1.addEventListener('change', validarCampos);
radio2.addEventListener('change', validarCampos);
radio3.addEventListener('change', validarCampos);
radio4.addEventListener('change', validarCampos);
radio5.addEventListener('change', validarCampos);
inputAlto.addEventListener('input', validarCampos);
inputAncho.addEventListener('input', validarCampos);
inputLargo.addEventListener('input', validarCampos);

// ----------------------------------------------  Añadimos el escucha de eventos al botón a través de una función anónima.  ----------------------------------------------------------
buttonSubmit.addEventListener('click', function(){ 
    // Obtener la lista de productos existentes del localStorage
    let productos = JSON.parse(localStorage.getItem('productos')) || [];

    //Obtenemos los valores de los campos.
    const nombreProducto = inputNombre.value;
    const precioProducto = inputPrecio.value;
    const descripcionProducto = inputDescripcion.value;
    const infoAdicional = inputInfoAd.value;
    const stockProducto = inputStock.value;
    const radioSeleccionado = obtenerRadioSeleccionado();
    const imagenes = obtenerNombresImagenes();
    const altoProducto = inputAlto.value;
    const anchoProducto = inputAncho.value;
    const largoProducto = inputLargo.value;

    //Creamos un objeto JavaScript para proceder a generar el formato JSON
    const productoJSON = { 
        "name" : nombreProducto,
        "cost" : precioProducto,
        "category": radioSeleccionado,
        "description" : descripcionProducto,
        "aditionalInfo" : infoAdicional,
        "stock" : stockProducto,
        "height": altoProducto,
        "widht": anchoProducto,
        "lenght": largoProducto,
        "images": imagenes
    };
    
    // Agregar el nuevo producto a la lista
    productos.push(productoJSON);

    try {
        // Intentar actualizar el localStorage con la lista de productos actualizada
        localStorage.setItem('productos', JSON.stringify(productos));
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
function obtenerNombresImagenes() {
    // Obtiene la lista de archivos seleccionados en el campo de entrada de archivos
    const files = document.querySelector("input[type=file]").files;
    const nombresImagenes = []; // Arreglo para almacenar los nombres de las imágenes

    // Verifica si hay archivos seleccionados
    if (files) {
        // Itera sobre cada archivo seleccionado
        Array.prototype.forEach.call(files, function(file) {
            // Agrega el nombre del archivo al arreglo nombresImagenes
            nombresImagenes.push(file.name);
        });
    }

    // Retorna el arreglo con los nombres de las imágenes
    return nombresImagenes;
}


// ------------------------------------------------------  Función que muestra vista previa de las fotos cargadas por el usuario  -------------------------------------------------

// Esta función se activa cuando se selecciona un archivo usando el campo de entrada de archivo
function previewFiles() {
    // Selecciona el elemento donde se mostrarán las vistas previas de las imágenes
    const preview = document.querySelector("#preview");
    // Obtiene la lista de archivos seleccionados
    const files = document.querySelector("input[type=file]").files;

    // Esta función lee y muestra la vista previa de un archivo
    function readAndPreview(file) {
        // Se asegura de que el nombre del archivo coincida con nuestros criterios de extensiones
        if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
            // Crea un nuevo objeto FileReader para leer el archivo
            const reader = new FileReader();

            // Cuando el archivo se haya cargado, ejecuta esta función
            reader.addEventListener(
                "load",
                () => {
                    // Crea un nuevo elemento de imagen
                    const image = new Image();
                    // Establece la altura de la imagen
                    image.height = 100;
                    // Establece el título de la imagen como el nombre del archivo
                    image.title = file.name;
                    // Establece la fuente de la imagen como los datos codificados en base64 del archivo
                    image.src = reader.result;
                    // Agrega la imagen al área de vista previa
                    preview.appendChild(image);
                },
                false
            );

            // Lee el archivo como una URL de datos
            reader.readAsDataURL(file);

            // Actualiza la variable de estado de carga de imágenes
            imagenesCargadas = true;

            // Llama a la función para validar los campos cada vez que se carga una imagen
            validarCampos();
        }
    }

    // Si hay archivos seleccionados, itera sobre ellos y muestra las vistas previas
    if (files) {
        Array.prototype.forEach.call(files, readAndPreview);
    }
}

// Selecciona el campo de entrada de archivo
const picker = document.querySelector("#browse");
// Agrega un evento de cambio que activará la función previewFiles cuando se seleccionen archivos
picker.addEventListener("change", previewFiles);
