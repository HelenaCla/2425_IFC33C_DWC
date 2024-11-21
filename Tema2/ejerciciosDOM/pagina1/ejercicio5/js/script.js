// script.js
// Seleccionar todos los encabezados (h1, h2, h3, h4, h5, h6)
const encabezados = document.querySelectorAll("h1, h2, h3, h4");

// Iterar sobre los encabezados y cambiar su estilo
encabezados.forEach(encabezado => {
    encabezado.style.color = "blue";         // Cambiar el color del texto
    encabezado.style.fontFamily = "Arial";  // Cambiar la fuente
    encabezado.style.fontSize = "24px";     // Cambiar el tamaño de fuente
});
