/* Traemos los componentes que vamos a utilizar para realizar la validación de los campos */

const inputNombre = document.getElementById('input-nombre-producto');
const inputPrecio = document.getElementById('input-precio-producto');
const inputDescripcion = document.getElementById('textArea-desc-producto');
const inputInfoAd = document.getElementById('textArea-info-adicional');
const inputStock = document.getElementById('input-stock-producto');
const buttonSubmit = document.getElementById("button-submit");


// Obtenemos los valores que contienen los campos de entrada.
const nombreProducto =  inputNombre.value;
const precioProducto = inputPrecio.value;
const descripcionProducto = inputDescripcion.value;
const infoAdicionalProducto = inputInfoAd.value;
const stockProducto = inputStock.value;


// Deshabilitamos el botón del formularo ya que incialmente los campos están vacíos.
buttonSubmit.classList.add('button-disabled');
buttonSubmit.disabled = true;


function validarCampos(){   
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

//Funcion que muestra vista previa de las fotos cargadas por el usuario
   
function previewFiles() {
        const preview = document.querySelector("#preview");
        const files = document.querySelector("input[type=file]").files;
      
        function readAndPreview(file) {
          // Make sure `file.name` matches our extensions criteria
          if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
            const reader = new FileReader();
      
            reader.addEventListener(
              "load",
              () => {
                const image = new Image();
                image.height = 100;
                image.title = file.name;
                image.src = reader.result;
                preview.appendChild(image);
              },
              false,
            );
      
            reader.readAsDataURL(file);
          }
        }
      
        if (files) {
          Array.prototype.forEach.call(files, readAndPreview);
        }
      }
      
      const picker = document.querySelector("#browse");
      picker.addEventListener("change", previewFiles);
    