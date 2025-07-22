let boton = document.querySelector("#btn");

boton.addEventListener("click", (event) => {
  /* sera ejecutado solamente cuando el evento ocurra */
  if (event.target.classList.contains("bg-green-800")) {
    event.target.classList.remove("bg-green-800");
    event.target.classList.add("bg-red-800");
  } else {
    event.target.classList.add("bg-green-800");
    event.target.classList.remove("bg-red-800");
  }
});

/* 
        ustedes tienen un boton q va alternar entre dia y noche 
        y abajo tendran una imagen de fiona si el boton esta en dia fiona es princesa
        pero si el boton esta en noche fiona es un ogro
*/
