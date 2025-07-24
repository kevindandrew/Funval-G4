/* ---------------------------LET/CONST---------------------- */
let a = 12;
let b = 10;
let pepito;
if (a > b) {
  pepito = 322;
} else {
  var juanito = 415;
}

console.log(pepito, juanito);
/* ---------------------TEMPLATE LITERALS---------------- */
let estudiante = {
  nombre: "Juan",
  edad: 28,
  nacionalidad: "Bolivia",
};
/* let mensaje =
  "hola" +
  estudiante.nombre +
  "de edad" +
  estudiante.edad +
  "de nacionalidad" +
  estudiante.nacionalidad; */
let mensaje = `hola ${
  estudiante.nombre === "Kevin" ? "Pablo" : estudiante.nombre
} de edad ${estudiante.edad} de nacionalidad ${estudiante.nacionalidad}`;
console.log(mensaje);
/// crear un objeto de tipo participante q tendra nombre edad profesion ganador
// si el participante es ganador = true entonces mostrar un mensaje q lo felicite por su participacion y le muestre
// q gano 1000000$ pero si ganador = false  entonces mostrar un mensaje q diga siga participando realizar el mensaje
// con template literals
let participantes = [
  {
    nombre: "Kevin",
    edad: 28,
    profesion: "dev",
    ganador: true,
  },
  {
    nombre: "Pablo",
    edad: 33,
    profesion: "dev",
    ganador: true,
  },
  {
    nombre: "Christopher",
    edad: 21,
    profesion: "dev",
    ganador: true,
  },
  {
    nombre: "Geraldine",
    edad: 20,
    profesion: "dev",
    ganador: true,
  },
];
let imagenes = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8QnTRVWcvKveFsSltW2xjg4GPpC7TXJczg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHNme9ZjGytqNSyYaUBow_Zm8t1nljjxRkw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoDzWdZmz2Yp1PzcGu3JhWVc_lRwRMbJhow&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNouQ-waXcFlanN0w1wd7h7EMJo78zr3G3w&s",
];
let ganador = document.querySelector("#ganador");

for (let j = 0; j < participantes.length; j++) {
  if (participantes[j].ganador) {
    ganador.innerHTML += `
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-4">
    <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span class="sr-only">Open dropdown</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button>
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="${imagenes[j]}" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">${participantes[j].nombre}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">${participantes[j].profesion}</span>
        <div class="flex mt-4 md:mt-6">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">llamar ganador</a>
            <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">mensaje</a>
        </div>
    </div>
</div>
`;
  }
}
/* --------------------Desestructuracion OBJETOS/ARRAYS------------------ */
// desestructuracion de arrays
let notas = [33, 25, 76, 36, 777];

let [dd, , , , ff = 322] = notas;
let primer = notas[0];
let ultimo = notas[notas.length - 1];

console.log(dd, ff);
console.log(primer, ultimo);
//desestruturacion de Objetos
let est = {
  nombre: "Kevin",
  pais: "Bolivia",
  profesion: "dev",
  celular: {
    marca: "samsung",
    bateria: 5000,
    memoria: { marcaM: "hinex", capacidad: 3000 },
  },
};

let {
  pais,
  celular: {
    marca,
    bateria,
    memoria: { marcaM, capacidad, ranura = "8pines" },
  },
} = est;

console.log(marca);

/* 
    crear una funcion para renderizar una lista de estudiantes 
    esta funcion debera recibir un estudiante a la vez y mostrarlo
*/

let estudiantesFunval = [
  { nombre: "Yamila", pais: "Argentina" },
  { nombre: "Gabriel" },
  { nombre: "Benjamin", pais: "Argentina", edad: 32, mision: true },
  { nombre: "Jeff", pais: "Peru" },
];

/* -----------------propagacion de OBJETOS/ARRAYS--------------------- */
let A = [10, 32, 45, 67];
let B = ["kevin", "juan", "pedro"];
//copia
let arrayKevin = [...A];
console.log(arrayKevin);
//combinacion de 2 o mas arrays
let C = [...A, ...B];
console.log(C);
//CREACION DE UN ARRAY NUEVO APARTIR DE UNO EXISTENTE
let D = [...A, 1, 2, 3, 4, 5, 6, ...B];
console.log(D);
/* --------------------------------------------------------------- */

let persona = {
  nombre: "Clark kent",
  edad: 21,
  profesion: "periodista",
};
let superhero = {
  nombreSuper: "Superman",
  habilidades: "super fuerza",
  edad: 33,
  profesion: "super heroe",
};
///copia del objeto
let personaCopia = { ...persona };
///combinar 2 o mas objetos
let superPersona = { ...persona, ...superhero };
///crear un objeto nuevo apartir de uno existente
let supervillano = { ...persona, maldad: "100%", ciudad: "metropolis" };
console.log(supervillano);
/* ---------------------------------------- */
let persona2 = {
  nombre: "Kevin",
  edad: 28,
  pais: "Bolivia",
  ci: 12765322,
  telefono: 78768015,
};

let profesor = {
  materia: "desarrollo web",
  edad: 34,
  identificador: 3358005012,
};

let resultado = { ...persona2, ...profesor };

let contenedor = document.querySelector("#contenedor-estudiantes");

contenedor.innerHTML = `
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${resultado.nombre}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">edad: ${resultado.edad}</p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">identificador: ${resultado.identificador} -  materia:${resultado.materia}</p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">telefono: ${resultado.telefono}</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        mandar mensaje
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
`;
/* ------------------------------------------------ */
import { cuadrado, habilidades, proyectos } from "./funciones.js";
let lcuadrado = 24;
console.log(habilidades);
console.log(proyectos);
console.log(cuadrado(lcuadrado));
/* 
Hola equipo de desarrollo:
Mi nombre es Kevin R. y necesito que desarrollen un simulador de una 
tienda virtual simple que funcione en el navegador y esté 
hecho completamente en JavaScript moderno.

Quiero un código bien organizado, dividido en módulos (import/export), y que responda a acciones del usuario (eventos).

 Requerimientos del sistema
1.  Catálogo de productos
Debe haber al menos 6 productos (cada uno con: id, nombre, precio, categoría).

Mostrar los productos en una lista o tarjetas dentro del HTML.

Cada producto debe tener un botón para agregarlo al carrito.

Toda la lista de productos debe estar en un archivo llamado products.js.

2. Carrito de compras
Crear un objeto o array que represente el carrito.

Al hacer clic en “Agregar al carrito”, el producto debe añadirse al carrito.

Mostrar el contenido del carrito en pantalla:

Nombre del producto

Precio unitario

Cantidad

Precio total del producto (precio * cantidad)

Permitir quitar productos del carrito con un botón.

Este comportamiento debe estar manejado en el archivo cart.js.

3. Total y descuentos
Calcular y mostrar el total de la compra.

Si el total supera los $1000, aplicar un 10% de descuento.

El cálculo debe estar en un archivo llamado checkout.js.

4. ✅ Finalizar compra
Un botón “Finalizar compra” debe:

Mostrar un resumen final (productos, total con y sin descuento).

Vaciar el carrito automáticamente.

Mostrar un mensaje de agradecimiento.

Todo este flujo también debe manejarse en checkout.js.

5. Uso obligatorio de temas vistos
Módulos (import/export): separar claramente la lógica entre archivos.

Eventos (click): para botones de agregar, quitar y finalizar.(recomendacion usar delegacion de eventos)

Desestructuración: usar al acceder a propiedades de objetos (const { nombre, precio } = producto).

Spread operator(propagacion):

Para clonar productos al agregarlos al carrito.

Para actualizar listas de forma inmutable.

Rest parameters: usarlo en al menos una función, por ejemplo para agregar varios productos al carrito de una vez.

*/
