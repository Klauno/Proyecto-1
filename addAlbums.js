function validarEdicionAlbum() {
    let nombreAlbum = document.getElementById("album").value;
    let lanzamientoAlbum = document.getElementById("lanzamiento").value;
    let descripcionAlbum = document.getElementById("descripcion").val
    // Verificar si los campos están vacíos o contienen solo espacios en blanco
    if (nombreAlbum.trim() === "" || lanzamientoAlbum.trim() === "" || descripcionAlbum.trim() === "") {
        alert("Por favor, complete todos los campos.");
      return false;
    }
    return true;
  }
  