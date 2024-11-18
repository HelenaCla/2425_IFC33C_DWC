function generarTaula(){

    let taula = document.createElement('table');
    let trPrincipal = document.createElement('tr');

    //Cream capçaleres de la taula
    let thPrincipal = document.createElement('th');
    thPrincipal.innerText = 'x';
    trPrincipal.appendChild(thPrincipal);
    let th;

    for(let i = 1; i <=10; i++){
        th = document.createElement('th');
        th.innerText = i;
        trPrincipal.appendChild(th);
    }
    taula.appendChild(trPrincipal)
    //Declaramos variables
    let fila;
    let thFila;
    let cela
    //Cream files de la taula
    for(let i = 1; i<=10; i++){
        fila = document.createElement('tr');
        //Capçalera fila
        thFila = document.createElement('th');
        thFila.innerText = i ;
        fila.appendChild(thFila);

        //Cel·les de la taula
        for(let j = 1; j <=10; j++){
            cela = document.createElement('td');
            cela.innerText = i * j;
            fila.appendChild(cela);
        }
        taula.appendChild(fila);

    }
    document.getElementById('tablaMultiplicar').appendChild(taula);
}

generarTaula();