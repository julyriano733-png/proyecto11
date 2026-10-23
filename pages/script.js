// traigo el aviso y el boton del html
var aviso = document.getElementById("aviso");
var boton = document.getElementById("boton");

// miro si ya habia aceptado antes
var acepto = localStorage.getItem("acepto");

// si no ha aceptado, muestro el aviso
if (acepto != "si") {
  aviso.classList.remove("esconder");
}

// cuando te den click has algo
boton.addEventListener("click", function () {




  localStorage.setItem("acepto", "si"); // le recuerda q le dio ya al boton 



  aviso.classList.add("esconder");      // esconder el aviso 





});