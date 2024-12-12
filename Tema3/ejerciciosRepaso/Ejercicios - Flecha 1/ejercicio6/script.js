let tabla = document.createElement('table');
let thead = document.createElement('thead');
document.body.appendChild(tabla);
tabla.appendChild(thead);
let tr;
let td;
let numero = 5;

const crearTabla = (numero) => {
    
    for (let i = 0; i <= 10; i++) {
        tr = document.createElement('tr');
        thead.appendChild(tr);
        td = document.createElement('td');
        td.textContent = `${numero} x ${i} =`;
        tr.appendChild(td);
        td = document.createElement('td');
        td.textContent = numero * i;
        tr.appendChild(td);
    }
}
crearTabla(numero);