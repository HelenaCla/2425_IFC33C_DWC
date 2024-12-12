const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 },
    { name: 'Eve', age: 45 }
];
let table = document.createElement('table');
let thead = document.createElement('thead');
document.body.appendChild(table);
table.appendChild(thead);
let th;
let tr;
let td;

const crearTabla = (Array) => {
    th = document.createElement('th');
    th.textContent = 'Name';
    thead.appendChild(th);
    th = document.createElement('th');
    th.textContent = 'Age';
    thead.appendChild(th);
    Array.forEach(person => {
        tr = document.createElement('tr');
        table.appendChild(tr);
        td = document.createElement('td');
        td.textContent = person.name;
        tr.appendChild(td);
        td = document.createElement('td');
        td.textContent = person.age;
        tr.appendChild(td);
    });
}

crearTabla(people);