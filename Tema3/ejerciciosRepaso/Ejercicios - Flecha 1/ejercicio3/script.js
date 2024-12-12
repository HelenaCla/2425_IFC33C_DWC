
const tamañoPantalla = () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let parrafo = document.createElement("p");
    parrafo.innerHTML = `El tamaño de la ventana es ${width} x ${height}`;
    document.body.appendChild(parrafo);
}

tamañoPantalla();
