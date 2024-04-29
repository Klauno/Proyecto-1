function validarAgregarCancion() {
    let nombreCancion = document.getElementById("nombreCancion").value;
    let duracion = document.getElementById("duracion").value;

    // Verifica si los campos están vacíos o contienen solo espacios en blanco
    if (nombreCancion.trim() === "" || duracion.trim() === "") {
        alert("Por favor, complete todos los campos.");
        // Detiene el envío del formulario
        return false;
    }
    // Permite el envío del formulario si los campos están completos
    return true;
}
