const formulario = document.getElementById("formulario").addEventListener("blur",(e)=>{
    if (e.target.value == "") {
        alert("Cuidaditoooo!")
    }
})
//el evento blur se lleva a cabo cundo se pierde foco de x elemento. 
// el evento focus se lleva a cabo cuando toma "seleccionas" el elemento.