let changeImg = function(){
    let getImgs = document.querySelectorAll(".input-extras img");
    let getCheckbox = document.querySelectorAll(".input-extras input");
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

let formatCep = function(cep){
    cep = cep.replace(/\D/g,''); // Replace all chars to numbers
    let size = cep.length; // get input lenght
    if (size>5) { // if is higher than 5 chars
        cep = cep.slice(0,5)+"-"+cep.slice(5,8) // the input get a '-' after the first 5 chars
    }
    return cep; // return the input
}

const currencyInputs = document.querySelectorAll('#input_valor');

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