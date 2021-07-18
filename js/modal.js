// Get the modal
let modal = document.getElementById("modal__Songs");

// Get the button that opens the modal
var btn = document.getElementById("btn__addSong");

// Get the <span> element that closes the modal
var span = document.getElementById("close")[0];

// When the user clicks on the button, open the modal
btn__addSong.onclick = function() {
    modal__Songs.style.display = "block";
}

span.onclick = function() {
    modal__Songs.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal__Songs.style.display = "none";
    }
}