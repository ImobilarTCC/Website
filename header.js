let headerMain = document.querySelector(".header-main");
let headerMobileBtn = document.querySelector(".mobile-menu-btn");
let headerMobileOverlay = document.querySelector(".mobile-menu-overlay");
const width = window.innerWidth;

let menuOpen = false;

headerMobileBtn.onclick = function () {
    if (!menuOpen) {
        headerMain.style.display = "flex";
        headerMobileOverlay.style.display = "flex";
        document.body.style.position = "fixed";
        menuOpen = true;
    } else {
        headerMain.style.display = "none";
        headerMobileOverlay.style.display = "none";
        document.body.style.position = "unset";
        menuOpen = false;
    }
}

var mediaQuery = window.matchMedia('(min-width: 993px)');
mediaQuery.addEventListener('change', function (e) {
    if (e.matches) {
        headerMain.style.display = "flex";
        headerMobileOverlay.style.display = "none";
        document.body.style.position = "unset";
    } else {
        headerMain.style.display = "none";
        headerMobileOverlay.style.display = "none";
        document.body.style.position = "unset";
    }
});