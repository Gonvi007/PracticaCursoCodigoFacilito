// DOM
/*
let links = document.querySelector("a");

links.forEach(function(link){
    console.log(link);
});


let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this);
    });
});

*/

/*
// Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");
// Recorrerlos
links.forEach(function(link){
    // Agregar un evento click a cada uno de ellos

    link.addEventListener("click", function(evento){
        // evento.preventDefault();
        let content = document.querySelector('.content');
        // Quitar las clases de animacion que ya tiene

        content.classList.remove("animate__animated animate__zoomIn ");
        content.classList.remove(" animate__zoomOutLeft");

        // Agregar clases para animar su salida fadeOutUp
        content.classList.remove("animate__zoomIn ");
        content.classList.add("animate__zoomOutLeft");
        
        setTimeout(function(){
            location.herf = "/PracticaCursoCodigoFacilito";
        }, 600);
        */
        

        // return false;

    // });

// })

/*

let iconos = document.querySelectorAll("span");

iconos.forEach(function(icono){
    icono.classList.remove("icon-star-full");
    icono.classList.add("icon-star-half");
})

*/