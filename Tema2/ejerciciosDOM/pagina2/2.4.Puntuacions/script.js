// Array de jugadores con nombre y puntuación
let jugadores = [
    { nombre: "Ana", puntuacion: 85 },
    { nombre: "Luis", puntuacion: 95 },
    { nombre: "María", puntuacion: 78 },
    { nombre: "Carlos", puntuacion: 92 },
    { nombre: "Sofía", puntuacion: 88 }
];

// Función para crear la tabla de puntuaciones ordenada
function crearTablaDePuntuaciones() {
    // Ordenar el array por puntuación de mayor a menor
    jugadores.sort((a, b) => b.puntuacion - a.puntuacion);

    // Crear la tabla
    let tabla = document.createElement("table");

    // Crear la cabecera de la tabla
    let cabecera = document.createElement("thead");
    let filaCabecera = document.createElement("tr");

    // Encabezados
    let columnas = ["Nombre", "Puntuación"];
    for (let i = 0; i < columnas.length; i++) {
        let th = document.createElement("th");
        th.textContent = columnas[i];
        filaCabecera.appendChild(th);
    }
    cabecera.appendChild(filaCabecera);
    tabla.appendChild(cabecera);

    // Crear el cuerpo de la tabla
    let cuerpo = document.createElement("tbody");

    // Agregar filas con datos de los jugadores
    for (let i = 0; i < jugadores.length; i++) {
        let fila = document.createElement("tr");

        // Crear celdas para cada propiedad
        let nombre = document.createElement("td");
        nombre.textContent = jugadores[i].nombre;

        let puntuacion = document.createElement("td");
        puntuacion.textContent = jugadores[i].puntuacion;

        // Agregar celdas a la fila
        fila.appendChild(nombre);
        fila.appendChild(puntuacion);

        // Agregar la fila al cuerpo de la tabla
        cuerpo.appendChild(fila);
    }

    tabla.appendChild(cuerpo);

    // Agregar la tabla al DOM
    document.body.appendChild(tabla);
}

// Llamar a la función para mostrar la tabla en el DOM
crearTablaDePuntuaciones();
