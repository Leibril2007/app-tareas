//IMPORTAR COMPONENTES
import { header } from "./components/header/header.js";
import { tarea } from "./components/tarea/tarea.js";
import { formulario } from "./components/formulario/formulario.js";

let DOM = document.getElementById("root");

DOM.appendChild(header());
DOM.appendChild(formulario());
DOM.appendChild(tarea());
