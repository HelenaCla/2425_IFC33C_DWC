let numRandom = []

for(let i = 0; i < 15; i++ ){
    numRandom[i] = Math.floor(Math.random() * 10) + 1
}
console.log(numRandom);

for(let i = 0; i < numRandom.length; i++){
    let asteriscos = '*'.repeat(numRandom[i]);
    console.log('El numero de la posición ' + i + " : " + asteriscos);
}