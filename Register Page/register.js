let activeOverlay = false;
let activePasswordRegister = false;
let activePasswordLogin = false;
let activeMenu = false;

let activateAnim = function () {
    let animation = document.querySelector(".overlay");
    let contaNao = document.querySelector(".contaNao");
    let contaSim = document.querySelector(".contaSim");

    if (!activeOverlay) {
        animation.style.marginRight = "50%";
        animation.style.borderTopRightRadius = "0px";
        animation.style.borderBottomRightRadius = "0px";
        animation.style.borderTopLeftRadius = "5px";
        animation.style.borderBottomLeftRadius = "5px";
        contaNao.style.display = "flex";
        contaSim.style.display = "none";
        activeOverlay = true;
    } else {
        animation.style.marginRight = "0";
        animation.style.borderTopRightRadius = "5px";
        animation.style.borderBottomRightRadius = "5px";
        animation.style.borderTopLeftRadius = "0px";
        animation.style.borderBottomLeftRadius = "0px";
        contaNao.style.display = "none";
        contaSim.style.display = "flex";
        activeOverlay = false;
    }
}

let togglePassword = function () {
    let getInputRegister = document.querySelector('#input_password_register');
    let getPwdImgRegister = document.querySelector('#pwd_img_register');
    let getInputLogin = document.querySelector('#input_password_login');
    let getPwdImgLogin = document.querySelector('#pwd_img_login');
    if (!activeOverlay && !activeMenu) {
        if (!activePasswordRegister) {
            getPwdImgRegister.src = "img/hide.png";
            getInputRegister.type = "text";
            activePasswordRegister = true;
        } else {
            getPwdImgRegister.src = "img/show.png";
            getInputRegister.type = "password";
            activePasswordRegister = false;
        }   
    } else {
        if (!activePasswordLogin) {
            getPwdImgLogin.src = "img/hide.png";
            getInputLogin.type = "text";
            activePasswordLogin = true;
        } else {
            getPwdImgLogin.src = "img/show.png";
            getInputLogin.type = "password";
            activePasswordLogin = false;
        }   
    }
}

let toggleMenu = function () {
    let getFormRegister = document.querySelector(".register-form");
    let getFormLogin = document.querySelector(".login-form");
    getFormRegister.style.transition = "height 0.5s linear";
    getFormLogin.style.transition = "height 0.5s linear";

    if (!activeMenu) {
        getFormRegister.style.height = "0%";

        getFormRegister.addEventListener('transitionend', function () {
            getFormLogin.style.height = '100%';
        }, { once: true });

        activeMenu = true;
    } else {
        getFormLogin.style.height = "0%";

        getFormLogin.addEventListener('transitionend', function () {
            getFormRegister.style.height = '100%';
        }, { once: true });

        activeMenu = false;
    }
}