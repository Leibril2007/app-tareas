function marcarTexto(){

    if(!this.classList.contains("cambiar-color")){
        this.classList.add("cambiar-color");
        this.querySelector('.input-form').checked = true;
    }else{
        this.classList.remove("cambiar-color");
        this.querySelector('.input-form').checked = false;
    }

}

export { marcarTexto }
