import { marcarTexto } from "./funcionesTarea.js";

function tareas(lista){

    let contenedorTareas = document.createElement('div');
    contenedorTareas.className = "divContenedorTareas";

    lista.forEach(element => {

        let divBase = document.createElement('div');
        divBase.className = "div-base";

        divBase.addEventListener("click", marcarTexto);

        let input = document.createElement('input');
        input.className= "input-form";
        input.type = 'checkbox';

        divBase.appendChild(input);

        let tarea = document.createElement('p');
        tarea.className = "nombre-tarea";
        tarea.textContent = element;

        divBase.appendChild(tarea);
            
        contenedorTareas.appendChild(divBase);
        
    });

    return contenedorTareas;
}


export { tareas };