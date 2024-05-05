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

    // Ocultar ambas alertas al principio
    document.getElementById("alerta-success").style.display = "none";
    document.getElementById("alerta-danger").style.display = "none";

// Obtenemos los valores que contienen los campos de entrada.
const nombreProducto =  inputNombre.value;
const precioProducto = inputPrecio.value;
const descripcionProducto = inputDescripcion.value;
const infoAdicionalProducto = inputInfoAd.value;
const stockProducto = inputStock.value;

function validarCampos(){
    const nombreProducto = inputNombre.value;
    if(nombreProducto !== ""){
        buttonSubmit.classList.remove('button-disabled');
        buttonSubmit.disabled = false;
        document.getElementById("alerta-success").style.display = "block";
        document.getElementById("info-nombre-producto").style.display = "none";
    } else {
        buttonSubmit.classList.add('button-disabled');
        buttonSubmit.disabled = true;
        document.getElementById("alerta-danger").style.display = "block";
    }
}


    // Agregamos escucha de eventos a cada uno de los campos de entrada para llamar a la función validarCampos cuando se ingrese  o modifique texto:
    inputNombre.addEventListener('input', validarCampos);


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 3f0040d0ddaa822b32752b9e0548a6f16cbda7ee
    buttonSubmit.addEventListener('click', function(){ 
        // Obtener la lista de productos existentes del localStorage
        let productos = JSON.parse(localStorage.getItem('productos')) || [];
    
        const nombreProducto = inputNombre.value;
        const validaPrecio = inputPrecio.value;
        const validaDescripcion = inputDescripcion.value;
        const validaInfoAd = inputInfoAd.value;
        const validaStock = inputStock.value;
<<<<<<< HEAD
>>>>>>> d0f1d70ef5a3df5f1b11c3f3a7f5568cab4e8c1b
    
=======
      
>>>>>>> 3f0040d0ddaa822b32752b9e0548a6f16cbda7ee
        const productoJSON = { 
            "nombreProducto" : nombreProducto,
            "validaPrecio" : validaPrecio,
            "validaDescripcion" : validaDescripcion,
            "validaInfoAd" : validaInfoAd,
            "validaStock" : validaStock 
        };
    
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> 3f0040d0ddaa822b32752b9e0548a6f16cbda7ee
        // Agregar el nuevo producto a la lista
        productos.push(productoJSON);
    
        // Actualizar el localStorage con la lista de productos actualizada
        localStorage.setItem('productos', JSON.stringify(productos));
    
        alert('Se agregó el producto correctamente');
    });
<<<<<<< HEAD
>>>>>>> d0f1d70ef5a3df5f1b11c3f3a7f5568cab4e8c1b
=======

>>>>>>> 3f0040d0ddaa822b32752b9e0548a6f16cbda7ee

    /*
        Función para obtener el valor seleccionado de los radio buttons
        const radios = document.getElementsByName("inlineRadioOptions")
    function obtenerCategoriaSeleccionada(radios) {
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                return radios[i].value;
                //return 
            }
        }
        return null; // Si ninguno está seleccionado
    }

    para llamar a la función ocuparemos un obtenerCategoriaSeleccionada(radios);
<<<<<<< HEAD
<<<<<<< HEAD
*/
=======
*/


    


    
>>>>>>> d0f1d70ef5a3df5f1b11c3f3a7f5568cab4e8c1b
=======
*/
>>>>>>> 3f0040d0ddaa822b32752b9e0548a6f16cbda7ee
