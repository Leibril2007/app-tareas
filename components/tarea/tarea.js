import { tareas } from "./itemTarea.js";
//import { lista } from "../formulario/data.js";

//import { consultarTareas } from "../formulario/data.js";

function consultarTareas(){

    fetch('http://localhost:3000/usuarios')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

}


function cargarTareas(data){

    let tareasD = document.createElement('div');
    tareasD.className = "tareas";

    let titulo = document.createElement('h1');
    titulo.className = "titulo";
    titulo.textContent = "Personal"
    tareasD.appendChild(titulo);

    data.forEach((eLista) =>{

        tareasD.appendChild(tareas(eLista));

    } );

    return tareasD;

}  

export { cargarTareas, consultarTareas }