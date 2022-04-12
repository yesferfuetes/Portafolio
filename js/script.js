document.getElementById("btn_menu").addEventListener("click", mostrar_menu);
document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

/* mostrando menu */
function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
}

/* ocultando menu */
function ocultar_menu(){

    nav.style.right = "-250px";
    background_menu.style.display = "none";
}

/* cerrando menu links */
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function(){
        nav.style.right = "-250px";
        background_menu.style.display = "none";
    })
})

/* BOTON HACIA ARRIBA */
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if(currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 1.5));
    }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;

    if(scroll > 1900){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 1900){
        buttonUp.style.transform = "scale(0)";
    }
}