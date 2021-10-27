const inputColorUno = document.getElementById("inputColorUno").addEventListener("focus",tomarFoco)
const inputColorDos = document.getElementById("inputColorDos").addEventListener("focus",tomarFoco)

function tomarFoco(e) {
    e.target.style.color ="red";
   

}
