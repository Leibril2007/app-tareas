import { header } from "./components/header/header.js";
import { cargarTareas, consultarTareas } from "./components/tarea/tarea.js";
import { formulario } from "./components/formulario/formulario.js";


let DOM = document.getElementById("root");

function cargarDOM(){

    DOM.appendChild(header());
    
    let contenedorTareas = document.createElement('div');
    contenedorTareas.id = 'contenedor-tareas';
    contenedorTareas.appendChild(cargarTareas());
    
    consultarTareas();


    DOM.appendChild(contenedorTareas);
    DOM.appendChild(formulario());
       
}

fetch('http://localhost:3000/usuarios')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));


cargarDOM();







