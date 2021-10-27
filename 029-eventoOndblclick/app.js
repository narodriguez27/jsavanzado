let estado = "grande";

function cambiarMedida(obj){
  if (estado == "grande"){
    obj.style.width = '250px'
    obj.style.height = '250px'
    estado = "chico"
  }else{
    obj.style.width = '800px'
    obj.style.height = '30px'
    estado = "grande"
  }
}