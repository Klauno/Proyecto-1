let tickets = {
    "MIAMI": 100,
    "SAN DIEGO": 100,
    "RIVERSIDE": 3,
    "PEACHTREE CITY": 0,
    "NASHVILLE": 2
  };
  
  document.addEventListener("DOMContentLoaded", function() {
    // Pedir al usuario que ingrese su nombre
    let nombre = prompt("Por favor, ingresa tu nombre (mínimo 3 letras):");
  
    // Verificar si se ingresó un nombre válido
    while (!nombre || nombre.trim().length < 3 || !/^[a-zA-Z]+$/.test(nombre)) {
      nombre = prompt("El nombre debe tener al menos 3 letras y no debe contener números ni caracteres especiales. Por favor, ingresa tu nombre nuevamente:");
    }
  
    // Convertir el nombre a mayúsculas
    nombre = nombre.toUpperCase();
  
    // Mostrar el saludo con el nombre en mayúsculas
    const spanWelcome = document.getElementById("welcome");
    const iconoTickets = document.createElement("i");
    iconoTickets.classList.add("fas", "fa-ticket-alt");
    spanWelcome.textContent = `¡Hola, ${nombre}! `;
    spanWelcome.appendChild(iconoTickets);
  
    // Pedir al usuario que ingrese su edad
    let edad = prompt(`Hola ${nombre}, ¿Cuál es tu edad?`);
  
    // Verificar si se ingresó una edad válida
    while (!edad || isNaN(edad) || parseInt(edad) < 1) {
      edad = prompt("Por favor, ingresa una edad válida:");
    }
  
    // Convertir la edad a un número entero
    edad = parseInt(edad);
  
    // Verificar si el usuario es mayor de 18 años
    if (edad >= 18) {
      // Preguntar si quiere comprar entradas
      const comprarEntradas = confirm("¿Te gustaría comprar entradas?");
  
      // Mostrar un mensaje si el usuario quiere comprar entradas
      if (comprarEntradas) {
        alert("¡Genial! Puedes encontrar las entradas en nuestra sección de eventos.");
      }
    } else {
      Swal.fire({
        title: "¡Lo siento!",
        text: "Debes ser mayor de 18 años para comprar tickets.",
        icon: "warning"
      }).then(() => {
        const buttons = document.querySelectorAll(".boton");
        buttons.forEach(button => {
          button.disabled = true;
          button.style.backgroundColor = "red";
        });
      });
    }
  });
  
  // Función para comprar tickets y actualizar la disponibilidad
  function getTickets(lugar) {
    if (tickets[lugar] > 0) {
      tickets[lugar]--;
      Swal.fire(
        "¡Compra exitosa!",
        "Has comprado un ticket para el concierto en " + lugar,
        "success"
      );
      disableSoldOutButtons(); // Deshabilitar botones agotados
    } else {
      Swal.fire(
        "¡Lo siento!",
        "Los tickets para el concierto en " + lugar + " están agotados.",
        "warning"
      );
    }
    
    disableSoldOutButtons(); // Deshabilitar botones agotados
  }
  
  // Función para deshabilitar botones agotados
  function disableSoldOutButtons() {
    const buttons = document.querySelectorAll(".boton");
    for (let lugar in tickets) {
      if (tickets[lugar] === 0) {
        buttons.forEach(button => {
          if (button.previousElementSibling.textContent.includes(lugar)) {
            button.disabled = true;
            button.textContent = "SOLD OUT";
            button.style.backgroundColor = "gray"; // Cambiar el color de fondo del botón
            button.style.color = "white"; // Cambiar el color del texto del botón
          }
        });
      }
    }
  }
  