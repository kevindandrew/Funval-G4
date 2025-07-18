/* ARRAYS */
//COMO SE DECLARAN ARRAYS
let nuevoArray = ["kevin", "pablo", "johan", "geraldine", "gabriel"];
/* acceder a los valores de un array */
console.log(nuevoArray[4]);
nuevoArray[0] = "Andrew";
/* CASO ESPECIAL */

const Bolivianos = ["kevin", "Jorge", "Juan", "Pepe"];
Bolivianos.push("PETARDO");

/* METODOS BASICOS DE LOS ARRAYS */
//metodos para agregar elementos al array
let contador = nuevoArray.push("Yamila");

nuevoArray.unshift("Benjamin", "Douglas");

//metodos para eliminar elementos de un array
let ultimoEstudiante = nuevoArray.pop();

let primerEstudiante = nuevoArray.shift();

/* METODO IMPORTANTE!!!!!! */
let largo = nuevoArray.length;
console.log(largo);
console.log(nuevoArray);
/* ARRAY Q VEO ARRAY Q ITERO */
for (let index = 0; index < nuevoArray.length; index++) {
  console.log(nuevoArray[index]);
}

/* las notas de un estudiante de funval estn dentro de un array
ejemplo
let notas =[32,100,25,78]
let notas =[32,100,10,8,0]
let notas =[32]
let notas =[32,77]
realizar una funcion q reciba un array y nos retorne el promedio de las notas de un estudiante :D
*/
