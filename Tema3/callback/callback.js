function tareaPrincipal(callback){
    setTimeout(() =>{
        console.log("Realizando primera tarea...");
    }, 1000);
    callback();    
}

function tareaSecundaria(callback){
    setTimeout(() =>{
        console.log("Realizando segunda tarea...");
    }, 1000);
    callback(); 
}
function tareaTerciaria(callback){
    setTimeout(()=>{
        console.log("Realizando tercera tarea...");
    }, 1000);
    callback(); 
}

tareaPrincipal(()=> {
    tareaSecundaria( () =>{
        tareaTerciaria(() => {
            console.log("Hemos terminado las tareas");
        })
    })
})

//CALLBACK HELL

//PROMESAS
function tareaPrin(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            console.log("Tarea Principal Controlada");
            resolve();
        }, 1000)
    }) 
}
function tareaSecun(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            console.log("Tarea Secundaria Controlada");
            resolve();
        }, 1000)
    }) 
}

function tareaTerc(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            console.log("Tarea Terciaria Controlada");
            resolve();
        }, 1000)
    }) 
}


tareaPrin()
    .then(tareaSecun)
    .then(tareaTerc)
    .then(() => {
        console.log("Hemos acabado las tareas")
    })
//ASYNC /AWAIT

async function ejecutarTareas(params) {
    await tareaPrin();
    await tareaSecun();
    await tareaTerc();
    console.log("Todas las tareas han finalizado")
}