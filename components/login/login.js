import { cargarDOM } from "../../index.js";
import { registro } from "./registrar.js";
import { consultarUsuarios } from "./usuarios.js";

function cargarLogin(){

    let secBLogin = document.createElement('section');
    secBLogin.className = "sec-login";

    let divLogin = document.createElement('div');
    divLogin.className = "div-login";

    let logImg = document.createElement('img');
    logImg.className = "log-login";
    logImg.src = "https://img.freepik.com/vector-gratis/asistencia-papel-lista-comprobacion-dibujos-animados-icono-vectorial-ilustracion-educacion-negocio-aislado-plano_138676-10698.jpg";        

    divLogin.appendChild(logImg);


    let titLogin = document.createElement('h1');
    titLogin.className = "tit-login";
    titLogin.textContent = "¡Bienvenido!";

    divLogin.appendChild(titLogin);

    let formLogin = document.createElement('form');
    formLogin.className = "form-login";

    let titCorreo = document.createElement('h2');
    titCorreo.className = "titLogForm";
    titCorreo.textContent = "Usuario o Correo:";

    formLogin.appendChild(titCorreo);

    let inputCorreo = document.createElement('input');
    inputCorreo.className = "inputL input-login";
    formLogin.appendChild(inputCorreo);

    let titPass = document.createElement('h2');
    titPass.className = "titLogForm";
    titPass.textContent = "Contraseña:";

    formLogin.appendChild(titPass);

    let inputPass = document.createElement('input');
    inputPass.className = "inputL input-pass";
    formLogin.appendChild(inputPass);

    divLogin.appendChild(formLogin);

    let btnIngresoDom = document.createElement('div');
    btnIngresoDom.className = "btns btn-entrar";
    btnIngresoDom.innerText = "Entrar";

    let btnInSesion = document.createElement('div'); 
    btnInSesion.className = "btns btn-sesion";
    btnInSesion.innerText = "Registrarse";

    divLogin.appendChild(btnInSesion);

    btnInSesion.addEventListener("click", ()=>{

        if(!secBLogin.classList.contains("activar-flex")){
            secBLogin.classList.add("activar-flex");

            let añadirDOM = document.querySelector("#root");
            añadirDOM.appendChild(registro());
        }

    });



    btnIngresoDom.addEventListener("click", async () => {
        
        let datosUsuarios = await consultarUsuarios();
    
        const correoIngresado = inputCorreo.value;
        const contraseñaIngresada = inputPass.value;
    
        const usuario = datosUsuarios.find(usuario => usuario.correo === correoIngresado || usuario.usuario === correoIngresado);
    
        if (usuario) {

            if (usuario.contraseña === contraseñaIngresada) {
                console.log("Evaluación correcta");
                cargarDOM();

                if (!secBLogin.classList.contains("activar-flex")) {
                    secBLogin.classList.add("activar-flex");
                }

            } else {
                console.log("Contraseña incorrecta");

                let errorPass = document.createElement('p');
                errorPass.className = "error eContraseña";
                errorPass.textContent = "Contraseña incorrecta";

                divLogin.appendChild(errorPass);

            }
        } else {
            let errorPass = document.createElement('p');
            errorPass.textContent = "Usuario o contraseña incorrectos";
            errorPass.className = "error";
            divLogin.appendChild(errorPass);
        }
    
        
    });
    


    divLogin.appendChild(btnIngresoDom);

    secBLogin.appendChild(divLogin);


    return secBLogin;

}

export { cargarLogin };