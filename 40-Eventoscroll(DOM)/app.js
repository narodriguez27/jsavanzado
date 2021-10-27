window.addEventListener('scroll', () => {
    let mensaje = document.getElementById("mensaje")
     console.log(mensaje.style.top = window.scrollY + "px")
})
