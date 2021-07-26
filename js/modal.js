const modal = document.getElementById('modal__Songs');
const btnAddSong = document.querySelector('.button__background');
const close = document.getElementById('close');
const flex = document.getElementById('flex');

btnAddSong.addEventListener('click', () => {
  modal.style.display = 'block';
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === flex) {
    modal.style.display = 'none';
  }
});
