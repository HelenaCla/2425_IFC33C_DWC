// creamos un array de todas las cartas

function Carta(valor, palo){
    this.valor=valor;
    this.palo;
}
let arrayValores = ["ace", "2", "3", "4", "5", "6", "7", "8", "9",
    "10", "jack", "queen", "king"];

let arrayPalos = ["clubs", "diamons", "hearts", "spades"];
let baraja = [];
for(let palo of arrayPalos){
    for(let valor of arrayValores){
        baraja.push(new Carta(valor, palo));
    }
}

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


