import { tareas } from "./itemTarea.js";

function consultarTareasBackend(){

    fetch('http://localhost:3000/usuarios')
    .then(response => response.json())
    .then(data => cargarTareasDOM(data))
    .catch(error => console.error('Error:', error));

}

function cargarTareasDOM(data){
    let DOM = document.querySelector('#root');
    DOM.appendChild(renderTareas(data));
}


function renderTareas(data){

    let tareasD = document.createElement('div');
    tareasD.className = "tareas";

    let titulo = document.createElement('h1');
    titulo.className = "titulo";
    titulo.textContent = "Personal"
    tareasD.appendChild(titulo);

    data.forEach((eLiObjetos) =>{
        
        console.log(eLiObjetos.nombre_tarea);

        tareasD.appendChild(tareas(eLiObjetos.nombre_tarea));

    } );

    return tareasD;

}  

export { consultarTareasBackend }