function agregarUsuario(){

    let recuperarUser = document.querySelector(".input-user").value;
    let recuperarPass = document.querySelector(".input-contra").value;
    let recuperarEmail = document.querySelector(".input-email").value;


    fetch('http://localhost:3000/agregarUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          usuario: recuperarUser,
          contraseña: recuperarPass,
          correo: recuperarEmail
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al guardar el usuario');
        }
        return response.json();
      })
      .then(data => {
        console.log('Usuario agregado con éxito:', data);
      })
      .catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
      });      

}

export { agregarUsuario }