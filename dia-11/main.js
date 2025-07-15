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

/* ACLARACIONES */
let kevi2n;
const jeff =
  "tiene q tener un valor"; /* las constantes pueden ser de tipo NULL pero nunca undefined */
/* una constante no se puede reasignar pero si se puede mutar el valor q tenga en su interior */
const Benjamin = "estudiante1234";

/* operadores de asignacion */
let cuenta = 2;
cuenta++; /* cuenta =cuenta +1 */
cuenta--; /* cuenta = cuenta -1 */
cuenta += 5; /* cuenta = cuenta +5 */
cuenta -= 7; /* cuenta = cuenta -7 */
cuenta *= 2; /* cuenta = cuenta *2 */
cuenta /= 6; /* cuenta =cuenta /6 */

/* Operador ternario  */
a = 2;
b = 7;
a > b
  ? console.log("a es mayor q b")
  : console.log(
      "b es mayor q a"
    ); /* IF abreviado o condicional de una sola linea */

/* 
    condicion?
    codigo a ejecutarse si la condicion es verdadera
    :codigo a ejecutarse si la condicion es falsa

*/

/*OPERADORES LOGICOS  */

// 1. Crea una variable para cada operación aritmética

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

// 5. Utiliza el operador lógico and

// 6. Utiliza el operador lógico or

// 7. Combina ambos operadores lógicos

// 8. Añade alguna negación

// 9. Utiliza el operador ternario

// 10. Combina operadores aritméticos, de comparáción y lógicas

/* combiancion de operadores logicos */
/* signos de agrupacion de operadores */
(a < b || b < a) && a === b; /* 4+5*7       4+35   o   9*7*/
/* REFACTORIAZACION */
/* (5*6)+(5*8)===5*(6+8) */
(a < b || b == a) && (a < b || b > a);
a < b && (b == a || b > a);
/* ----------------------------------------------------------------------- */

let suma = 12;
let resta = 30;
let multiplicacion = 45;
let divison = 55;
let potencia = 65;
let modulo = 13;

/* --------------------------------------------------- */

let asignacionSuma = suma++;
let asignacionResta = resta--;
let asignacionMultiplicacion = (multiplicacion *= 5);
let asignacionDivision = (divison /= 7);
let asignacionModulo = (modulo %= 2);
/* ---------------------------------------------------- */

console.log(1 < 10);
console.log(24 > 12);
console.log(7 >= 7);
console.log(2 <= 8);
console.log(0 == "0");
/* ----------------------------------------------- */
console.log(!(1 < 10));
console.log(!(24 > 12));
console.log(!(7 >= 7));
console.log(!(2 <= 8));
console.log(!(0 == "0"));
/* -------------------------------------------- */

console.log(true && 0 === "0"); // false
/* -------------------------------------------- */
console.log(18 >= 17 || 17 >= 21); //true
/* --------------------------------------------- */
console.log((18 >= 17 || 17 >= 21) && 18 >= 16); /* TRUE */
console.log((24 <= 24 || 32 < 322) && (18 < 20 || 32 == "32")); //TRUE
console.log((24 <= 24 && 32 < 322) || (18 < 20 && 32 == "32")); //TRUE
console.log((!(18 >= 17) || 17 >= 21) && 18 > 20 && 32 == "32"); //false
console.log(
  (true || false) && (322 === "322" || 322 == "322") && (18 <= 24 || 32 < 2) //TRUE
);
/* -------------------------------------------- */
/* 
  condicion
  ? el codigo q se ejecuta si la condicion es Verdadera
  : el codigo q se ejecuta si la condicion es Falsa
*/
/* dado un numero cualquiera determinar si es par o impar */
/* VALORES Q SE TOMAN X FALSE SIEMPRE 0 "" NULL UNDIFINED FALSE*/
let numeroCualquiera = 22;
let condicionMala;
numeroCualquiera % 2 === 0
  ? console.log("este numero es par")
  : console.log("este numero es impar");

/* utilizando el operador ternario determinar 
si una variable de tipo usuario y de tipo password 
coinciden con admin y 123456 
si el login es correcto mostrar datos correctos
si el login falla en alguno de ambos o en ambos mostrar datos incorrectos
*/

/* verificar si un numero es positivo,negativo o si es cero */
numeroCualquiera = "MENSAJE";
numeroCualquiera > 0
  ? console.log("es positivo")
  : numeroCualquiera === 0
  ? console.log("numero es 0")
  : numeroCualquiera < 0
  ? console.log("es negativo")
  : console.log("ingresa un dato valido");

/* 
utilizando el operador ternario determinar 
si una variable de tipo usuario y de tipo password 
coinciden con admin y 123456 
si el login es correcto mostrar datos correctos
si el login falla cual de los datos esta fallando si el nombre de usuario 
el password o ambos
*/
