import { lista } from "../formulario/data.js";


function tareas()   {

    let tareasD = document.createElement('div');
    tareasD.className = "tareas";

    let titulo = document.createElement('h1');
    titulo.className = "titulo";
    titulo.textContent = "Personal"
    tareasD.appendChild(titulo);

    lista.forEach(element => {

        let divBase = document.createElement('div');
        divBase.className = "div-base";

        let input = document.createElement('input');
        input.className = "input-form";
        input.type = 'checkbox'; 
        divBase.appendChild(input);

        divBase.appendChild(cadaLista(element));
        
        
        tareasD.appendChild(divBase);
    });

    return tareasD;
}


function cadaLista(nombreTarea){

    let tarea = document.createElement('div');
    tarea.className = "nombre-tarea";
    tarea.textContent = nombreTarea;

    return tarea;
}


export {tareas}