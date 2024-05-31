document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registro-vendedor-form');
    const alertaSuccess = document.getElementById('alerta-success');
    const alertaDanger = document.getElementById('alerta-danger');

    // Ocultar alertas inicialmente
    alertaSuccess.style.display = 'none';
    alertaDanger.style.display = 'none';

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el comportamiento por defecto del formulario

        // Recoger datos del formulario
        const nombre = document.getElementById('input-nombre-vendedor').value;
        const apellidoPaterno = document.getElementById('input-apellido-paterno').value;
        const apellidoMaterno = document.getElementById('input-apellido-materno').value;
        const telefono = document.getElementById('input-telefono').value;
        const email = document.getElementById('input-email').value;
        const password = document.getElementById('input-password').value;
        const confirmarPassword = document.getElementById('input-confirmar-password').value;
        const genero = document.querySelector('input[name="inlineRadioOptions"]:checked')?.value;
        const calle = document.getElementById('input-calle').value;
        const numeroInterior = document.getElementById('input-numero-interior').value;
        const numeroExterior = document.getElementById('input-numero-exterior').value;
        const codigoPostal = document.getElementById('input-codigo-postal').value;
        const colonia = document.getElementById('input-colonia').value;
        const delegacion = document.getElementById('input-delegacion').value;
        const estado = document.getElementById('input-estado').value;
        const fechaNacimiento = document.getElementById('input-fecha-nacimiento').value;
        const aceptaTerminos = document.getElementById('exampleCheck1').checked;

        // Validar que todos los campos estén llenos
        if (nombre && apellidoPaterno && apellidoMaterno && telefono && email && password && confirmarPassword && genero && calle && numeroInterior && numeroExterior && codigoPostal && colonia && delegacion && estado && fechaNacimiento && aceptaTerminos) {
            // Crear objeto con los datos
            const vendedorData = {
                nombre,
                apellidoPaterno,
                apellidoMaterno,
                telefono,
                email,
                password,
                confirmarPassword,
                genero,
                direccion: {
                    calle,
                    numeroInterior,
                    numeroExterior,
                    codigoPostal,
                    colonia,
                    delegacion,
                    estado
                },
                fechaNacimiento,
                aceptaTerminos
            };

            // Enviar datos a la API
            fetch('http://localhost:8081/api/manosalaobrabackend/vendedor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(vendedorData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Mostrar alerta de éxito
                    alertaSuccess.style.display = 'block';
                    alertaDanger.style.display = 'none';
                } else {
                    // Mostrar alerta de error
                    alertaSuccess.style.display = 'none';
                    alertaDanger.style.display = 'block';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                // Mostrar alerta de error
                alertaSuccess.style.display = 'none';
                alertaDanger.style.display = 'block';
            });
        } else {
            // Mostrar alerta de error
            alertaSuccess.style.display = 'none';
            alertaDanger.style.display = 'block';
        }
    });
});
