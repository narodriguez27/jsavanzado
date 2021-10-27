const tabla = document.getElementsByTagName("td");
for (let i = 0; i < tabla.length; i++) {
    tabla[i].addEventListener("mousedown",presionar)
    tabla[i].addEventListener("mouseup",soltar )
}
function presionar(e) {
    e.target.style.backgroundColor = '#ffff00'
}
function soltar(e) {
    e.target.style.backgroundColor = "red"
}