const llibres = [
    {
        títol: "El Petit Príncep",
        autor: {
            nombre: "Antoine",
            apellidos: "de Saint-Exupéry"
        },
        preu: 15.50,
        ISBN: "978-3-16-148410-0",
        editorial: "Editorial Juventud",
        numeroDeEdicio: 1,
        anyDePublicacio: 1943,
        generos: ["Infantil", "Filosofia"]
    },
    {
        títol: "1984",
        autor: {
            nombre: "George",
            apellidos: "Orwell"
        },
        preu: 12.30,
        ISBN: "978-0-452-28423-4",
        editorial: "Signet Classics",
        numeroDeEdicio: 1,
        anyDePublicacio: 1949,
        generos: ["Ficció", "Dystopia"]
    },
    {
        títol: "La casa dels esperits",
        autor: {
            nombre: "Isabel",
            apellidos: "Allende"
        },
        preu: 18.00,
        ISBN: "978-84-204-8276-8",
        editorial: "Plaza & Janés",
        numeroDeEdicio: 2,
        anyDePublicacio: 1982,
        generos: ["Ficció", "Realisme Màgic"]
    },
    {
        títol: "Cien años de soledad",
        autor: {
            nombre: "Gabriel",
            apellidos: "García Márquez"
        },
        preu: 20.00,
        ISBN: "978-0-06-088328-7",
        editorial: "Harper & Row",
        numeroDeEdicio: 1,
        anyDePublicacio: 1967,
        generos: ["Ficció", "Realisme Màgic"]
    },
    {
        títol: "Moby Dick",
        autor: {
            nombre: "Herman",
            apellidos: "Melville"
        },
        preu: 14.50,
        ISBN: "978-1-56619-909-4",
        editorial: "Pleiades Press",
        numeroDeEdicio: 1,
        anyDePublicacio: 1851,
        generos: ["Ficció", "Aventura"]
    }
];
console.log(llibres)

function Autor(nombre, apellidos){
    this.nombre = nombre;
    this.apellidos = apellidos;
    }

function Genero(nombre){
        this.nombre = nombre;
    }

function Generos(Genero){
        this.Genero = Genero;
    }

function Llibre (titol, Autor, preu, ISBN, editorial, numeroDeEdicio, anyDePublicacio, generos){
        this.titol = titol;
        this.Autor = Autor;
        this.preu = preu;
        this.ISBN = ISBN;
        this.editorial = editorial;
        this.numeroDeEdicio = numeroDeEdicio;
        this.anyDePublicacio = anyDePublicacio;
        this.Generos = Generos
    }

let autor1 = new Autor("Antoine", "de Saint-Exepéry");
let infantil = new Genero('Infantil');
let filosofia = new Genero('Filosofia');
let libro1 = new Llibre("El Petit Princep", autor1, "15.1", "978-3-16-148410-0", "Editorial Juventud", "1", "1943", [infantil, filosofia]);
console.log(libro1);
let autor2 = new Autor ("George", "Orwell");
let ficcio = new Genero('Ficcio');
let dystopia = new Genero ('dystopia');
let libro2 = new Llibre("1984", autor2, "12.30", "978-0-452-28423-4", "Signet Classics", "1", "1949", [ficcio, dystopia]);
console.log(libro2);
let autor3 = new Autor("Isabel", "Allende");
let realismeMagic = new Genero("Realisme Mágic");
let libro3 = new Llibre("La casa dels esperits", autor3, "18.00", "978-84-204-8276-8", "Plaza & Janés", 2, 1982, [ficcio, realismeMagic]);
console.log(libro3);
let autor4 = new Autor("Gabriel", "Garcia Marquez");
let libro4 = new Llibre("Cien años de soledad", autor4, 20.00, "978-0-06-088328-7","Harper & Row", 1, 1967, [ficcio, realismeMagic]);
console.log(libro4);
let autor5 = new Autor("Herman", "Melville");
let aventura = new Genero("aventura");
let libro5 = new Llibre("Moby Dick", autor5, 14.50, "978-1-56619-909-4", "Pleiades Press", 1, 1851, [ficcio, aventura]);
console.log(libro5);

let llibres2 = [libro1, libro2, libro3, libro4, libro5];
console.log(llibres2)

