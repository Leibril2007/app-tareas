/* import { consultarTareasBackend } from "../tarea/tarea.js"; */

function agregarTarea(){

    let recuperar = document.querySelector(".input-formulario").value;


    fetch('http://localhost:3000/agregar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: recuperar,
          estado: 'pendiente'
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al guardar la tarea');
        }
        return response.json();
      })
      .then(data => {
        console.log('Tarea agregada con éxito:', data);
      })
      .catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
      });
      

    document.querySelector("#root").innerHTML = "";
}

export {agregarTarea}