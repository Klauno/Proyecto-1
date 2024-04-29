function validarInicioSesion() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    // Verifica si los campos están vacíos
    if (email.trim() === "" || password.trim() === "") {
      alert("Por favor, complete todos los campos.");
      // Detiene el envío del formulario
      return false;
    }
    // envia el formulario si los campos están completos
    return true;
  }
  