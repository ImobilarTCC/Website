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