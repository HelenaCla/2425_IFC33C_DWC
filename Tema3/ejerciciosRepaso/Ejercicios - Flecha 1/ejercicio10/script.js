const numerosDesordenados = [5, 12, 3, 19, 8, 1, 7, 14, 6, 10];

const mediaArray = (array) => {
    let suma = 0;
    array.forEach(numero => {
    suma += numero;    
    });
    console.log(suma);
    let mitjana = suma / array.length;
    let p = document.createElement('p');
    document.body.appendChild(p);
    p.innerHTML = `La mitjana dels números és: ${mitjana}`;
    
}

mediaArray(numerosDesordenados);