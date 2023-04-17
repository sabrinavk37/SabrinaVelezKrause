let continuar = true;
let graciasPor = 0;
const nombreApellido = prompt("Ingrese nombre y apellido");
const email = prompt("Ingrese su email");

const planes = [
  {
    nombre: "Nutricion",
    descripcion: "Un plan diseñado para mejorar tu alimentación y alcanzar tus metas de salud.",
    precio: 3500
  },
  {
    nombre: "Fitness",
    descripcion: "Un plan de entrenamiento personalizado para lograr tus objetivos físicos.",
    precio: 4000
  },
  {
    nombre: "Spa",
    descripcion: "Un plan relajante y revitalizante para cuidar tu cuerpo y mente.",
    precio: 10000
  },
  {
    nombre: "Mercado Saludable",
    descripcion: "Un plan para aprender a elegir los alimentos más saludables en el supermercado.",
    precio: 500
  }
];

let carrito = []; // Array para almacenar las opciones elegidas
let total = 0; // Variable para llevar la cuenta del precio total

while (continuar) {
  let opcion;
  do {
    opcion = parseInt(prompt("Desea agregar al carrito el plan de.\n 1-Nutricion 2-Fitness 3-Spa 4-Mercado Saludable."));
  } while (isNaN(opcion) || opcion >= 4 || opcion < 1);

  const planElegido = planes[opcion - 1];
  alert("Se ha agregado el plan de " + planElegido.nombre + " con éxito. Descripción: " + planElegido.descripcion);

  carrito.push(planElegido); // Agregar opciones elegidas al carrito
  total += planElegido.precio; // Sumar el precio

  continuar = confirm("Desea agregar más planes?");
}

// Mostrar resumen al usuario
let resumen = "Resumen de la compra:\n";
for (let i = 0; i < carrito.length; i++) {
  resumen += `${i + 1}. ${carrito[i].nombre}: $${carrito[i].precio}\n`;
}
resumen += `Total: $${total}`;


graciasPor = alert(`Ya enviamos a tu email toda la información de tu plan. Que disfrutes este gran camino saludable.\n\n${resumen}`);