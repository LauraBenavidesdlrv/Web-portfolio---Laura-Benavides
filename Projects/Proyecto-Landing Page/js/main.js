"use strict"
const caja = document.querySelector(".caja")
const punto = document.querySelectorAll(".punto")

//form
function aviso (){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let user = document.getElementById("user").value
    let password = document.getElementById("password").value
    let condicion = document.getElementById("condicion").value

    if (name ==="" ){
      alert("Debes llenar el campo")
    }
    else if (email ==="" ){
        alert("Debes llenar el campo")
    }
    else if (user ==="" ){
        alert("Debes llenar el campo")
    }
    else if (password ==="" ){
        alert("Debes llenar el campo")
    }
    else if (document.getElementById('condicion').checked==false){
        alert("Debes llenar el campo")
    }
    else {
        alert("Tu registro ha sido exitoso ✅ \n Nombre: "+ name +"\n Email: "+ email + "\n Usuario: "+user)    
    }
}
document.getElementById("registro").onclick = function enviar(){
    aviso()
}


//Slide
punto.forEach((cadaUno,i)=> {
    punto[i].addEventListener('click',()=>{
        let ubication = i
        let transformacion = ubication * -100/3

        caja.style.transform = `translateX(${transformacion}%)`
        //Para que el punto se active
        punto.forEach((cadaUno,i)=>{
            punto[i].classList.remove("activo")
        })
        punto[i].classList.add("activo")
    })
})



