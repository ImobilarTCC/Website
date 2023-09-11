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
        getImgs[0].src = "img/WifiBlue.png";
    } else {
        getImgs[0].src = "img/Wifi.png";
    }

    if (getCheckbox[1].checked) {
        getImgs[1].src = "img/DinnerBlue.png";
    } else {
        getImgs[1].src = "img/Dinner.png";
    }

    if (getCheckbox[2].checked) {
        getImgs[2].src = "img/LeisureBlue.png";
    } else {
        getImgs[2].src = "img/Leisure.png";
    }

    if (getCheckbox[3].checked) {
        getImgs[3].src = "img/ParkingBlue.png";
    } else {
        getImgs[3].src = "img/Parking.png";
    }

    if (getCheckbox[4].checked) {
        getImgs[4].src = "img/AnimalsBlue.png";
    } else {
        getImgs[4].src = "img/Animals.png";
    }
}

let changeFavorite = function (clickedImg) {
    if (clickedImg.getAttribute("src") == "img/favorito.png"){
        clickedImg.src = "img/favoritoRed.png";
    } else {
        clickedImg.src = "img/favorito.png";
    }
}

let formatCep = function(cep){
    cep = cep.replace(/\D/g,''); // Replace all chars to numbers
    let size = cep.length; // get input lenght
    if (size>5) { // if is higher than 5 chars
        cep = cep.slice(0,5)+"-"+cep.slice(5,8) // the input get a '-' after the first 5 chars
    }
    return cep; // return the input
}

const currencyInputs = document.querySelectorAll('.precos');

currencyInputs.forEach(input => {
    const max = parseFloat(input.getAttribute('data-max'));

    input.addEventListener('input', formatCurrency);

    function formatCurrency() {
        let rawValue = input.value.replace(/[^0-9]/g, '');

        // Handle the case when all numbers are deleted and NaN is generated
        if (rawValue === '') {
            rawValue = 0;
        } else {
            // Limit the raw value to the specified maximum
            rawValue = Math.min(max, parseFloat(rawValue));
        }

        const formattedValue = formatCurrencyValue(rawValue);

        input.value = formattedValue;
    }

    function formatCurrencyValue(rawValue) {
        const numericValue = Number(rawValue) / 100;

        const formattedValue = numericValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        return formattedValue;
    }
});