const hamburguer = document.querySelector('.hamburguesa');
const contMovil = document.querySelector('.contMovil');
const fondo = document.querySelector('.fondo');
const transparente = document.querySelector('.transparente');


let menuBar = 0;



document.addEventListener('click', function(evento) {
    var hidebox = hamburguer.contains(evento.target);

    if (!hidebox) { // El Hidebox es el que reconoce la accion del boton Hamburguesa
        menuBar = 0; // 
    } else {
        menuBar++
    }


    if (menuBar == 1) {

        hamburguer.classList.add("activa");
        contMovil.classList.add("left");
        fondo.classList.add("activa");
        console.log("Hamburguesa con queso");
        transparente.classList.add("activa");
    } else {
        hamburguer.classList.remove("activa");
        contMovil.classList.remove('left');
        fondo.classList.remove("activa");
        transparente.classList.remove("activa");
        menuBar = 0;
        console.log("Hamburguesa sin queso");
    }

});




// ///*Slider improvisado*////

const atrasBoton = document.querySelector('.atras');
const carruselImg = doucment.queryselector('.carrusel-img');
const adelanteBoton = document.querySelector('.adelante');