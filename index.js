import { header } from "./components/header/header.js";
import { cargarTareas } from "./components/tarea/tarea.js";
import { formulario } from "./components/formulario/formulario.js";


let DOM = document.getElementById("root");

function cargarDOM(){

    DOM.appendChild(header());
    
    let contenedorTareas = document.createElement('div');
    contenedorTareas.id = 'contenedor-tareas';
    contenedorTareas.appendChild(cargarTareas());
    
    DOM.appendChild(contenedorTareas);
    DOM.appendChild(formulario());
       
}

cargarDOM();







