// BLOQUE 2 - TRAER LOS ELEMENTOS AL DOM //

//Tabla principal//

const tabla = document.getElementById ("tablaEstudiantes");

//Filtros//

const filtroTodos = document.getElementById ("filtroTodos")
const filtroAprobados = document.getElementById ("filtroAprobados")
const filtroReprobados = document.getElementById ("filtroReprobados")

//Búsqueda//

const inputBusqueda = document.getElementById ("inputBusqueda");
const btnBuscar = document.getElementById ("btnBuscar");
const detalle = document.getElementById ("detalleEstudiante");

//Agregar//

const formAgregar = document.getElementById ("formAgregar");
const nuevoNombre= document.getElementById ("nuevoNombre");
const nuevaNota = document.getElementById ("nuevaNota");
const mensajeForm = document.getElementById ("mensajeForm");

// BLOQUE 3 - ARRAY DE ESTUDIANTES (INFO QUE ME DAN) //

// Array de estudiantes // 

let estudiantes = [
    { id: 1, nombre: "Ana García", nota: 8, aprobado: true },
    { id: 2, nombre: "Carlos López", nota: 5, aprobado: false },
    { id: 3, nombre: "María Rodríguez", nota: 7, aprobado: true },
    { id: 4, nombre: "Pedro Martínez", nota: 4, aprobado: false },
    { id: 5, nombre: "Laura Fernández", nota: 9, aprobado: true },
    { id: 6, nombre: "Diego Silva", nota: 6, aprobado: true },
    { id: 7, nombre: "Sofía Castro", nota: 3, aprobado: false }
];

let proximoid = estudiantes.length +1;

// BLOQUE 4 - FUNCIONES //


function renderTabla(lista) {
    tabla.innerHTML = "";

    lista.forEach(est => {

        let fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${est.id}</td>
            <td>${est.nombre}</td>
            <td>${est.nota}</td>
            <td class="${est.aprobado ? "aprobado" : "reprobado"}">
                ${est.aprobado ? "Aprobado" : "Reprobado"}
            </td>
            <td> 
                <button onclick="cambiarEstado(${est.id})">Cambiar</button>
                </td>
        `;

        tabla.appendChild(fila);
    });
}

// BLOQUE 5 - FILTROS //


function mostrarTodos() {
    renderTabla(estudiantes);
}

function mostrarAprobados() {
    const filtrados = [];
    estudiantes.forEach(est => {
        if (est.aprobado === true) {
            filtrados.push(est);
        }
    });
    renderTabla(filtrados);
}

function mostrarReprobados() {
    const filtrados = [];
    estudiantes.forEach(est => {
        if (est.aprobado === false) {
            filtrados.push(est);
        }
    });
    renderTabla(filtrados);
}

// eventos de botones
filtroTodos.addEventListener("click", mostrarTodos);
filtroAprobados.addEventListener("click", mostrarAprobados);
filtroReprobados.addEventListener("click", mostrarReprobados);



// BLOQUE 6 - BUSCAR //

function buscar() {
    let texto = inputBusqueda.value;

    // busco coincidencia exacta por nombre
    let encontrado = estudiantes.find(est => est.nombre === texto);

    if (!encontrado) {
        detalle.innerHTML = "<p>No se encontró el estudiante.</p>";
        return;
    }

    detalle.innerHTML = `
        <h3>Detalle del estudiante</h3>
        <p><strong>ID:</strong> ${encontrado.id}</p>
        <p><strong>Nombre:</strong> ${encontrado.nombre}</p>
        <p><strong>Nota:</strong> ${encontrado.nota}</p>
        <p><strong>Estado:</strong> 
            ${encontrado.aprobado ? "Aprobado" : "Reprobado"}
        </p>
    `;
}

btnBuscar.addEventListener("click", buscar);


//BLOQUE 7 – CAMBIAR ESTADO


function cambiarEstado(id) {
    // busco el estudiante por id
    let est = estudiantes.find(e => e.id === id);

    // invierto el valor de aprobado
    est.aprobado = !est.aprobado;

    // redibujo la tabla completa
    renderTabla(estudiantes);
}


// BLOQUE 8 – AGREGAR ESTUDIANTE


formAgregar.addEventListener("submit", function(e) {
    e.preventDefault(); // no recargar

    let nombre = nuevoNombre.value;
    let nota   = Number(nuevaNota.value);

    // Validaciones simples
    if (nombre === "" || nuevaNota.value === "") {
        mensajeForm.innerText = "Completá nombre y nota.";
        return;
    }

    if (isNaN(nota) || nota < 0 || nota > 10) {
        mensajeForm.innerText = "La nota debe ser un número entre 0 y 10.";
        return;
    }

    // calculo aprobado
    let aprobado = nota >= 6;

    // armo objeto
    const nuevoEstudiante = {
        id: proximoid,
        nombre: nombre,
        nota: nota,
        aprobado: aprobado
    };

    // agrego al array
    estudiantes.push(nuevoEstudiante);
    proximoid++;

    // actualizo tabla
    renderTabla(estudiantes);

    // limpio
    nuevoNombre.value = "";
    nuevaNota.value   = "";
    mensajeForm.innerText = "Estudiante agregado correctamente.";
});

