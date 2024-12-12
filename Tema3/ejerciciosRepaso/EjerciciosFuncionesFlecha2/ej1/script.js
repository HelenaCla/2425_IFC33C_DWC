// Crear un array de números
const numeros = [5, 3, 8, 1, 2, 7, 4, 6];

// Ordenar el array en orden ascendente
const numerosAsc = [...numeros].sort((a, b) => a - b);

// Ordenar el array en orden descendente
const numerosDesc = [...numeros].sort((a, b) => b - a);

// Función para mostrar los números en el DOM dentro de una lista <ul>
const mostrarNumeros = (numeros, id) => {
    const ul = document.createElement('ul');
    numeros.forEach(numero => {
        const li = document.createElement('li');
        li.textContent = numero;
        ul.appendChild(li);
    });
    document.getElementById(id).appendChild(ul);
};

// Crear contenedores en el DOM
const containerAsc = document.createElement('div');
containerAsc.id = 'ascendente';
document.body.appendChild(containerAsc);

const containerDesc = document.createElement('div');
containerDesc.id = 'descendente';
document.body.appendChild(containerDesc);

// Mostrar los números ordenados en el DOM
mostrarNumeros(numerosAsc, 'ascendente');
mostrarNumeros(numerosDesc, 'descendente');