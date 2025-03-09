import { header } from "./components/header/header.js";
import { consultarTareasBackend } from "./components/tarea/tarea.js";
import { formulario } from "./components/formulario/formulario.js";


let DOM = document.getElementById("root");

function cargarDOM(){

    DOM.appendChild(header());

    consultarTareasBackend();

/*     let contenedorTareas = document.createElement('div');
    contenedorTareas.id = 'contenedor-tareas';
    contenedorTareas.appendChild(consultarTareasBackend());
    
    
    DOM.appendChild(contenedorTareas); */
    DOM.appendChild(formulario());
       
}


cargarDOM();

export {cargarDOM};







