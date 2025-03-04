import { tareas } from "./itemTarea.js";
import { lista } from "../formulario/data.js";

function cargarTareas(){

    let tareasD = document.createElement('div');
    tareasD.className = "tareas";

    let titulo = document.createElement('h1');
    titulo.className = "titulo";
    titulo.textContent = "Personal"
    tareasD.appendChild(titulo);

    tareasD.appendChild(tareas(lista));

    return tareasD;     
}

export { cargarTareas }