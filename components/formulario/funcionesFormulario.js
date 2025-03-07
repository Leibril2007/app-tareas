//import { consultarTareas } from "./data.js";
import { consultarTareasBackend } from "../tarea/tarea.js";


function agregarTarea(){

    let recuperar = document.querySelector(".input-formulario").value;
    consultarTareas.unshift(recuperar);
    
    let contenedorTareas = document.querySelector("#contenedor-tareas");
    contenedorTareas.innerHTML = '';
    contenedorTareas.appendChild(consultarTareasBackend());


}

export {agregarTarea}