/* IF */ //
//if (condicion) {
//es el codigo q se ejecutara cuando la condicion sea verdadera
//}
//seguimos con el flujo normal
/* --------Ejemplo-------------- */
//verificar si una persona es mayor de edad
let edad = 28;

/* if (edad >= 18) {
  console.log("esta persona es mayor de edad");
}

console.log("flujo normal"); */
/* ---------IF-ELSE-------------- */
/* 
    if(condicion)
    {el codigo q se ejecutara si la condicion es verdadera}
    else{ el codigo q se ejecutara si la condicion es falsa}
*/

if (edad >= 18) {
  console.log("es mayor de edad");
} else {
  console.log("eres menor de edad");
}

/* miembro = true;

if (miembro && edad >= 18) {
  console.log("todo lo q tiene q trabajr");
} */
/* IF-ELSE-IF */
/* 
    if(condicion) 
    {el codigo q se ejecutara si la condicion es verdadera
        if(condicion) 
        {el codigo q se ejecutara si la condicion es verdadera}
    }else{
        if(condicion) 
        {el codigo q se ejecutara si la condicion es verdadera}
        }
*/
let permisoMama = false;
let permisoPapa = true;
edad = 28;

if (edad >= 18) {
  if (permisoMama || permisoPapa) {
    console.log("puedo salir a bailar");
  } else {
    console.log("me quedo en casa");
  }
} else {
  console.log("me quedo en casa");
}
/* verificar q mes del año estamos con un numero del 1 al 12 */
/* --------------swich case--------------- */

let numeroMes = 4;

switch (numeroMes) {
  case 1:
    console.log("enero");
    break;
  case 2:
    console.log("febrero");
    break;
  case 3:
    console.log("marzo");
    break;
  case 4:
    console.log("abril");
    break;
  case 5:
    console.log("mayo");
    break;
  case 6:
    console.log("junio");
    break;
  case 7:
    console.log("julio");
    break;
  case 8:
    console.log("agosto");
    break;
  case 9:
    console.log("septiembre");
    break;
  case 10:
    console.log("octubre");
    break;
  case 11:
    console.log("noviembre");
    break;
  case 12:
    console.log("diciembre");
    break;
  default:
    console.log("ingresa un valor valido");
    break;
}
/* el usuario va ingresar su fecha de nacimiento dia el mes y el año ustedes deberan decirle cuantos dias tiene de vida
nacio el 1 de julio de 2025 vivio 15 dias ustedes deberan tener en cuenta años bisiestos y febrero 
*/
