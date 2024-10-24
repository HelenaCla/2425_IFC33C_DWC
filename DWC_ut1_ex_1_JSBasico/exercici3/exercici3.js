/**
 * Classifica una persona segons la seva edat.
 * @param {number} edat - L'edat de la persona.
 * @returns {string} - La classificació de la persona.
 */
function classificarPerEdat(edat) {

    let classificacio;
    // AÑADIR EL CÓDIGO DEL PUNT 1 AQUÍ
    switch (true){ 
        case (edat<0): classificacio = "Edat no vàlida"; break;
        case (edat >= 0 && edat <= 12): classificacio = "Nen/a"; break;
        case (edat > 13 && edat <= 17): classificacio = "Adolescent"; break;
        case (edat <= 64): classificacio = "Adult"; break;
        case (edat >= 65): classificacio = "Persona Major"; break; 
        default:
            classificacio = "sin clasificar";
        break;
    }
    return classificacio;
}
console.log(classificarPerEdat(-5))

// Array d'objectes que representen pacients
const pacients = [
    { nom: "Laura", edat: 5 },
    { nom: "Javier", edat: 15 },
    { nom: "Rosa", edat: 25 },
    { nom: "Antonio", edat: 70 },
    { nom: "Sofia", edat: -3 },
];

// Classificació i impressió de cada pacient
for (const pacient of pacients) {
    console.log(pacient.edat);
   console.log("Per al / a la pacient " + pacient.nom + " (Edat " + pacient.edat + "), la classificació és: "+ classificarPerEdat(pacient.edat));

}