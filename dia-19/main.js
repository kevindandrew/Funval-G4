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
