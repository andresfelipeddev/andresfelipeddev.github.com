//console.log : imprime una cadena de texto

//  DOM se representa  document
//querySelector : devuelve un elemento  aunque existan muchos elementos que cumplan el criterio de busqueda
//querySekectorAll : Busca en todo el arbol buscando todos los elementos que cumplan con el citerio de busqueda
/*let links = document.querySelectorAll("a");
links.forEach(function(link){
    console.log(link);
})
*/

//obtener los elementos de la clase cerrar
let cerrar = document.querySelectorAll(".cerrar");

//recorrerlos
cerrar.forEach(function (cerrar) {
  //Agregar un evento click a cada uno de ellos
  cerrar.addEventListener("click", function (ev) {
    ev.preventDefault();

    let content = document.querySelector(".content");
    // Quitar las clases de animacion que ya tiene
    content.classList.remove("animate__fadeInDown");
    content.classList.remove("animate__animated");

    //Agregar clases para animar su salida fadeOutUp
    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");

    //setTimeout / setInterval    Es pera decidir cual empieza primero

    setTimeout(function () {
      location.href = "/index.html";
    }, 600);

    return false;
  });
});
