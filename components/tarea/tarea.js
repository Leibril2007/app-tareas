import { lista } from "../formulario/data.js";


function tareas()   {
    let tarea = document.createElement('div');
    tarea.className = "d-tarea";

    let tareasD = document.createElement('div');
    tareasD.className = "tareas";



    lista.forEach(element => {

        let divBase = document.createElement('div');
        divBase.className = "div-base";

        tareasD.appendChild(cadaLista(element));
        let input = document.createElement('input');
        input.type = 'checkbox'; 


        
        tareasD.appendChild(input);
        divBase.appendChild(tareasD);
    });

    return tareasD;
}


function cadaLista(nombreTarea){

    let tarea = document.createElement('div');
    tarea.className = "nivel";
    tarea.textContent = nombreTarea;

    return tarea;
}


export {tareas}