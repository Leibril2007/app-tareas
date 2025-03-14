import { header } from "./components/header/header.js";
import { consultarTareasBackend } from "./components/tarea/tarea.js";
import { formulario } from "./components/formulario/formulario.js";
import { cargarLogin } from "./components/login/login.js";

let DOM = document.getElementById("root");

function cargarDOM(){

    DOM.appendChild(header());

    consultarTareasBackend();

    DOM.appendChild(formulario());
       
}

DOM.appendChild(cargarLogin());


export {cargarDOM};







