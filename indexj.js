document.addEventListener("DOMContentLoaded", function() {
    const favoriteRecords = ["disco1", "disco2", "disco3"];
  
    function addFavorites(favorites) {
      const imgs = document.querySelectorAll(".contenedorimg img");
  
    }
  
    addFavorites(favoriteRecords);
  
    const favoriteIcons = document.querySelectorAll(".favorite-icon");
  
    favoriteIcons.forEach((icon) => {
        icon.addEventListener("click", function() {
            icon.classList.toggle("favorito");
            if (icon.classList.contains("favorito")) {
                icon.classList.remove("far");
                icon.classList.add("fas");
            } else {
                icon.classList.remove("fas");
                icon.classList.add("far");
            }
        });
    });
  });
  

