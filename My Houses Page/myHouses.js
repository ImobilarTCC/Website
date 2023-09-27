let getStatus = document.querySelectorAll(".casa_status");
console.log(getStatus);
for (let i = 0; i < getStatus.length; i++) {
    if (getStatus[i].textContent == "Aprovado") {
        getStatus[i].style.color = "green";
    } else if (getStatus[i].textContent == "Em analise") {
        getStatus[i].style.color = "#e7bc00";
    }
    else if (getStatus[i].textContent == "Recusado") {
        getStatus[i].style.color = "red";
    }
}
