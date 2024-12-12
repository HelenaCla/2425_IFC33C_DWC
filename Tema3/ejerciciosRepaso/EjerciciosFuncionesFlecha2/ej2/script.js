const personas = [
    { nombre: 'Ana', edad: 28 },
    { nombre: 'Luis', edad: 35 },
    { nombre: 'Carlos', edad: 22 },
    { nombre: 'Marta', edad: 30 }
];

// Ordenar personas por edad
personas.sort((a, b) => a.edad - b.edad);

// Crear tabla y encabezado
const tabla = document.createElement('table');
const encabezado = document.createElement('tr');
const encabezadoNombre = document.createElement('th');
encabezadoNombre.textContent = 'Nombre';
const encabezadoEdad = document.createElement('th');
encabezadoEdad.textContent = 'Edad';

encabezado.appendChild(encabezadoNombre);
encabezado.appendChild(encabezadoEdad);
tabla.appendChild(encabezado);

// Añadir filas a la tabla
personas.forEach(persona => {
    const fila = document.createElement('tr');
    const celdaNombre = document.createElement('td');
    celdaNombre.textContent = persona.nombre;
    const celdaEdad = document.createElement('td');
    celdaEdad.textContent = persona.edad;

    fila.appendChild(celdaNombre);
    fila.appendChild(celdaEdad);
    tabla.appendChild(fila);
});

// Agregar la tabla al cuerpo del documento
document.body.appendChild(tabla);