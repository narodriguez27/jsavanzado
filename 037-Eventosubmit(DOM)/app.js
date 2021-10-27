const formulario = document.getElementById("formulario").addEventListener("submit",(e)=>{
    let pwUno = document.getElementById("pwUno");
    let pwDos = document.getElementById("pwDos");
    if (pwUno.value != pwDos.value) {
        alert("pepe");
        e.preventDefault();
        return false;
    }else
    return true;
})