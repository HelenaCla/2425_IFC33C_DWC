document.addEventListener("DOMContentLoaded", function () {
    let boto = document.getElementById("boto");
    boto.addEventListener("click", function () {
        cambiarText();
    });
});

function cambiarText() {
    alert("Has clicat el botó!");
    alert("El text del botó canviarà!");
    boto.innerText = "Canviat!"; 
}    