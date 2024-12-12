let body = document.getElementsByTagName("body")[0];

let parrafo = document.createElement("p");

function mostrarMensaje() {
  parrafo.innerHTML = "¡Este es un párrafo dinámico!";
  body.appendChild(parrafo);
}

mostrarMensaje();