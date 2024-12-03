// Definición de variables
const cards = [
    '2_of_clubs.png', '3_of_clubs.png', '4_of_clubs.png', '5_of_clubs.png', '6_of_clubs.png', 
    '7_of_clubs.png', '8_of_clubs.png', '9_of_clubs.png', '10_of_clubs.png',
    '2_of_diamonds.png', '3_of_diamonds.png', '4_of_diamonds.png', '5_of_diamonds.png', 
    '6_of_diamonds.png', '7_of_diamonds.png', '8_of_diamonds.png', '9_of_diamonds.png', '10_of_diamonds.png',
    '2_of_hearts.png', '3_of_hearts.png', '4_of_hearts.png', '5_of_hearts.png', '6_of_hearts.png', 
    '7_of_hearts.png', '8_of_hearts.png', '9_of_hearts.png', '10_of_hearts.png', 
    '2_of_spades.png', '3_of_spades.png', '4_of_spades.png', '5_of_spades.png', '6_of_spades.png', 
    '7_of_spades.png', '8_of_spades.png', '9_of_spades.png', '10_of_spades.png'
]
let respuesta = 0;
let baraja = [];
let resultado = document.getElementById('resposta');


//PopUp para preguntarle al usuario si quiere o no hacer trampas
function hacerTrampas(){
    while(respuesta != 1 && respuesta != 2) {
        respuesta = prompt("Deseas hacer trampas? elige una opción: \n 1 - Si \n 2 - No")
    }
    let popup = window.open("index2.html", "popup", "width=800, height=300");
    popup.onload = function() {
        if(respuesta == 1) {
            popup.jugarConTrampas()
        } else if(respuesta == 2) {
            popup.jugarSinTrampas()
        }
    }
}

// Función para obtener un número aleatorio
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

//Mostrar las cartas por pantalla
function mostrarCartas(){
    let cardContainer = document.getElementById('cartas')
    cardContainer.innerHTML = ''
    resultado.innerHTML = ''

    // Selección de cartas aleatorias
    while (baraja.length < 5) {
        let randomIndex = getRandomInt(cards.length)
        let selectedCard = cards[randomIndex]
        if (!baraja.includes(selectedCard)) {
            baraja.push(selectedCard)
        }
    }
    
    // Mostrar las cartas seleccionadas
    baraja.forEach(card => {
        let img = document.createElement('img')
        img.src = `cards/${card}`
        cardContainer.appendChild(img)
    })
    return baraja
}
//Función para jugar sin trampas. 
function jugarSinTrampas() {
    baraja = mostrarCartas()
    comprobar(baraja)
}


//Función para jugar con trampas
function jugarConTrampas(){
    baraja = mostrarCartas()
    resultado.textContent = "¡Has ganado la partida!"
}

//Comprobar el resultado
function comprobar(baraja){
    let resultado = document.getElementById('resposta')
    if (isPair(baraja)) {
        resultado.textContent = "¡Tienes una pareja!"
    } else {
        resultado.textContent = "No tienes una combinación ganadora."
    }
}

//Comprobar si hay Parejas
function isPair(cards) {
    const counts = {}
    
    for (const card of cards) {
        const value = card.split('_')[0]
        counts[value] = (counts[value] || 0) + 1
    }

    return Object.values(counts).includes(2)
}