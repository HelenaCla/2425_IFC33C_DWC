document.addEventListener("DOMContentLoaded", function () {
let botoIncrementar = document.getElementById("incrementar");

botoIncrementar.addEventListener("click", incrementar);

botoReiniciar = document.getElementById("reiniciar");
botoReiniciar.addEventListener("click", reiniciar);

});

let contador = 0;

function incrementar() {
    contador++;
    document.getElementById("contador").innerText = contador;
}

function reiniciar() {
    contador = 0;
    document.getElementById("contador").innerText = contador;
}