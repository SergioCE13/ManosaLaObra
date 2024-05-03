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

// Deshabilitamos el botón del formulario ya que incialmente los campos están vacíos.
buttonSubmit.classList.add('button-disabled');
buttonSubmit.disabled = true;

//Se valida en la cadena que contiene la letra de a-z, mayuscula y minuscula, ademas de caracteres tildados.
const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;

//Se validan los datos en los campos
function validarCampos() {
    const nombreProducto = inputNombre.value;    
    const precioProducto = inputPrecio.value;
    const descProducto = inputDescripcion.value;
    const InforAdici = inputInfoAd.value;
    const Stock = inputStock.value;
    const RadioButon = document.querySelectorAll('input[name="radio1"]:checked, input[name="radio2"]:checked, input[name="radio3"]:checked, input[name="radio4"]:checked, input[name="radio5"]:checked');
    if (nombreProducto && precioProducto && descProducto && InforAdici && Stock && RadioButon) {
        buttonSubmit.classList.remove('button-disabled');
        buttonSubmit.disabled = false;
    } else {
        buttonSubmit.classList.add('button-disabled');
        buttonSubmit.disabled = true;
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