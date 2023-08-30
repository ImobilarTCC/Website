let menuOpenHeader = false;

let toggleMenu = function () {

    let getHeaderMain = document.querySelector(".header-main");
    let getHeaderMenuLogo = document.querySelector(".mobile-menu-logo");
    let getHeaderMenuButton = document.querySelector(".mobile-menu-menuButton");
    let getHeaderExitButton = document.querySelector(".mobile-menu-exitButton");
    let getHeaderMobileOverlay = document.querySelector(".mobile-menu-overlay");
    let getHeaderLogo = document.querySelector(".header-logo");
    let getHeaderNav = document.querySelector(".header-navigation");
    let getHeaderIcons = document.querySelector(".header-icons");

    if (!menuOpenHeader) {
        getHeaderMenuLogo.style.visibility = "hidden";
        getHeaderMain.style.width = "75%";
        getHeaderMain.style.borderRight = "2px solid #154360";
        getHeaderMain.style.transition = "all 0.4s ease-in-out";
        getHeaderLogo.style.opacity = "1";
        getHeaderNav.style.opacity = "1";
        getHeaderIcons.style.opacity = "1";
        getHeaderLogo.style.visibility = "visible";
        getHeaderNav.style.visibility = "visible";
        getHeaderIcons.style.visibility = "visible";
        getHeaderMobileOverlay.style.display = "flex";
        document.body.style.overflow = "hidden";
        getHeaderMenuButton.style.display = "none";
        getHeaderExitButton.style.display = "flex";
        menuOpenHeader = true;
    } else {
        getHeaderMenuLogo.style.visibility = "visible";
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
        getHeaderMenuButton.style.display = "flex";
        getHeaderExitButton.style.display = "none";
        menuOpenHeader = false;
    }
}

let mediaQueryHeader = window.matchMedia('(min-width: 993px)');
mediaQueryHeader.addEventListener('change', function (e) {

    let getHeaderMain = document.querySelector(".header-main");
    let getHeaderMenuLogo = document.querySelector(".mobile-menu-logo");
    let getHeaderMenuButton = document.querySelector(".mobile-menu-menuButton");
    let getHeaderExitButton = document.querySelector(".mobile-menu-exitButton");
    let getHeaderMobileOverlay = document.querySelector(".mobile-menu-overlay");
    let getHeaderLogo = document.querySelector(".header-logo");
    let getHeaderNav = document.querySelector(".header-navigation");
    let getHeaderIcons = document.querySelector(".header-icons");

    if (e.matches) {
        getHeaderMenuLogo.style.visibility = "visible";
        getHeaderMenuButton.style.display = "flex";
        getHeaderExitButton.style.display = "none";
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
        menuOpenHeader = false;
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
        menuOpenHeader = false;
    }
});
