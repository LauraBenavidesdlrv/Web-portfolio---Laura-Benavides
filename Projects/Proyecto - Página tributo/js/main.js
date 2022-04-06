const maquinaDeEscribir = document.getElementById("maquina");
const escribir = (str = "", time = 500, texto_maquina = "") => {
    let separar = str.split("");
    texto_maquina.innerHTML = "";
    let i = 0;
    let j = str.length;
    let tiempoDeRepeticion = setInterval(() => {
        if(i === separar.length){
            texto.innerHTML =str.substring(0,j);
            j--
            if(j === 0){
                i = 0;
                texto_maquina.innerHTML = "";
                j = str.length
            }
        }else{
            texto_maquina.innerHTML += separar[i]
            i++
        }
        
    }, time);
}
escribir("Bienvenid@, esta web es un tributo a el físico teórico Richard Feynman",200,maquina)