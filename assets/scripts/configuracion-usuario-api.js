document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost:8081/api/mao/cliente')
      .then(response => response.json())
      .then(data => {
        document.getElementById("name").innerText = data.nombre;
        document.getElementById("lastnameDad").innerText = data.apellidoPaterno;
        document.getElementById("lastnameMom").innerText = data.apellidoMaterno;
        document.getElementById("email").innerText = data.email;
        document.getElementById("num").innerText = data.telefono;
      });
  });

  function openFormCuenta() {
    fetch('http://localhost:8081/api/mao/cliente/cliente')
      .then(response => response.json())
      .then(data => {
        document.getElementById("firstName").value = data.nombre;
        document.getElementById("middleName").value = data.apellidoPaterno;
        document.getElementById("lastName").value = data.apellidoMaterno;
        document.getElementById("email").value = data.email;
      });
    document.getElementById("editForm").style.display = "block";
  }

  function saveChanges() {
    const nombre = document.getElementById("firstName").value;
    const apellidoPaterno = document.getElementById("middleName").value;
    const apellidoMaterno = document.getElementById("lastName").value;
    const password = document.getElementById("pwd").value;
    const confirmarPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmarPassword) {
      document.getElementById("alerta-danger").style.display = "block";
      return;
    }

    const data = {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      password
    };

    fetch('http://localhost:8081/api/mao/cliente', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        document.getElementById("alerta-success").style.display = "block";
        closeFormCuenta();
      });
  }

  function closeFormCuenta() {
    document.getElementById("editForm").style.display = "none";
  }

  function togglePasswordFields() {
    const passwordFields = document.getElementById("passwordFields");
    if (passwordFields.style.display === "none" || passwordFields.style.display === "") {
      passwordFields.style.display = "block";
    } else {
      passwordFields.style.display = "none";
    }
  }

  function mostrarFormulario(id) {
    const formularios = document.getElementsByClassName("formulario");
    for (let i = 0; i < formularios.length; i++) {
      formularios[i].style.display = "none";
    }
    document.getElementById(id).style.display = "block";
  }