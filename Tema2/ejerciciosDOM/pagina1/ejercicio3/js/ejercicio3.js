
const nombres = ["Ana", "Juan", "María", "Carlos", "Sofía"];

const lista = document.createElement("ul");
let item;
for (let i = 0; i < nombres.length; i++) {
    item = document.createElement("li"); 
    item.textContent = nombres[i]; 
    lista.appendChild(item); 
}

document.body.appendChild(lista);
