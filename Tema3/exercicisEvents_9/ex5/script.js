document.addEventListener("DOMContentLoaded", () => {
    let element1 = document.getElementById("element1");
    let element2 = document.getElementById("element2");
    let element3 = document.getElementById("element3");

    element1.addEventListener("click", () => {
        mostrarText(element1);
    });

    element2.addEventListener("click", () => {
        mostrarText(element2);
    });

    element3.addEventListener("click", () => {
        mostrarText(element3);
    });
});

function mostrarText(element) {
    alert(`Has clicat sobre l'element: ${element.innerText}`);
}