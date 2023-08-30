let menuOpenFiltro = false;

let toggleFiltroMenu = function (){

    let getFormContent = document.querySelector(".filtro_form");

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

    let getFormContent = document.querySelector(".filtro_form");

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

let changeImg = function(){
    let getImgs = document.querySelectorAll(".filtro_extras img");
    let getCheckbox = document.querySelectorAll(".filtro_extras input");
    if (getCheckbox[0].checked) {
        getImgs[0].src = "img/wifiSim.png";
    } else {
        getImgs[0].src = "img/wifi.png";
    }

    if (getCheckbox[1].checked) {
        getImgs[1].src = "img/refeicaoSim.png";
    } else {
        getImgs[1].src = "img/refeicao.png";
    }

    if (getCheckbox[2].checked) {
        getImgs[2].src = "img/lazerSim.png";
    } else {
        getImgs[2].src = "img/lazer.png";
    }

    if (getCheckbox[3].checked) {
        getImgs[3].src = "img/estacionamentoSim.png";
    } else {
        getImgs[3].src = "img/estacionamento.png";
    }

    if (getCheckbox[4].checked) {
        getImgs[4].src = "img/animalSim.png";
    } else {
        getImgs[4].src = "img/animal.png";
    }
}

let changeFavorite = function (clickedImg) {
    if (clickedImg.getAttribute("src") == "img/favorito.png"){
        clickedImg.src = "img/favoritoRed.png";
    } else {
        clickedImg.src = "img/favorito.png";
    }
}
