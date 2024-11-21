// script.js
// Array de objetos con datos para la tabla
let datos = [
    { nombre: "Javier", edad: 32, email: "javier@example.com" },
    { nombre: "Elena", edad: 29, email: "elena@example.com" },
    { nombre: "Pedro", edad: 45, email: "pedro@example.com" },
    { nombre: "Lucía", edad: 21, email: "lucia@example.com" },
    { nombre: "Martina", edad: 38, email: "martina@example.com" }
];


// Crear la tabla y su cabecera
let tabla = document.createElement("table");
tabla.style.borderCollapse = "collapse";
tabla.style.width = "100%";

// Crear la cabecera de la tabla
let cabecera = document.createElement("thead");
let filaCabecera = document.createElement("tr");

// Agregar los encabezados de las columnas
let encabezados = ["Nombre", "Edad", "Email"];
for (let i = 0; i < encabezados.length; i++) {
    let th = document.createElement("th");
    th.textContent = encabezados[i];
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    th.style.backgroundColor = "#f2f2f2";
    filaCabecera.appendChild(th);
}
cabecera.appendChild(filaCabecera);
tabla.appendChild(cabecera);

// Crear el cuerpo de la tabla
let cuerpo = document.createElement("tbody");

// Agregar las filas de datos
for (let i = 0; i < datos.length; i++) {
    let fila = document.createElement("tr");

    // Crear celdas para cada propiedad del objeto
    let valores = Object.values(datos[i]);
    for (let j = 0; j < valores.length; j++) {
        let td = document.createElement("td");
        td.textContent = valores[j];
        td.style.border = "1px solid black";
        td.style.padding = "8px";
        fila.appendChild(td);
    }

    cuerpo.appendChild(fila);
}

tabla.appendChild(cuerpo);

// Agregar la tabla al DOM
document.body.appendChild(tabla);
