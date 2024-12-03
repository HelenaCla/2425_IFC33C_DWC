document.addEventListener('DOMContentLoaded', () => {
    let cerca = []; // Array para guardar las notas introducidas
    const inputNota = document.querySelector('.inputNota');
    const resposta = document.querySelector('.resposta');
    const botoEsborrar = document.querySelector('.boto');
    const resultatsDiv = document.querySelector('.resultats'); // Div donde mostraremos los resultados

    // Definim la classe nota
    class Nota {
        constructor(nom, esSostenida) {
            this.nom = nom.toUpperCase(); // Passam a majuscules
            this.esSostenida = esSostenida; 
        }

        //Per passar l'objecte 
        toString() {
            return this.nom + (this.esSostenida ? '#' : '');
        }
    }

    //Arrays amb partitura
    const partitures = [
        {
            titulo: 'La Balanguera',
            notes: ['DO', 'RE', 'MI', 'FA', 'FA', 'SOL', 'SOL', 'LA#', 'LA#']
        },
        {
            titulo: 'Happy Birthday',
            notes: ['DO', 'DO', 'RE', 'DO', 'FA', 'MI', 'DO', 'DO', 'RE', 'DO', 'SOL', 'FA']
        },
        {
            titulo: 'Sant Antoni i el Dimoni',
            notes: ['DO', 'FA', 'RE', 'MI', 'FA', 'RE', 'DO', 'MI', 'RE', 'SOL', 'LA']
        },
        {
            titulo: 'La Primavera',
            notes: ['FA', 'FA', 'SOL', 'RE', 'MI', 'FA', 'DO', 'RE', 'MI', 'FA']
        }
    ];

    // Funció per processar i afegir al array de recerca
    function addCerca(input) {
        const notaText = input.trim().toUpperCase(); //Passem l'imput a majúscules i li treiem els espais
        const esSostenida = notaText.endsWith('#');  // Verificam si conté '#'
        const nom = esSostenida ? notaText.slice(0, -1) : notaText;

        // Creem la nova nota
        const nota = new Nota(nom, esSostenida);

        // fem que es pugui veure per pantalla
        cerca.push(nota.toString());
    }

    // Per capturar notes per sobre d'un imput
    inputNota.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && inputNota.value.trim() !== "") {
            // Processam la nota amb addCerca
            addCerca(inputNota.value);

            // mostrem les notes per pantalla
            mostrarCerca();

            // natejem l'imput per poder afegir la seguent si escau
            inputNota.value = '';

            // executem la recerca
            cercador();
        }
    });

    // Actualitza el DIV per mostrar les notes
    function mostrarCerca() {
        resposta.textContent = cerca.join(' '); // Mostramos las notas separadas por espacio
    }

    // Recorre les cançons i cerca les coincidencies entre canço i array de recerca
    function cercador() {
        // Limpiamos los resultados previos
        resultatsDiv.innerHTML = '<div class="restext">RESULTATS:</div>';

        // Buscar coincidencias
        let coincidencias = partitures.filter(partitura => {
            // Converteix les partitures en string i cerca a veure si hi troba coincidencies
            return partitura.notes.join(' ').includes(cerca.join(' '));
        });

        // Mostrar resultats 
        if (coincidencias.length > 0) {
            coincidencias.forEach(partitura => {
                const resultatDiv = document.createElement('div');
                resultatDiv.classList.add('resultat');
                resultatDiv.innerHTML = `
                    <div class="titulo">
                        <p>${partitura.titulo}</p>
                        <p class="lletra">Lletra</p>
                    </div>
                    <button class="boto">Reproduir Cançó</button>
                `;
                resultatsDiv.appendChild(resultatDiv);
            });
        } else {
            // en cas de que no hi hagi coincidencies
            const noResultats = document.createElement('div');
            noResultats.classList.add('resultat');
            noResultats.innerHTML = `<p>SENSE RESULTATS</p>`;
            resultatsDiv.appendChild(noResultats);
        }
    }

    // Borrar array de recerca al fer click al botó
    botoEsborrar.addEventListener('click', () => {
        cerca = []; 
        mostrarCerca(); 
        resultatsDiv.innerHTML = '<div class="restext">RESULTATS:</div>'; // Limpiamos los resultados
    });
});
