function validarRegistro() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let contrasena = document.getElementById('usuario_contrasena').value;
    let email = document.getElementById('email').value;

    if (nombre === '' || apellido === '' || contrasena === '' || email === '') {
        alert('Por favor complete todos los campos.');
        return false;
    }

    // Aquí puedes agregar más validaciones según tus necesidades

    return true; // se envíe si todas las validaciones son exitosas
}
