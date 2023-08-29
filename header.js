let getHeaderMain = document.querySelector(".header-main");
let getHeaderMobileOverlay = document.querySelector(".mobile-menu-overlay");
let getHeaderLogo = document.querySelector(".header-logo");
let getHeaderNav = document.querySelector(".header-navigation");
let getHeaderIcons = document.querySelector(".header-icons");

let menuOpenHeader = false;

let toggleMenu = function () {

    if (!menuOpenHeader) {
        getHeaderMain.style.width = "85%";
        getHeaderMain.style.borderRight = "3px solid #154360";
        getHeaderMain.style.transition = "all 0.4s linear";
        getHeaderLogo.style.opacity = "1";
        getHeaderNav.style.opacity = "1";
        getHeaderIcons.style.opacity = "1";
        getHeaderLogo.style.visibility = "visible";
        getHeaderNav.style.visibility = "visible";
        getHeaderIcons.style.visibility = "visible";
        getHeaderMobileOverlay.style.display = "flex";
        document.body.style.overflow = "hidden";
        menuOpenHeader = true;
    } else {
        getHeaderMain.style.borderRight = "0px solid transparent";
        getHeaderLogo.style.opacity = "0";
        getHeaderNav.style.opacity = "0";
        getHeaderIcons.style.opacity = "0";
        getHeaderLogo.style.visibility = "hidden";
        getHeaderNav.style.visibility = "hidden";
        getHeaderIcons.style.visibility = "hidden";
        getHeaderMobileOverlay.style.display = "none";
        document.body.style.overflow = "auto";
        getHeaderMain.style.width = "0%";
        menuOpenHeader = false;
    }
}

let mediaQueryHeader = window.matchMedia('(min-width: 993px)');
mediaQueryHeader.addEventListener('change', function (e) {
    if (e.matches) {
        getHeaderMain.style.width = "100%";
        getHeaderMain.style.borderRight = "0px solid transparent";
        getHeaderMain.style.transition = "unset";
        getHeaderLogo.style.opacity = "1";
        getHeaderNav.style.opacity = "1";
        getHeaderIcons.style.opacity = "1";
        getHeaderLogo.style.visibility = "visible";
        getHeaderNav.style.visibility = "visible";
        getHeaderIcons.style.visibility = "visible";
        document.body.style.overflow = "auto";
    } else {
        getHeaderMain.style.width = "0%";
        getHeaderMain.style.borderRight = "0px solid transparent";
        getHeaderMain.style.transition = "unset";
        getHeaderLogo.style.opacity = "0";
        getHeaderNav.style.opacity = "0";
        getHeaderIcons.style.opacity = "0";
        getHeaderLogo.style.visibility = "hidden";
        getHeaderNav.style.visibility = "hidden";
        getHeaderIcons.style.visibility = "hidden";
        getHeaderMobileOverlay.style.display = "none";
        document.body.style.overflow = "auto";
        menuOpen = false;
    }
});