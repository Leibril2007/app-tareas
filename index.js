//IMPORTAR COMPONENTES
import { header } from "./components/header/header.js";
import { tareas } from "./components/tarea/tarea.js";
import { formulario } from "./components/formulario/formulario.js";

let DOM = document.getElementById("root");

DOM.appendChild(header());
DOM.appendChild(tareas());
DOM.appendChild(formulario());

