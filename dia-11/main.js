/* MOSTRAR ELEMENTOS EN CONSOLA */
console.log("hola mundo");
/* CREACION O DECLARACION DE VARIABLES */

let nombreVariable = "el valor asociado"; /* alcance en bloque */
var nombreVar = "el valor"; /* NO SE USA ALCANCE GLOBAL*/

const nombreConst = "el valor de la constante";

/* FORMAS CORRECTAS DE CREAR VARIABLES */

/* let 2variable */
/* let #variable */
/* let $nombrevar = 1;
let _contador = 322;
let nombre;
let apellidoPaterno; */

/* TIPOS DE DATOS PRIMITIVOS */
/* String */
let nombre = "Kevin";
let NOMBRE = "Andrew";
let apellidos = `Rodriguez`;
/* Numerico */
let edad = 28;
/* Booleano */
let masculino = true;
let miembro = true;
/* caracter q en js es lo mismo q String */
let caracter = "k";
/* Undefined */
let aprobado;
/* Null */
let reprobado = null;
/* Big int */
let numeroGrande = 2138762349843560439682873123123132n;
let grandeeeee = BigInt("1273123789127398123");
/* Simbolo */
let simbolo = Symbol("kevin");
/* uso de Strings */
let cantidad = nombre.length;
console.log(cantidad);
/* VERIFICAR EL TIPO DE DATO  DE UNA VARIABLE */
console.log(typeof simbolo);

/* OPERADORES */
let a = 2;
let b = 7;
let estudiante = "Geraldine";
let apellidoEstudiante = "Revilla";
let NombreCompleto;
let resultado;
/* Suma */
resultado = a + b;
NombreCompleto = estudiante + " " + apellidoEstudiante; /* Concatenacion */
//console.log(NombreCompleto);
/* Resta */
resultado = a - b;
/* divison */
resultado = a / b;
/* multiplicacion */
resultado = a * b;
/* Potencia */
resultado = a ** b;
/* Modulo */
resultado = a % b;

/* OPERADORES DE COMPARACION dato IMPORTANTE EL RESULTADO DE TODA COMPARACON SIEMRE SIEMPRE ES UN VALOR BOOLEANO */
let comparacion;
comparacion = a != b; //verifica q sean diferentes
comparacion = a !== b; //verifica q sean diferentes pero tambien diferentes en el tipo de dato
comparacion = a == b; // verifica si es valor es igual sin ver el tipo d dato
comparacion = a === b; // verifica tambien el tipo de dato deben ser del mismo tipo de dato primitivo
comparacion = a > b;
comparacion = a < b;
comparacion = a <= b;
comparacion = a >= b;

/* OPERADORES LOGICOS EL RESULTADO DE TODA COMPARACON SIEMRE SIEMPRE ES UN VALOR BOOLEANO*/
/* AND &&*/
a = 2;
b = 7;
let logico;
logico = a <= b && a <= b; //true5   false1
/* OR || */
logico = a === b || a >= b; //false
/* NOT */
logico = !(a === b);
console.log(logico);
/* conecptos basicos */
// 1. Escribe un comentario en una línea

// 2. Escribe un comentario en varias líneas

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

// 4. Imprime por consola el valor de todas las variables

// 5. Imprime por consola el tipo de todas las variables

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
