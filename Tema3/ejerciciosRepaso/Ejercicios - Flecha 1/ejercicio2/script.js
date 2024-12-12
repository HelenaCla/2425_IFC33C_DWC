// Crear los elementos de la página
const titulo = document.createElement('h1');
titulo.innerHTML = 'Lista de Nombres';
document.body.appendChild(titulo);

const lista = document.createElement('ul');
lista.id = 'lista-dinamica';
document.body.appendChild(lista);

// Array de nombres
const nombres = ['Miguel', 'Ana', 'Luis', 'María', 'Carlos', 'Elena'];
let listaBucle;
let li;
// Función flecha para generar los elementos de la lista
const generarLista = (array) => {
    listaBucle = document.getElementById('lista-dinamica');
    array.forEach(nombre => {
        li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
};

// Llamar a la función para generar la lista
generarLista(nombres);
