// creamos un array de todas las cartas
const baraja = [
    '2_of_clubs.png', '3_of_clubs.png', '4_of_clubs.png', '5_of_clubs.png', '6_of_clubs.png', '7_of_clubs.png', '8_of_clubs.png', '9_of_clubs.png', '10_of_clubs.png', 'jack_of_clubs.png', 'queen_of_clubs.png', 'king_of_clubs.png', 'ace_of_clubs.png', // Tréboles
    '2_of_diamonds.png', '3_of_diamonds.png', '4_of_diamonds.png', '5_of_diamonds.png', '6_of_diamonds.png', '7_of_diamonds.png', '8_of_diamonds.png', '9_of_diamonds.png', '10_of_diamonds.png', 'jack_of_diamonds.png', 'queen_of_diamonds.png', 'king_of_diamonds.png', 'ace_of_diamonds.png', // Diamantes
    '2_of_hearts.png', '3_of_hearts.png', '4_of_hearts.png', '5_of_hearts.png', '6_of_hearts.png', '7_of_hearts.png', '8_of_hearts.png', '9_of_hearts.png', '10_of_hearts.png', 'jack_of_hearts.png', 'queen_of_hearts.png', 'king_of_hearts.png', 'ace_of_hearts.png', // Corazones
    '2_of_spades.png', '3_of_spades.png', '4_of_spades.png', '5_of_spades.png', '6_of_spades.png', '7_of_spades.png', '8_of_spades.png', '9_of_spades.png', '10_of_spades.png', 'jack_of_spades.png', 'queen_of_spades.png', 'king_of_spades.png', 'ace_of_spades.png'  // Picas
];

//Funcion para barajar de manera aleatoria 
function barajar(baraja){
    return baraja.sort(() => Math.random() - 0.5);
}

//Función para repartir las 5 cartas del array
function repartir(){
    barajaActual = barajar(baraja);
    barajaJugador = barajaActual.slice(0,5);
    return barajaJugador;
}

//Comprobar parella

function comprovar(valores) {
    for (let i = 0; i < valores.length; i++) {
        for (let j = i + 1; j < valores.length; j++) {
            if (valores[i] === valores[j]) {
                return true; 
            }
        }
    }
    return false; 
}


function jugar(){

    //Mesclem les cartes
    const cartesMesclades = barajar(baraja);

    //Cram les 5 cartes del jugador
    const cartesJugador = repartir(cartesMesclades);

    //Mostrar cartes per pantalla
    document.getElementById('cartas').innerHTML = '';
    cartesJugador.forEach(carta => {
        const img = document.createElement('img');
        img.src = './cards/' + carta;
        img.url = carta;
        document.getElementById('cartas').appendChild(img);        
    });

    //Separam els valors a comparar de la resta del nom de la imatge
    const valores = cartesJugador.map(carta => carta.split('_')[0]);

    //Verifiquem si hi ha parelles
    const hiHaParella = comprovar(valores);

    //mostram resultat per pantalla:

    if(hiHaParella){
        document.getElementById('resposta').innerText = 'Tens una parella, has guanyat!'
    }else{
        document.getElementById('resposta').innerText = 'No hi ha cap parella'
    }

}   


