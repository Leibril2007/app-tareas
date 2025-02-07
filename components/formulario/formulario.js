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

    form.appendChild(formulario);
    form.appendChild(boton);

    return form;
}

export {formulario}