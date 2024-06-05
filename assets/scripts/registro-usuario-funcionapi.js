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
      const fechaNacimiento = document.getElementById('input-fecha-nacimiento').value;
      const aceptaTerminos = document.getElementById('exampleCheck1').checked;

      // Validar que todos los campos estén llenos
      if (nombre && apellidoPaterno && apellidoMaterno && telefono && email && password && confirmarPassword && genero && fechaNacimiento && aceptaTerminos) {
          // Crear objeto con los datos
          const vendedorData = {
              correo: document.getElementById('input-email').value,
              nombre: document.getElementById('input-nombre-vendedor').value,
              apellidoPaterno: document.getElementById('input-apellido-paterno').value,
              apellidoMaterno: document.getElementById('input-apellido-materno').value,
              genero: document.querySelector('input[name="inlineRadioOptions"]:checked').value,
              telefono: document.getElementById('input-telefono').value,
              fechaNacimiento: document.getElementById('input-fecha-nacimiento').value,
              password: document.getElementById('input-password').value
          };

          // Enviar datos a la API
          fetch('https://manos-a-la-obra.onrender.com/api/mao/cliente', {
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
