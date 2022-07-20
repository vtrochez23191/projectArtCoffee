$(document).ready(function(){
    

    $("#inicio").click(function () {
        var usuario = document.getElementById("usuario1").value;
        var password = document.getElementById("password2").value;
        //Obtener datos almacenados en sessionStorage
        var usuarioStorage = sessionStorage.getItem("usuario");
        var passwordStorage = sessionStorage.getItem("password");
        

        console.log(usuario+" -"+ password)

        if ((usuario == 'valentina@ejemplo.com' && password == '0123456789') || (usuario == usuarioStorage && password == passwordStorage) ){
             
           
            window.location.href='inicio.html';

        } else {
            alert("Acceso incorrecto.\nPor favor, confirma tus datos.");
        }

    });   

});



