function crearTaula(){
    let taula = document.createElement('table');
    document.body.appendChild(taula);
    let thead;
    let tr;
    let th;
    let td;
    //primera fila
    thead = document.createElement('thead');
    taula.appendChild(thead);
    th = document.createElement('th');
    th.innerHTML = 'x';
    thead.appendChild(th);

    //Numeros primera fila
    for (let i = 1; i <=10; i++){
        th = document.createElement('th');
        th.innerHTML = i;
        thead.appendChild(th);
    }

    for(let i = 1; i <=10 ; i++){
        tr = document.createElement('tr');
        taula.appendChild(tr);
        th = document.createElement('th');
        th.innerHTML = i;
        tr.appendChild(th);
        for(let j = 1; j <=10; j++){
            td = document.createElement('td');
            td.innerHTML = i * j;
            tr.appendChild(td);
        }
    }
}

crearTaula();