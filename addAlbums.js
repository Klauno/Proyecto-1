function validarEdicionAlbum() {
    let nombreAlbum = document.getElementById("album").value;
    let lanzamientoAlbum = document.getElementById("lanzamiento").value;
    let descripcionAlbum = document.getElementById("descripcion").value;
    let imagenAlbum = document.getElementById("imagen_album").value;

    // Verificar si algún campo está vacío
    if (nombreAlbum.trim() === "" || lanzamientoAlbum.trim() === "" || descripcionAlbum.trim() === "" || imagenAlbum.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, complete todos los campos.',
        });
        return false;
    }

    // Convertir el año de lanzamiento a un número y verificar si está dentro del rango permitido
    lanzamientoAlbum = parseInt(lanzamientoAlbum);
    if (isNaN(lanzamientoAlbum) || lanzamientoAlbum < 1900 || lanzamientoAlbum > 2024) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese un año de lanzamiento válido entre 1900 y 2024.',
        });
        return false;
    }

    // Mostrar el SweetAlert de éxito con una duración extendida
    Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'El álbum se guardó correctamente.',
        timer: 10000 
    });

    return true;
}
