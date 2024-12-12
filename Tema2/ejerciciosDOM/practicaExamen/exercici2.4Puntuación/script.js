const competicion = [
    {'nombre': 'Helena', 'puntuacion': 4},
    {'nombre': 'Tomeu', 'puntuacion': 6},
    {'nombre': 'Daniel', 'puntuacion': 7},
    {'nombre': 'Yuk', 'puntuacion': 5}
]

function ordenarPuntuacion(competicion){
    let competicionOrdenada = competicion.sort((a, b) => {
        return b.puntuacion - a.puntuacion;
    });
    return competicionOrdenada;
}

function crearTabla(array){
    let taula = document.createElement('table');
    let thead = document.createElement('thead');
    document.body.appendChild(taula);
    taula.appendChild(thead);
    let th, tr, td;
    let nombresth = ['Posicion', 'Nombre', 'Puntuacion'];
    for (let nombre of nombresth){
        th = document.createElement('th');
        th.textContent = nombre;
        thead.appendChild(th);
    }
    for (let i = 0; i < array.length; i++){
        tr = document.createElement('tr');
        td = document.createElement('td');
        td.textContent = i+1;
        tr.appendChild(td);
        td = document.createElement('td');
        td.textContent = array[i].nombre;
        tr.appendChild(td);
        td = document.createElement('td');
        td.textContent = array[i].puntuacion;
        tr.appendChild(td);
        taula.appendChild(tr);
    }

}
let ordenat = ordenarPuntuacion(competicion);
crearTabla(ordenat);