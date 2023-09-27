let menuActive = false;

let toggleHeaderMenu = function () {
    let getHeaderButton = document.querySelector(".mobile-menu-button img");
    let getHeaderMain = document.querySelector(".header-main");
    let getHeaderLogo = document.querySelector(".header-logo img");
    let getOverlay = document.querySelector(".mobile-menu-overlay");

    if (!menuActive) {
        getHeaderButton.src = "../header_img/exit.png";
        getHeaderLogo.src = "../header_img/logo-white.png";
        getHeaderMain.style.width = "100%";
        getOverlay.style.display = "flex";
        document.body.style.overflow = "hidden";
        menuActive = true;
    } else {
        getHeaderButton.src = "../header_img/menu.png";
        getHeaderLogo.src = "../header_img/logo-blue.png";
        getHeaderMain.style.width = "0%";
        getOverlay.style.display = "none";
        document.body.style.overflow = "unset";
        menuActive = false;
    }
}

let mediaQueryHeader = window.matchMedia('(min-width: 993px)');
mediaQueryHeader.addEventListener('change', function (e) {

    let getHeaderButton = document.querySelector(".mobile-menu-button img");
    let getHeaderMain = document.querySelector(".header-main");
    let getHeaderLogo = document.querySelector(".header-logo img");
    let getOverlay = document.querySelector(".mobile-menu-overlay");

    if (e.matches) {
        getHeaderMain.style.width = "100%";
        getHeaderButton.src = "../header_img/menu.png";
        getHeaderLogo.src = "../header_img/logo-blue.png";
        getOverlay.style.display = "none";
        document.body.style.overflow = "unset";
        menuActive = false;
    } else {
        getHeaderMain.style.width = "0%";
    }
});