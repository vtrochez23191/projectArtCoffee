document.body.onload = addElement;

function addElement () {
  // crea un nuevo div
  // y añade contenido
  var img = document.createElement("img");
   img.src = './img/PSE.png'
   img.appendChild(img.src); 
   var currentDiv = document.getElementById("imagen-producto-carrito");
   document.body.insertBefore(img, currentDiv);

  
}