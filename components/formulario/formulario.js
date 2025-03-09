import { cargarDOM } from "../../index.js";
import { agregarTarea } from "./funcionesFormulario.js";

function formulario(){
    let form = document.createElement('div');
    form.className = "d-formulario";

    let formulario = document.createElement('input');
    formulario.className = "input-formulario";
    formulario.type = 'text';
    formulario.placeholder = 'Write a task...';

    let boton = document.createElement('div');
    boton.className = "boton-form";
    boton.textContent = "Add";

    boton.addEventListener("click", ()=>{
        agregarTarea();
        cargarDOM();
    })

    form.appendChild(formulario);
    form.appendChild(boton);

    return form;
}

export {formulario}