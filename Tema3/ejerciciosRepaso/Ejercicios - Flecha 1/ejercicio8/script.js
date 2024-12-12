const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listaOrdenada = document.createElement('ol');
numeros.forEach(numero => {
    const item = document.createElement('li');
    item.textContent = numero;
    listaOrdenada.appendChild(item);
});
document.body.appendChild(listaOrdenada);