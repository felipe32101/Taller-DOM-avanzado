// 1. Cambiar un título con un botón
const titulo1 = document.getElementById('titulo-1');
document.getElementById('btn-cambiar-titulo').addEventListener('click', () => {
    titulo1.textContent = 'Título Cambiado';
});

// 2. Cambiar el color de un texto
const textoColor = document.getElementById('texto-color');
document.getElementById('btn-cambiar-color').addEventListener('click', () => {
    textoColor.style.color = textoColor.style.color === 'red' ? 'black' : 'red';
});

// 3. Mostrar/ocultar un elemento
const elementoToggle = document.getElementById('elemento-toggle');
document.getElementById('btn-toggle').addEventListener('click', () => {
    elementoToggle.style.display = elementoToggle.style.display === 'none' ? 'block' : 'none';
});

// 4. Crear elementos dinámicamente
document.getElementById('btn-crear-elemento').addEventListener('click', () => {
    const nuevoP = document.createElement('p');
    nuevoP.textContent = 'Texto Creado';
    document.getElementById('contenedor-dinamico').appendChild(nuevoP);
});

// 5. Eliminar elementos
document.getElementById('btn-eliminar').addEventListener('click', () => {
    const lista = document.getElementById('lista-eliminar');
    const ultimo = lista.lastElementChild;
    if (ultimo) {
        lista.removeChild(ultimo);
    }
});

// 6. Crear una lista a partir de un array
const frutas = ['Manzana', 'Pera', 'Plátano', 'Naranja'];
const listaArray = document.getElementById('lista-array');
frutas.forEach(fruta => {
    const li = document.createElement('li');
    li.textContent = fruta;
    listaArray.appendChild(li);
});

// 7. Crear tarjetas a partir de objetos
const personas = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Carlos', edad: 30 }
];
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
personas.forEach(p => {
    const tarjeta = document.createElement('div');
    tarjeta.style.border = '1px solid gray';
    tarjeta.style.margin = '5px';
    tarjeta.style.padding = '5px';
    tarjeta.innerHTML = `<strong>${p.nombre}</strong> - Edad: ${p.edad}`;
    contenedorTarjetas.appendChild(tarjeta);
});

// 8. Crear un formulario y mostrar sus datos
document.getElementById('form-datos').addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('input-nombre').value;
    document.getElementById('resultado-form').textContent = `Datos ingresados: ${nombre}`;
});

// 9. Crear una lista de tareas
document.getElementById('btn-agregar-tarea').addEventListener('click', () => {
    const input = document.getElementById('input-tarea');
    if (input.value.trim() === '') return;
    const li = document.createElement('li');
    li.textContent = input.value;
    
    document.getElementById('lista-tareas').appendChild(li);
    input.value = '';
});

// 10. Crear un CRUD completo de estudiantes
let estudiantes = [];
let idContador = 1;

const formEstudiante = document.getElementById('form-estudiante');
const tablaEstudiantes = document.getElementById('tabla-estudiantes');
const inputId = document.getElementById('estudiante-id');
const inputNombreEstudiante = document.getElementById('nombre-estudiante');
const inputEdadEstudiante = document.getElementById('edad-estudiante');

formEstudiante.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = inputId.value;
    const nombre = inputNombreEstudiante.value;
    const edad = inputEdadEstudiante.value;

    if (id) {
        estudiantes = estudiantes.map(est => est.id == id ? { id: Number(id), nombre, edad } : est);
        inputId.value = '';
    } else {
        estudiantes.push({ id: idContador++, nombre, edad });
    }

    formEstudiante.reset();
    renderEstudiantes();
});

function renderEstudiantes() {
    tablaEstudiantes.innerHTML = '';
    estudiantes.forEach(est => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${est.id}</td>
            <td>${est.nombre}</td>
            <td>${est.edad}</td>
        `;
        tablaEstudiantes.appendChild(tr);
    });
}