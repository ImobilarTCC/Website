let getFormContent = document.querySelector(".filtro_form");
let menuOpenFiltro = false;

let toggleFiltroMenu = function (){

    let width = window. innerWidth

    if (width < 1200){ 
        if (!menuOpenFiltro) {
            getFormContent.style.maxHeight = "5000px";
            getFormContent.style.opacity = "1";
            getFormContent.style.visibility = "visible";
            getFormContent.style.overflow = "auto";
            menuOpenFiltro = true;
        } else {
            getFormContent.style.maxHeight = "0px";
            getFormContent.style.opacity = "0";
            getFormContent.style.visibility = "hidden";
            getFormContent.style.overflow = "hidden";
            menuOpenFiltro = false;
        }
    }
}

let mediaQueryFiltro = window.matchMedia('(max-width: 1200px)');
mediaQueryFiltro.addEventListener('change', function (e) {
    if (e.matches) {
        getFormContent.style.maxHeight = "0px";
        getFormContent.style.opacity = "0";
        getFormContent.style.visibility = "hidden";
        getFormContent.style.overflow = "hidden";
        menuOpenFiltro = false;
    } else {
        getFormContent.style.maxHeight = "unset";
        getFormContent.style.opacity = "1";
        getFormContent.style.visibility = "visible";
        getFormContent.style.overflow = "auto";
        menuOpenFiltro = false;
    }
});