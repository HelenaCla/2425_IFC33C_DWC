const items = [
    { nombre: 'Item1', url: 'http://example.com/item1' },
    { nombre: 'Item2', url: 'http://example.com/item2' },
    { nombre: 'Item3', url: 'http://example.com/item3' },
    { nombre: 'Item4', url: 'http://example.com/item4' },
    { nombre: 'Item5', url: 'http://example.com/item5' }
];

const mostrarLlista =(Array) =>{
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    let li;
    Array.forEach(element => {
        li = document.createElement('li');
        li.textContent = element.nombre;
        ul.appendChild(li);
        li = document.createElement('li');
        li.textContent = element.url;
        ul.appendChild(li);        
    });
};

mostrarLlista(items);
