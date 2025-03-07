import { marcarTexto } from "./funcionesTarea.js";

function tareas(data){

    let contenedorTareas = document.createElement('div');
    contenedorTareas.className = "divContenedorTareas";

    let divBase = document.createElement('div');
    divBase.className = "div-base";

    divBase.addEventListener("click", marcarTexto);

    let input = document.createElement('input');
    input.className= "input-form";
    input.type = 'checkbox';

    divBase.appendChild(input);

    let tarea = document.createElement('p');
    tarea.className = "nombre-tarea";
    tarea.textContent = data;

    divBase.appendChild(tarea);
        
    contenedorTareas.appendChild(divBase);

    return contenedorTareas;

}


export { tareas };