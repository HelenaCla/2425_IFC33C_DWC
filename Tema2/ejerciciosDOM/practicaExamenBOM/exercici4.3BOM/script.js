let popUpWindow;

function abrirPopup(){
    if(!popUpWindow) {
        popUpWindow = window.open("popup.html", "Popup", "width=300, height=300")
    }else{
        alert("La ventana emergente ya está abierta.")
    }
}

function cerrarPopup(){
    if(popUpWindow){
        popUpWindow.close();
        popUpWindow = null;
    }else{
        alert("La ventana emergente no está abierta.")
    }
}

function moverPopup(){
    if(popUpWindow){
        popUpWindow.moveTo(100, 100)
    }else{
        alert("La ventana emergente no está abierta.")
    }
}

function redimensionarPopUp(){
    if(popUpWindow){
        popUpWindow.resizeTo(500, 500)
    }else{
        alert("La ventana emergente no está abierta.")
    }
}

function mostrarUbicacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarCoordenadas, mostrarError);
    } else {
        alert("La geolocalización no es soportada por este navegador.");
    }
}

function mostrarCoordenadas(position) {
    const latitud = position.coords.latitude;
    const longitud = position.coords.longitude;
    document.getElementById("ubicacion").innerText = `Latitud: ${latitud}, Longitud: ${longitud}`;
}

function mostrarError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("El usuario ha denegado el acceso a la ubicación.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("La información de la ubicación no está disponible.");
            break;
        case error.TIMEOUT:
            alert("La solicitud para obtener la ubicación ha caducado.");
            break;
        case error.UNKNOWN_ERROR:
            alert("Ha ocurrido un error desconocido.");
            break;
    }
}



// Inicializar la ubicación al cargar la página
mostrarUbicacion();