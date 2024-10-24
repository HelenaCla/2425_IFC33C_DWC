let cancion = "Una mosca volava per la llum";

const particion = cancion.split("");

function cambiarVocal(particion, vocal){
    for(let i = 0; i < particion.length; i++){
        if (particion[i] === "a" || particion[i] === "e" || particion[i] === "i" || particion[i] === "o" || particion[i] === "a"){
            particion[i] = vocal;
        }
    };
    console.log(particion.join(''));
}

cambiarVocal(cancion, "a");
cambiarVocal(cancion, "e");