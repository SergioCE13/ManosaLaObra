/* Traemos los componentes que vamos a utilizar para realizar la validación de los campos */

const inputNombre = document.getElementById('input-nombre-producto');
const inputPrecio = document.getElementById('input-precio-producto');
const inputDescripcion = document.getElementById('textArea-desc-producto');
const inputInfoAd = document.getElementById('textArea-info-adicional');
const inputStock = document.getElementById('input-stock-producto');
const buttonSubmit = document.getElementById("button-submit");


// Deshabilitamos el botón del formularo ya que incialmente los campos están vacíos.
buttonSubmit.classList.add('button-disabled');
buttonSubmit.disabled = true;


function validarCampos(){
    const nombreProducto =  inputNombre.value;    
    if(nombreProducto !== ""){
        buttonSubmit.classList.remove('button-disabled');
        buttonSubmit.disabled = false;
    } else {
        buttonSubmit.classList.add('button-disabled');
        buttonSubmit.disabled = true;
    }
}


    // Agregamos escucha de eventos a cada uno de los campos de entrada para llamar a la función validarCampos cuando se ingrese  o modifique texto:
    inputNombre.addEventListener('input', validarCampos);
