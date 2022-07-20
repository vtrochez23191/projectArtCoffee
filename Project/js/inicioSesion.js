$(document).ready(function(){
    

    $("#inicio").click(function () {
        var usuario = document.getElementById("usuario1").value;
        var password = document.getElementById("password2").value;

        console.log(usuario+" -"+ password)

        if (usuario == 'valentina@ejemplo.com' && password == '0123456789' ){
            window.location.href="../index.html";
           

        } else {
            alert("Acceso incorrecto.\nPor favor, confirma tus datos.");
        }

    });   

});

