const btnUno =document.getElementById("btnUno").addEventListener("click",cambiarColor);
const btnDos = document.getElementById("btnDos").addEventListener("click",cambiarColor);

function cambiarColor(e) { 
    e.target.style.background = "red";
}