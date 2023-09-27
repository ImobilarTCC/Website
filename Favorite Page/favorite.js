let changeFavorite = function (clickedImg) {
    if (clickedImg.getAttribute("src") == "img/favorito.png"){
        clickedImg.src = "img/favoritoRed.png";
    } else {
        clickedImg.src = "img/favorito.png";
    }
}