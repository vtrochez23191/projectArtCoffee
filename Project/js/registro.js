$(document).ready(function(){  
    $("#registrar").click(function () {
        var usuario = document.getElementById("usuario").value;
        var nombre = document.getElementById("nombre").value;
        var apellidos = document.getElementById("apellidos").value;
        var password1 = document.getElementById("contra").value;
        var password2 = document.getElementById("Confirmarcontra").value;

        console.log(usuario+" -"+ password1)

        if (password1 =="" || password2=="" ||  usuario ==""){
            alert("los campos no deben estar vacíos");

        }else if (password1 != password2){
             
            alert("las contraseñas deben coincidir.");

        } else {
            alert("REGISTRO CORRECTO");
            window.location.href='inicioSesion.html';
            sessionStorage.setItem("usuario", usuario);
            sessionStorage.setItem("password", password1);   
            sessionStorage.setItem("nombre", nombre);
            sessionStorage.setItem("apellidos", apellidos);         
        }

    });   

});

