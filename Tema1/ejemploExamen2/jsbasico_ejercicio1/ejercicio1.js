let numero = prompt('Dame un número del 1 al 10');

numero = Number(numero)

if (!(numero >= 1 && numero <= 10)){
    numero = prompt('Dame un número del 1 al 10');

    }else{
        let result = numeroAleatorio(numero);
        resultado(result);
    }
    
        function numeroAleatorio(numero){
            let numAleatorio = Math.floor(Math.random() * 10) + 1;
            console.log("El numero random es: " + numAleatorio);
    //inicio if
            if(numero===numAleatorio){
                return true;
            }else{
                return false;
            }
    }
    function resultado(result){
        if(result){
            console.log("Has acertado!");
        }else{
            console.log("Lo sentimos, No has acertado");
        }
    }
    //fin if