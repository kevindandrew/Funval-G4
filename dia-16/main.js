/* 
Hola equipo de desarrollo, me gustaría que me hagan una pequeña 
prueba para saber si podrían integrarse a nuestro equipo de trabajo.
Estoy necesitando una vista sencilla para un catálogo filtrado de productos 
que tenemos en nuestra base de datos. Por el momento no necesito nada interactivo, 
solo que se muestre una sola categoría de productos al cargar la página.
------------------------------------------------------------------------
LO QUE NECESITO
Mostrar solo los productos de una categoría (puede ser "Tecnología", "Hogar", etc.).
La categoría debe ser elegida manualmente en el código.
No quiero botones aún ni filtros dinámicos. Solo quiero ver una categoría en pantalla.
Cada producto debe mostrar:
Imagen
Nombre
Categoría
Precio con el signo $
Deben usar JavaScript para insertar los productos dentro del HTML.
Quiero que mi equipo practique lo siguiente:
Cómo seleccionar un elemento del DOM (getElementById, querySelector)
Cómo modificar el contenido (innerHTML)
Uso de for y if para filtrar
Cada tarjeta de producto debe tener buen estilo, con sombras, padding y que se vea moderno.
 
****Bonus (opcional)*****
Si alguno del equipo ya sabe un poco más, pueden:

Crear una función para renderizar cualquier categoría.

Cambiar manualmente la categoría seleccionada para verificar que funciona con "Ropa" o "Ferretería" usando eventos.

Mostrar el número total de productos mostrados al final.
-------------------------------------------------------------------------------------------
¿Cómo presentarlo?
Me gustaría que trabajen en equipo, que usen GitHub con ramas y pull requests.
Cada persona debe encargarse de una parte: estructura HTML, estilos, lógica JS, etc.
Envíenme el link al repositorio con las ramas integradas y funcionando.
NO PUEDEN USAR PROGRAMACION MODULAR TODO DEBERA SER PRESENTADO EN main.js
-------------------------------------------------------------------------------------------
QUEDA TOTALMENTE PROHIBIDO MODIFICAR ALTERAR AGREGAR O ELIMINAR DATOS DEL ARRAY productos
*/
const productos = [
  { nombre: "Laptop Lenovo", categoria: "Tecnología", precio: 1500 },
  { nombre: "Celular Samsung", categoria: "Tecnología", precio: 1200 },
  { nombre: "Auriculares JBL", categoria: "Tecnología", precio: 300 },
  { nombre: "Mouse Logitech", categoria: "Tecnología", precio: 150 },
  { nombre: "Teclado Redragon", categoria: "Tecnología", precio: 200 },

  { nombre: "Sofá 3 plazas", categoria: "Hogar", precio: 850 },
  { nombre: "Mesa de comedor", categoria: "Hogar", precio: 400 },
  { nombre: "Lámpara de pie", categoria: "Hogar", precio: 90 },
  { nombre: "Alfombra persa", categoria: "Hogar", precio: 300 },
  { nombre: "Silla ergonómica", categoria: "Hogar", precio: 220 },

  { nombre: "Remera blanca", categoria: "Ropa", precio: 50 },
  { nombre: "Pantalón jeans", categoria: "Ropa", precio: 120 },
  { nombre: "Campera de cuero", categoria: "Ropa", precio: 350 },
  { nombre: "Zapatillas Nike", categoria: "Ropa", precio: 250 },
  { nombre: "Gorra negra", categoria: "Ropa", precio: 40 },

  { nombre: "Martillo", categoria: "Ferretería", precio: 60 },
  { nombre: "Taladro eléctrico", categoria: "Ferretería", precio: 400 },
  { nombre: "Caja de herramientas", categoria: "Ferretería", precio: 220 },
  { nombre: "Destornillador", categoria: "Ferretería", precio: 30 },
  { nombre: "Cinta métrica", categoria: "Ferretería", precio: 25 },
];
/* todos los integrantes tendran 15pts adicionales en la calificacion de su MP */
