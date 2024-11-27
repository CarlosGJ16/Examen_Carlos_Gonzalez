// Función para calcular salario total con descuento
function calcularSalario() {
    // Solicitar los valores de salario y descuento
    let salario = parseFloat(prompt("Ingrese el salario:"));
    let descuento = parseFloat(prompt("Ingrese el descuento (%):"));

    if (isNaN(salario) || isNaN(descuento)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    // Calcular el total después de aplicar el descuento
    let descuentoTotal = (descuento / 100) * salario;
    let salarioTotal = salario - descuentoTotal;

    // Mostrar el resultado en el contenedor
    document.getElementById("resultado-text").innerText = `El salario total después del descuento es: $${salarioTotal.toFixed(2)}`;
}

// Función para calcular el total de 3 puntajes
function calcularPuntajes() {
    // Solicitar los tres puntajes
    let puntaje1 = parseFloat(prompt("Ingrese el primer puntaje:"));
    let puntaje2 = parseFloat(prompt("Ingrese el segundo puntaje:"));
    let puntaje3 = parseFloat(prompt("Ingrese el tercer puntaje:"));

    if (isNaN(puntaje1) || isNaN(puntaje2) || isNaN(puntaje3)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    // Calcular el puntaje total
    let puntajeTotal = puntaje1 + puntaje2 + puntaje3;

    // Mostrar el resultado en el contenedor
    document.getElementById("resultado-text").innerText = `El puntaje total es: ${puntajeTotal}`;
}

// Función para calcular el 15% de un puntaje
function calcularPorcentaje() {
    // Solicitar el puntaje
    let puntaje = parseFloat(prompt("Ingrese el puntaje:"));

    if (isNaN(puntaje)) {
        alert("Por favor, ingrese un valor válido.");
        return;
    }

    // Calcular el 15% del puntaje
    let porcentaje = (15 / 100) * puntaje;

    // Mostrar el resultado en el contenedor
    document.getElementById("resultado-text").innerText = `El 15% del puntaje es: ${porcentaje.toFixed(2)}`;
}

