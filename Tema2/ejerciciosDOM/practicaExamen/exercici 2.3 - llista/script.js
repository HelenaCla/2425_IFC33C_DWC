const tareas = [
    { nombre: 'Lavar los platos', categoria: 'Casa' },
    { nombre: 'Hacer la compra', categoria: 'Casa' },
    { nombre: 'Estudiar JavaScript', categoria: 'Estudios' },
    { nombre: 'Ir al gimnasio', categoria: 'Trabajo' },
    { nombre: 'Leer un libro', categoria: 'Estudios' }
];

function agruparTareasPorCategoria(tareas) {
    //Crear objeto donde guardar las tareas y categorias

    let categorias = {};

    for (let tarea of tareas){
        if (!categorias[tarea.categoria]) {
            categorias[tarea.categoria] = [];
        }
        categorias[tarea.categoria].push(tarea.nombre);
    }
    return categorias;
}

function mostrarTareas(categorias){

    let ul;
    let li;
    let h2;
    
    for (let categoria in categorias){
        ul = document.createElement('ul');
        h2 = document.createElement('h2');
        h2.textContent = categoria;
        document.body.appendChild(ul);
        ul.appendChild(h2);
        for (let tarea of categorias[categoria]){
            li = document.createElement('li');
            li.textContent = tarea;
            ul.appendChild(li);
        }
    
    }
}

let categorias = agruparTareasPorCategoria(tareas);
mostrarTareas(categorias);