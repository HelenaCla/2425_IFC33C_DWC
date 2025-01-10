/*
Aquest esdeveniment s'executa quan es fa clic en qualsevol lloc de la pàgina.
*/

document.addEventListener('click', (event) => {
    console.log("Tipus d'esdeveniment: $(event.type)");
});

/*
Aquest esdeveniment es dona quan un element guanya el focus i esta preparat per rebre la interacció.
*/
document.addEventListener('focus', (event) => {
    console.log("Tipus d'esdeveniment: $(event.type)");
});

/*
Es dona quan l'usuari prem una tecla.
*/
document.addEventListener('keypress', (event) => {
    console.log("Tipus d'esdeveniment: $(event.type)");
});