// Array de tareas con categorías
let tareas = [
    { nombre: "Lavar los platos", categoria: "Casa" },
    { nombre: "Hacer la cama", categoria: "Casa" },
    { nombre: "Organizar eventos", categoria: "Trabajo" },
    { nombre: "Modificar página web", categoria: "Trabajo" },
    { nombre: "Jugar a la Playstation", categoria: "Estudios" },
    { nombre: "Hacer los ejercicios de Belén", categoria: "Estudios" }
];

function agruparTareasPorCategoria(tareas) {
    // Crear un objeto para agrupar las tareas por categoría
    let categorias = {};

    // Recorrer las tareas y agruparlas
    for (let i = 0; i < tareas.length; i++) {
        let tarea = tareas[i];
        if (!categorias[tarea.categoria]) {
            categorias[tarea.categoria] = [];
        }
        categorias[tarea.categoria].push(tarea.nombre);
    }

    return categorias;
}

function mostrarTareasEnDOM() {
    // Obtener el contenedor principal
    let contenedor = document.getElementById("tareas");

    // Agrupar las tareas por categoría
    let categorias = agruparTareasPorCategoria(tareas);

    // Recorrer las categorías y crear elementos para el DOM
    for (let categoria in categorias) {
        // Crear un título <h2> para la categoría
        let titulo = document.createElement("h2");
        titulo.textContent = categoria;
        contenedor.appendChild(titulo);

        // Crear una lista <ul> para las tareas de esta categoría
        let lista = document.createElement("ul");

        // Agregar las tareas como <li> dentro de la lista
        for (let i = 0; i < categorias[categoria].length; i++) {
            let tarea = categorias[categoria][i];
            let item = document.createElement("li");
            item.textContent = tarea;
            lista.appendChild(item);
        }

        // Agregar la lista al contenedor principal
        contenedor.appendChild(lista);
    }
}

// Llamar a la función para mostrar las tareas
mostrarTareasEnDOM();
