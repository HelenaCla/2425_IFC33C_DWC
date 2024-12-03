const partitures = [
    { id: 1, title: "Sant Antoni i el Dimoni", language: "ca" },
    { id: 2, title: "La balanguera", language: "ca" },
    { id: 3, title: "Fix You", language: "en" },
    { id: 4, title: "Je te promets", language: "fr" },
    { id: 5, title: "Corazón partío", language: "es" },
    { id: 6, title: "Camins", language: "ca" },
    { id: 7, title: "Yellow", language: "en" },
    { id: 8, title: "Milord", language: "fr" },
    { id: 9, title: "Rayando el sol", language: "es" },
    { id: 10, title: "Boig per tu", language: "ca" },
    { id: 11, title: "Viva La Vida", language: "en" },
    { id: 12, title: "Sous le vent", language: "fr" },
    { id: 13, title: "Color esperanza", language: "es" },
    { id: 14, title: "Bon dia", language: "ca" },
    { id: 15, title: "Clocks", language: "en" },
    { id: 16, title: "Je l'aime à mourir", language: "fr" },
    { id: 17, title: "Nada fue un error", language: "es" },
    { id: 18, title: "Llença't", language: "ca" },
    { id: 19, title: "The Scientist", language: "en" },
    { id: 20, title: "Et si tu n'existais pas", language: "fr" },
    { id: 21, title: "Labios compartidos", language: "es" },
    { id: 22, title: "Corren", language: "ca" },
    { id: 23, title: "Adventure of a Lifetime", language: "en" },
    { id: 24, title: "Quand on n'a que l'amour", language: "fr" },
    { id: 25, title: "Me voy", language: "es" },
    { id: 26, title: "Happy", language: "en" },
    { id: 27, title: "Je ne regrette rien", language: "fr" },
    { id: 28, title: "Héroe", language: "es" },
    { id: 29, title: "Imagine", language: "en" },
    { id: 30, title: "La vie en rose", language: "fr" },
    { id: 31, title: "La camisa negra", language: "es" },
    { id: 32, title: "Som Ocells", language: "ca" },
    { id: 33, title: "Perfect", language: "en" },
    { id: 34, title: "Sous le ciel de Paris", language: "fr" },
    { id: 35, title: "Despacito", language: "es" },
    { id: 36, title: "Una lluna a l'aigua", language: "ca" },
    { id: 37, title: "Shape of You", language: "en" },
    { id: 38, title: "Les Champs-Élysées", language: "fr" },
    { id: 39, title: "La bamba", language: "es" },
    { id: 40, title: "Tramuntana", language: "ca" },
    { id: 41, title: "Rolling in the Deep", language: "en" },
    { id: 42, title: "Comme d'habitude", language: "fr" },
    { id: 43, title: "El perdón", language: "es" },
    { id: 44, title: "Hello", language: "en" },
    { id: 45, title: "Ne me quitte pas", language: "fr" },
    { id: 46, title: "Bailando", language: "es" },
    { id: 47, title: "Thinking Out Loud", language: "en" },
    { id: 48, title: "Non, je ne regrette rien", language: "fr" },
    { id: 49, title: "Vivir mi vida", language: "es" },
    { id: 50, title: "Love Yourself", language: "en" },
    { id: 51, title: "L'hymne à l'amour", language: "fr" },
    { id: 52, title: "Thriller", language: "en" },
    { id: 53, title: "Fernando", language: "en" },
    { id: 54, title: "La cucaracha", language: "es" },
    { id: 55, title: "Mamma Mia", language: "en" },
    { id: 56, title: "Bohemian Rhapsody", language: "en" },
    { id: 57, title: "Hotel California", language: "en" },
    { id: 58, title: "El Mismo Sol", language: "es" },
    { id: 59, title: "Super Trouper", language: "en" },
    { id: 60, title: "Sous le vent", language: "fr" },
    { id: 61, title: "L'amour existe encore", language: "fr" },
    { id: 62, title: "Déjame", language: "es" },
    { id: 63, title: "Yesterday", language: "en" },
    { id: 64, title: "Angel Eyes", language: "en" },
    { id: 65, title: "What’s Going On", language: "en" },
    { id: 66, title: "Escriurem", language: "ca" },
    { id: 67, title: "My Way", language: "fr" },
    { id: 68, title: "Te quiero", language: "es" },
    { id: 69, title: "I Have a Dream", language: "en" },
    { id: 70, title: "Thank You for the Music", language: "en" },
    { id: 71, title: "Le temps des fleurs", language: "fr" },
    { id: 72, title: "Amor eterno", language: "es" },
    { id: 73, title: "Kisses of Fire", language: "en" },
    { id: 74, title: "Lay All Your Love on Me", language: "en" },
    { id: 75, title: "Honey, Honey", language: "en" },
    { id: 76, title: "Imagine", language: "en" },
    { id: 77, title: "King Kong Song", language: "en" },
    { id: 78, title: "Mamma Mia", language: "en" },
    { id: 79, title: "Non, rien de rien", language: "fr" },
    { id: 80, title: "Me enamora", language: "es" },
    { id: 81, title: "Tornarem", language: "ca" },
    { id: 82, title: "In the End", language: "en" },
    { id: 83, title: "Fernando", language: "en" },
    { id: 84, title: "Si tú no estás aquí", language: "es" },
    { id: 85, title: "Yesterday", language: "en" },
    { id: 86, title: "Chiquitita", language: "en" },
    { id: 87, title: "Por ti volaré", language: "es" },
    { id: 88, title: "Ring Ring", language: "en" },
    { id: 89, title: "My Heart Will Go On", language: "en" },
    { id: 90, title: "On écrit sur les murs", language: "fr" },
    { id: 91, title: "Euphoria", language: "en" },
    { id: 92, title: "Libre", language: "es" },
    { id: 93, title: "Sous les étoiles", language: "fr" },
    { id: 94, title: "Like a Prayer", language: "en" },
    { id: 95, title: "Besos en guerra", language: "es" },
    { id: 96, title: "Born to Run", language: "en" },
    { id: 97, title: "Le vent nous portera", language: "fr" },
    { id: 98, title: "Hallelujah", language: "en" },
    { id: 99, title: "Shallow", language: "en" },
    { id: 100, title: "Halo", language: "en" }
];

function mostraPartitures(){
    const taula = document.querySelector('taula');

    //bucle per recorrer totes les cançons i poder-les recorrer
    let fila;
    let idioma;
    let titol;
    let accions;
    let td;
    for (let i = 0; i < partitures.length; i++) {
        // Crea una nueva fila de tabla
        fila = document.createElement('tr');
    
        // Itera sobre las propiedades de cada canción
        for (let j = 0; j < partitures[i].length; j++) {
            // Crea una celda para la propiedad actual
            td = document.createElement('td');
            td.textContent = partitures[i][j];
            fila.appendChild(td);
        }
    
        // Agrega la fila a la tabla
        taula.appendChild();
    

        //creae una fila

        
}