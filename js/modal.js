
let modal = document.getElementById("modal__Songs");


let btn = document.querySelector(".button__background");


let span = document.getElementsByClassName("close")[0];




btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

