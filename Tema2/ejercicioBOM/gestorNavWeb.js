function mostrarURLActual(){
    alert("URL actual: " + window.location.href)
}
if(!history.state){
    history.replaceState("{posicion:0}, Inicio");
}

function actualizarEstado(accion){
    let estadoActual = history.state.posicion;

    let nuevaPos = accion === "atras" ? estadoActual + 1 : estadoActual -1;

    history.pushState(`{posicion: ${nuevaPos}}`, `Posicion${nuevaPos}`)
}
//Con history.length comprobamos si se ha navegado hacia otra página, lo que nos permitiría volver atrás
function irAtras() {
    let posActual = history.state.posicion;

    if (!history.state && posActual > 0) {
        actualizarEstado("atras")
        history.back()
    } else {
        alert("No hay más páginas en la dirección atrás.")
    }
}

//Con history.length comprobamos si se ha navegado hacia otra página, lo que nos permitiría ir adelante
function irAdelante(){
    let posActual = history.state.posicion;
    if(posActual===history.length -1){
        alert("No hay paginas para ir hacia adelante")
    }else{
        actualizarEstado("adelante");
        history.forward();
    }
}

//Con userAgent mostramos los navegadores compatibles, ya que appName está deprecated/obsoleto
function mostrarInfoNavegador(){
    let nombre = window.navigator.userAgent
    let idioma = window.navigator.language
    let conexión = window.navigator.onLine ? "En linea" : "Desconectado"

    alert("Información del Navegador:\n" +
        "Nombre: " + nombre + "\n" +
        "Idioma: " + idioma + "\n" +
        "Estado de conexión: " + conexión)

}

function redirigirURL() {
    let url = document.getElementById('urlInput') //Obtenemos el valor del input (Lo que introduce el usuario)
    if (url) {
        try {
            new URL(url) //Comprobamos la url
            window.location.assign(url)
        } catch (e) {
            alert("URL inválida. Por favor ingrese una URL correcta.")
        }
    } else {
        alert("Por favor ingrese una URL.")
    }
}

let popUpWindow

function abrirPopup() {
    if (!popUpWindow) {
        popUpWindow = window.open("https://www.sephora.com", "popup", "width=800,height=800")
    } else {
        alert("La ventana emergente ya está abierta.");
    }
}

function cerrarPopup() {
    if (popUpWindow) {
        popUpWindow.close()
    } else {
        alert("La ventana emergente no está abierta.");
    }
}