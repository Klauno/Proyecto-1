document.addEventListener("DOMContentLoaded", function() {
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
