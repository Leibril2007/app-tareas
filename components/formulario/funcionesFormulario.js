import { lista } from "./data.js";
import { cargarTareas } from "../tarea/tarea.js";


function agregarTarea(){

    let recuperar = document.querySelector(".input-formulario").value;
    lista.unshift(recuperar);
    
    let contenedorTareas = document.querySelector("#contenedor-tareas");
    contenedorTareas.innerHTML = '';
    contenedorTareas.appendChild(cargarTareas());


}

export {agregarTarea}