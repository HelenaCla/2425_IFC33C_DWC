// Array de partituras con sus respectivas notas
const partitures = [
    { nom: "La Balanguera", notes: ["DO", "RE", "MI", "FA", "FA", "SOL", "SOL", "LA#", "LA#"] },
    { nom: "Happy Birthday", notes: ["DO", "DO", "RE", "DO", "FA", "MI", "DO", "DO", "RE", "DO", "SOL", "FA"] }
];

// Variable de búsqueda fija
const cerca = ["DO", "RE"]; // Ejemplo fijo

// Función para buscar la secuencia de notas dentro de las partituras
function buscarNotes() {
    partitures.forEach(partitura => {
        let notes = partitura.notes;
        // Convertimos los arrays en strings para poder buscar subsecuencias
        let notesStr = notes.join(" ");
        let cercaStr = cerca.join(" ");
        
        // Verificamos si la secuencia de "cerca" aparece en la partitura
        if (notesStr.includes(cercaStr)) {
            console.log(`${partitura.nom} coincide con la búsqueda: ${cercaStr}`);
        }
    });
}

// Ejecutar la búsqueda
buscarNotes();