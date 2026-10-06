// ============================================================
// Ejercicio 03 · Solo los platos disponibles
// ============================================================
// Algunos platos están agotados (disponible: false). El restaurante
// quiere la "carta del día": solo los platos que sí se pueden pedir.
//
// Crea la función soloDisponibles(menu) que retorne un array NUEVO
// con los platos (los objetos completos) cuyo disponible sea true,
// en el mismo orden del menú.
//
// Regla: el menú original NO se modifica (debe seguir con todos sus platos).
//
// Ejemplos (con el menú del README):
//   soloDisponibles(menu).length → 4   (el Ajiaco está agotado)
//   soloDisponibles(menu)[1]     → el objeto de "Limonada de coco"
//   soloDisponibles([])          → []
//
// Pista: es el mismo patrón de cursosEconomicos de la clase,
// con otra condición.
// ============================================================

// ============================================================
// Ejercicio 03 · Solo los platos disponibles
// ============================================================

function soloDisponibles(menu) {
  const disponibles = [];

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].disponible === true) {
      disponibles.push(menu[i]);
    }
  }

  return disponibles;
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { soloDisponibles };