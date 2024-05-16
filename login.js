function validarInicioSesion() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Verifica si los campos están vacíos
  if (email.trim() === "" || password.trim() === "") {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, complete todos los campos.'
      });
      // Detiene el envío del formulario
      return false;
  }

  // Verifica si la longitud de la contraseña es menor a 6 caracteres
  if (password.trim().length < 6) {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'La contraseña debe tener al menos 6 caracteres.'
      });
      // Detiene el envío del formulario
      return false;
  }

  // Envía el formulario si los campos están completos
  return true;
}
