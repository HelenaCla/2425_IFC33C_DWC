const imatges = [
    {
        url: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        descripcio: 'imagen1'
    },
    {
        url: 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        descripcio: 'imagen2'
    },
    {
        url: 'https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        descripcio: 'imagen3'
    },
    {
        url: 'https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        descripcio: 'imagen4'
    },
    {
        url: 'https://images.pexels.com/photos/374559/pexels-photo-374559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        descripcio: 'imagen5'
    },
    {
        url:'https://images.pexels.com/photos/7988747/pexels-photo-7988747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        descripcio: 'imagen6'
    }
]

function crearGaleria(){
    let galeria = document.getElementById('galeria');
    let container;
    let img;
    let descripcion;
    for (let imatge in imatges){
        container = document.createElement('div');
        container.className = 'image-container';

        img = document.createElement('img');
        img.src = imatge.url;
        img.src = imatge.descripcio

        descripcion = document.createElement('p');
        descripcion.textContent = imatge.descripcio;

        container.appendChild(img);
        container.appendChild(descripcion);

        galeria.appendChild(container);

    }

}