$(document).ready(function(){  
    $("#registrar").click(function () {
        var usuario = document.getElementById("usuario").value;
        var password1 = document.getElementById("contra").value;
        var password2 = document.getElementById("Confirmarcontra").value;

        console.log(usuario+" -"+ password)

        if (password1 != password2){
             
            alert("las contraseñas deben coincidir.");

        } else {
            alert("las contraseñas coinciden.");
            sessionStorage.setItem("usuario", usuario);
            sessionStorage.setItem("password", password1);           
        }

    });   

});