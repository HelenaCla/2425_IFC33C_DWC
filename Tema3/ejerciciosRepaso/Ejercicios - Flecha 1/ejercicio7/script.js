let nombre = navigator.userAgent;
let idioma = navigator.language;

let parrafo;

const mostrarDatos = (nombre, idioma) => {
    parrafo = document.createElement("p");
    parrafo.innerHTML = `El nombre del navegador es ${nombre}`;
    document.body.appendChild(parrafo);
    parrafo = document.createElement("p");
    parrafo.innerHTML = `El idioma del navegador es ${idioma}`;
    document.body.appendChild(parrafo);
}

mostrarDatos(nombre, idioma);