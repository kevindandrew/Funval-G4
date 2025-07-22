//let boton = document.querySelector("#btn");

//boton.addEventListener("click", (event) => {
/* sera ejecutado solamente cuando el evento ocurra */
/*  if (event.target.classList.contains("bg-green-800")) {
    event.target.classList.remove("bg-green-800");
    event.target.classList.add("bg-red-800");
  } else {
    event.target.classList.add("bg-green-800");
    event.target.classList.remove("bg-red-800");
  }
}); */

/* 
        ustedes tienen un boton q va alternar entre dia y noche 
        y abajo tendran una imagen de fiona si el boton esta en dia fiona es princesa
        pero si el boton esta en noche fiona es un ogro
*/
let todo = document.querySelector("#todo");
let botonD = document.querySelector("#btn-dia");
let ogra = document.querySelector("#ogro");
let princesa = document.querySelector("#princesa");
let dia = true;
botonD.addEventListener("click", function (e) {
  todo.classList.toggle("dark");
  dia = !dia;
  if (dia) {
    botonD.textContent = "Dia";
    botonD.classList.add("bg-yellow-500");
    botonD.classList.remove("bg-black");
    ogra.classList.add("hidden");
    princesa.classList.remove("hidden");
  } else {
    botonD.textContent = "Noche";
    botonD.classList.remove("bg-yellow-500");
    botonD.classList.add("bg-black");
    ogra.classList.remove("hidden");
    princesa.classList.add("hidden");
  }
});
