let numero = prompt('Dame un número del 1 al 10');

numero = Number(numero)

if (!(numero => 1 && numero <=10)){
    numero;
    console.log("es falso")
}else{
    console.log("es verdadero");
}