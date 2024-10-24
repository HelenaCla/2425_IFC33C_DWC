
class NIF{
    constructor(numero, letra) {
        this.numero = numero;
        this.letra = letra;
    }
}

function esCorrecto(NIF){
    let letras =["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    numeroNif = Number (NIF.numero);
    let resto = numeroNif % 23;
        if(NIF.letra === letras[resto]){
            console.log("escorrecto");
        }else{
        console.log("no es correcto");
        }
}

let miNif = new NIF('78220843', 'M');
let otronif = new NIF('4356782', 'E')

esCorrecto(miNif);
esCorrecto(otronif);