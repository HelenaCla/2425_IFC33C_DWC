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
        url: 'https://images.pexels.com/photos/7988747/pexels-photo-7988747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        descripcio: 'imagen6'
    }
];

function crearGaleria() {
    // Seleccionar el contenedor de la galería
    let galeria = document.getElementById('galeria');
    let container, img, descripcion;

    // Iterar sobre el array de imágenes
    for (let i = 0; i < imatges.length; i++) {
        let imatge = imatges[i]; // Obtener el objeto actual

        // Crear el contenedor para cada imagen
        container = document.createElement('div');
        container.className = 'image-container';

        // Crear el elemento de imagen
        img = document.createElement('img');
        img.src = imatge.url; // Asignar la URL de la imagen
        img.alt = imatge.descripcio; // Asignar un texto alternativo

        // Crear el pie de foto
        descripcion = document.createElement('p');
        descripcion.textContent = imatge.descripcio; // Asignar la descripción

        // Agregar la imagen y la descripción al contenedor
        container.appendChild(img);
        container.appendChild(descripcion);

        // Agregar el contenedor a la galería
        galeria.appendChild(container);
    }
}

// Llamar a la función para generar la galería
crearGaleria();
