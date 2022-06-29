$(function() {
    //Para escribir solo letras
    $('.name').validCampoFranz(' abcdefghijklmnñopqrstuvwxyzáéiou');
    //Para escribir solo numeros    
    $('.lastname').validCampoFranz(' abcdefghijklmnñopqrstuvwxyzáéiou');
    $('.telefono').validCampoFranz(' 0123456789');
});


$(function() {
    var myCenter = new google.maps.LatLng(6.212733, -75.577435);

    function initialize() {
        var mapProp = {
            center: myCenter,
            zoom: 18,
            zoomControl: true,
            scaleControl: true,
            scrollwheel: false,
            disableDoubleClickZoom: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapProp);
        var marker = new google.maps.Marker({
            position: myCenter,
            icon: 'img/brand/logoart.png',
            animation: google.maps.Animation.BOUNCE,
            /*
                content: "hola",*/
            // /animation:google.maps.Animation.BOUNCE/
        });
        marker.setMap(map);
    }
    google.maps.event.addDomListener(window, 'load', initialize);

});

var swiperBeneficios = new Swiper(".swiper-benefits", {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 5,

        },
    },
});