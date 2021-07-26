let modal = document.getElementById("modal__Songs");
let btnAddSong = document.getElementById("btn__addSong");
let close = document.getElementById("close");

btnAddSong.addEventListener('click', () => {
    modal.style.display = "block";
});

close.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', () => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
