// Arrays con títulos y párrafos
let titulos = [
    "El Principito",
    "1984",
    "Cien años de soledad",
    "Matar a un ruiseñor",
    "Orgullo y prejuicio"
];

let parrafos = [
    "Lo esencial es invisible a los ojos. Solo se ve bien con el corazón. — El Principito",
    "La libertad es la libertad de decir que dos más dos son cuatro. Si se concede esto, todo lo demás vendrá por añadidura. — 1984",
    "El tiempo no pasaba; simplemente daba vueltas en círculos. — Cien años de soledad",
    "Matar a un ruiseñor es un pecado porque los ruiseñores no hacen otra cosa que cantar para nuestro deleite. — Matar a un ruiseñor",
    "Es una verdad universalmente aceptada que un hombre soltero, en posesión de una gran fortuna, necesita una esposa. — Orgullo y prejuicio"
];

// Función para generar un número aleatorio dentro de un rango
function obtenerAleatorio(max) {
    return Math.floor(Math.random() * max);
}

// Función para generar secciones con contenido aleatorio
function generarSecciones() {
    let contenedor = document.getElementById("contenedor"); // Seleccionar el contenedor principal

    for (let i = 0; i < 5; i++) { // Generar 5 secciones
        // Seleccionar un título y un párrafo aleatoriamente
        let tituloAleatorio = titulos[obtenerAleatorio(titulos.length)];
        let parrafoAleatorio = parrafos[obtenerAleatorio(parrafos.length)];

        // Crear una sección <section>
        let seccion = document.createElement("section");
        seccion.style.marginBottom = "20px";

        // Crear el título <h3>
        let h3 = document.createElement("h3");
        h3.textContent = tituloAleatorio;

        // Crear el párrafo <p>
        let p = document.createElement("p");
        p.textContent = parrafoAleatorio;

        // Agregar el título y el párrafo a la sección
        seccion.appendChild(h3);
        seccion.appendChild(p);

        // Agregar la sección al contenedor principal
        contenedor.appendChild(seccion);
    }
}

// Llamar a la función para generar las secciones
generarSecciones();
