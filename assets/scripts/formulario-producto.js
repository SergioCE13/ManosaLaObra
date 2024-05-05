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
    const precioProducto = inputPrecio.value;
    const descProducto = inputDescripcion.value;
    const InforAdici = inputInfoAd.value;
    const Stock = inputStock.value;
    const radio1Checked = radio1.checked;
    const radio2Checked = radio2.checked;
    const radio3Checked = radio3.checked;
    const radio4Checked = radio4.checked;
    const radio5Checked = radio5.checked;

    if(nombreProducto && precioProducto && descProducto && InforAdici && Stock && (radio1Checked || radio2Checked || radio3Checked || radio4Checked || radio5Checked)){
        buttonSubmit.classList.remove('button-disabled');
        buttonSubmit.disabled = false;

        /* //Código para aparecer y desaparecer información del un campo
        document.getElementById("info-nombre-producto").style.display = "none"; */
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

    buttonSubmit.addEventListener('click', function(){ 
        // Obtener la lista de productos existentes del localStorage
        let productos = JSON.parse(localStorage.getItem('productos')) || [];
    
        const nombreProducto = inputNombre.value;
        const validaPrecio = inputPrecio.value;
        const validaDescripcion = inputDescripcion.value;
        const validaInfoAd = inputInfoAd.value;
        const validaStock = inputStock.value;

        const productoJSON = { 
            "nombreProducto" : nombreProducto,
            "validaPrecio" : validaPrecio,
            "validaDescripcion" : validaDescripcion,
            "validaInfoAd" : validaInfoAd,
            "validaStock" : validaStock 
        };
    

        // Agregar el nuevo producto a la lista
        productos.push(productoJSON);
    
        try {
            // Intentar actualizar el localStorage con la lista de productos actualizada
            localStorage.setItem('productos', JSON.stringify(productos));
            //Código para aparecer y desaparecer alertas
            document.getElementById("alerta-success").style.display = "block";
        } catch(error) {
            // En caso de error al actualizar el localStorage
            // Mostrar alerta de error
            document.getElementById("alerta-danger").style.display = "block";
        }
    });


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
  */
