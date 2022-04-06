"use strict"
const caja = document.querySelector(".caja")
const punto = document.querySelectorAll(".punto")

//Pra pasar
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



