    document.getElementById('button-submit').addEventListener('click', function() {
        // Obtener los datos del formulario
        const nombre = document.getElementById('input-nombre-producto').value;
        const precio = document.getElementById('input-precio-producto').value;
        const categoria = document.querySelector('input[name="categoria"]:checked').value;
        const descripcion = document.getElementById('textArea-desc-producto').value;
        const info_adicional = document.getElementById('textArea-info-adicional').value;
        const stock = document.getElementById('input-stock-producto').value;
        const alto = document.getElementById('input-alto').value;
        const ancho = document.getElementById('input-ancho').value;
        const largo = document.getElementById('input-largo').value;
        const imagen = document.getElementById('input-imagen').files[0]; // Solo se considera una imagen

        // Crear objeto FormData para enviar los datos
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('precio', precio);
        formData.append('categoria', categoria);
        formData.append('descripcion', descripcion);
        formData.append('info_adicional', info_adicional);
        formData.append('stock', stock);
        formData.append('alto', alto);
        formData.append('ancho', ancho);
        formData.append('largo', largo);
        formData.append('imagen', imagen);

        // Realizar la petición POST
        fetch('/api/producto', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Mostrar mensaje de éxito
                document.getElementById('alerta-success').classList.add('show');
                document.getElementById('alerta-danger').classList.remove('show');
            } else {
                // Mostrar mensaje de error
                document.getElementById('alerta-success').classList.remove('show');
                document.getElementById('alerta-danger').classList.add('show');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Mostrar mensaje de error
            document.getElementById('alerta-success').classList.remove('show');
            document.getElementById('alerta-danger').classList.add('show');
        });
    });

