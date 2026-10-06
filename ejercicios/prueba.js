// ============================================================
// ARCHIVO DE PRUEBAS
// ============================================================

// Importamos las funciones de los ejercicios
const { describirPlato } = require("./01-acceso-a-un-plato");
const { cartaNumerada } = require("./02-carta-numerada");
const { soloDisponibles } = require("./03-solo-disponibles");
const { platosPorCategoria } = require("./04-platos-por-categoria");
const { agregarAlPedido } = require("./05-agregar-al-pedido");
const { cancelarUltimo } = require("./06-cancelar-ultimo");
const { calcularCuenta } = require("./07-calcular-cuenta");
const { cerrarMesa } = require("./08-cerrar-mesa");

// ============================================================
// DATOS DE PRUEBA
// ============================================================

const platos = [
  {
    nombre: "Bandeja paisa",
    precio: 32000,
    categoria: "fuerte",
    disponible: true
  },
  {
    nombre: "Ajiaco",
    precio: 28000,
    categoria: "fuerte",
    disponible: false
  },
  {
    nombre: "Limonada de coco",
    precio: 9000,
    categoria: "bebida",
    disponible: true
  },
  {
    nombre: "Jugo de lulo",
    precio: 7000,
    categoria: "bebida",
    disponible: true
  },
  {
    nombre: "Postre de natas",
    precio: 11000,
    categoria: "postre",
    disponible: true
  }
];

// ============================================================
// PRUEBA 01
// ============================================================

console.log("===== EJERCICIO 01 =====");

console.log(describirPlato(platos, 0));
console.log(describirPlato(platos, 1));
console.log(describirPlato(platos, 9));

// ============================================================
// PRUEBA 02
// ============================================================

console.log("===== EJERCICIO 02 =====");

console.log(cartaNumerada(platos));
console.log(cartaNumerada([]));

// ============================================================
// PRUEBA 03
// ============================================================

console.log("===== EJERCICIO 03 =====");

console.log(soloDisponibles(platos));
console.log("Cantidad:", soloDisponibles(platos).length);
console.log(soloDisponibles([]));

// ============================================================
// PRUEBA 04
// ============================================================

console.log("===== EJERCICIO 04 =====");

console.log(platosPorCategoria(platos, "bebida"));
console.log(platosPorCategoria(platos, "fuerte"));
console.log(platosPorCategoria(platos, "Bebida"));

// ============================================================
// PRUEBA 05
// ============================================================

console.log("===== EJERCICIO 05 =====");

const carta = soloDisponibles(platos);
const pedido = [];

console.log(agregarAlPedido(pedido, carta, 2));
console.log("Pedido:", pedido);

console.log(agregarAlPedido(pedido, carta, 9));
console.log("Pedido:", pedido);

// ============================================================
// PRUEBA 06
// ============================================================

console.log("===== EJERCICIO 06 =====");

const pedidoCancelar = [
  carta[0],
  carta[1]
];

console.log(cancelarUltimo(pedidoCancelar));
console.log("Pedido después de cancelar:", pedidoCancelar);

console.log(cancelarUltimo(pedidoCancelar));
console.log("Pedido después de cancelar:", pedidoCancelar);

console.log(cancelarUltimo(pedidoCancelar));

// ============================================================
// PRUEBA 07
// ============================================================

console.log("===== EJERCICIO 07 =====");

const pedidoCuenta = [
  carta[0],
  carta[1]
];

console.log(calcularCuenta(pedidoCuenta));
console.log(calcularCuenta([{ precio: 1250 }]));
console.log(calcularCuenta([]));

// ============================================================
// PRUEBA 08
// ============================================================

console.log("===== EJERCICIO 08 =====");

console.log(cerrarMesa(platos, [0, 1]));
console.log(cerrarMesa(platos, [0, 9]));
console.log(cerrarMesa(platos, []));