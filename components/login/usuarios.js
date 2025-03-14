async function consultarUsuarios() {
    try {
      const response = await fetch('http://localhost:3000/usuariosExistentes');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  export { consultarUsuarios };