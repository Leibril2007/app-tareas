function header(){

    let header = document.createElement('header');
    header.className = "header";

    let logo = document.createElement('img');
    logo.src = "https://infouniversitarios.examtime.com/files/2014/11/Apunres-Universitarios.png";
    logo.alt = "logo";

    header.appendChild(logo);

    let textH1 = document.createElement('h1');
    textH1.textContent = "Todo-List";
    header.appendChild(textH1);

    return header;

}


export { header }