function Datos() {
    /*Obtener datos almacenados*/
    var nombrStorage = sessionStorage.getItem("nombre");
    var apellidosStorage = sessionStorage.getItem("apellidos");
    var usuarioStorage = sessionStorage.getItem("usuario");
    var passwordStorage = sessionStorage.getItem("password");
   

    $("#nombre").val(usuarioStorage);
    $("#apellidos").val(apellidosStorage);
    $("#usuario").val(nombrStorage);
    $("#contra").val(passwordStorage);
    $("#Confirmarcontra").val(passwordStorage);
   

    console.log(nombrStorage+" -"+apellidosStorage+" -"+usuarioStorage)

    
}   

/*function actualizar(){
    var nombre = document.getElementById("usuario").value;
    var usuario = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var contra = document.getElementById("contra").value;
    var Confirmarcontra = document.getElementById("Confirmarcontra").value;
 
   if (nombre != ""){
    sessionStorage.setItem("nombre", nombre);
   }
   if (usuario != ""){
    sessionStorage.setItem("usuario", usuario);
   }
   if (apellidos != ""){
    sessionStorage.setItem("apellidos", apellidos);
   }

   if (contra != ""){
    if(contra == Confirmarcontra){
        sessionStorage.setItem("password", contra); 
    }else{
        alert("Las contraseñas deben coincidir.\nLos demás datos fueron actualizado con éxito");
    }
   }


}*/

$(document).ready(function () {
    $('#actualizar').click(function () {

        var nombre = document.getElementById("usuario").value;
        var usuario = document.getElementById("nombre").value;
        var apellidos = document.getElementById("apellidos").value;
        var contra = document.getElementById("contra").value;
        var Confirmarcontra = document.getElementById("Confirmarcontra").value;

        console.log(nombre+" -"+usuario+" -"+apellidos)
     
       if (nombre != ""){
        sessionStorage.setItem("nombre", nombre);
       }
       if (usuario != ""){
        sessionStorage.setItem("usuario", usuario);
       }
       if (apellidos != ""){
        sessionStorage.setItem("apellidos", apellidos);
       }
    
       if (contra != ""){
        if(contra == Confirmarcontra){
            sessionStorage.setItem("password", contra); 
        }else{
            alert("Las contraseñas deben coincidir.\nLos demás datos fueron actualizado con éxito");
        }
       }

       window.location.reload()

             
    });
    });
