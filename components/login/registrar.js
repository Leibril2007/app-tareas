import { agregarUsuario } from "./funcionRegistrar.js";
import { cargarLogin } from "./login.js";

function registro(){
    let secRLogin = document.createElement('div');
    secRLogin.className = "sec-registro";

    let divRegistro = document.createElement('div');
    divRegistro.className = "div-registro";

    let dLTit = document.createElement('div');
    dLTit.className = "div-log-tit";

    let logoReg = document.createElement('p');
    logoReg.className = "lapiz";
    logoReg.textContent = "📝";
    
    let titReg = document.createElement('h1');
    titReg.className = "tit-registro";
    titReg.textContent = "Iniciar Sesión";

    dLTit.appendChild(titReg);
    dLTit.appendChild(logoReg);

    divRegistro.appendChild(dLTit);


    let titUsuario = document.createElement('h2');
    titUsuario.className = "tit-usuario";
    titUsuario.textContent = "Usuario:";
    divRegistro.appendChild(titUsuario);

    let inputUser = document.createElement('input');
    inputUser.className = "input-user";
    divRegistro.appendChild(inputUser);
    
    let titPassw = document.createElement('h2');
    titPassw.className = "tit-contra";
    titPassw.textContent = "Contraseña:";
    divRegistro.appendChild(titPassw);    

    let inputPassR = document.createElement('input');
    inputPassR.className = "input-user input-contra";
    divRegistro.appendChild(inputPassR);

    let titEmail = document.createElement('h2');
    titEmail.className = "tit-email";
    titEmail.textContent = "Correo:";
    divRegistro.appendChild(titEmail);    

    let inputEmail = document.createElement('input');
    inputEmail.className = "input-user input-email";
    divRegistro.appendChild(inputEmail);


    let btnEntrar = document.createElement('div');
    btnEntrar.className = "btn-entrRegistrar";
    btnEntrar.textContent = "Iniciar sesión";

    btnEntrar.addEventListener("click", ()=>{
        agregarUsuario();

        let correcto = document.createElement('p');
        correcto.className = "correcto-emoji";
        correcto.textContent = "Hecho ✅";

        divRegistro.appendChild(correcto);

        let regreso = document.createElement('div');
        regreso.className = "regreso";
        regreso.textContent = "⬅️ regresar";

        regreso.addEventListener("click", ()=>{

            if (!secRLogin.classList.contains("activar-flex")) {
                secRLogin.classList.add("activar-flex");
            }

            let añadirDOM = document.querySelector("#root");
            añadirDOM.appendChild(cargarLogin());

        });

        divRegistro.appendChild(regreso);

    } )

    divRegistro.appendChild(btnEntrar);


    secRLogin.appendChild(divRegistro);


    return secRLogin;
}

export { registro }