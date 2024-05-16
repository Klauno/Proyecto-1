function validarAgregarCancion() {
    let nombreCancion = document.getElementById("nombreCancion").value;
    let duracion = document.getElementById("duracion").value;
    let linkYoutube = document.getElementById("linkYoutube").value;

    // Verifica si los campos están vacíos o contienen solo espacios en blanco
    if (nombreCancion.trim() === "" || duracion.trim() === "" || linkYoutube.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, complete todos los campos.'
        });
        // Detiene el envío del formulario
        return false;
    }

    // Verifica si la duración es menor que 0
    if (duracion < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La duración debe ser mayor o igual a 0.'
        });
        // Detiene el envío del formulario
        return false;
    }

    // Verifica si la URL de YouTube es válida
    if (!isYouTubeUrlValid(linkYoutube)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese una URL de YouTube válida.'
        });
        // Detiene el envío del formulario
        return false;
    }

    // Permite el envío del formulario si los campos están completos
    Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'La canción se agregó correctamente.'
    });
    return true;
}

// Función para verificar si la URL de YouTube es válida
function isYouTubeUrlValid(url) {
    // Expresión regular para verificar si la URL corresponde a un video de YouTube
    const youtubeUrlPattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    return youtubeUrlPattern.test(url);
}
