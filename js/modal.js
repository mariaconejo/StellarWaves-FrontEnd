

const modal = document.getElementById('modal__Songs');
const btnAddSong = document.getElementById('btn-add');
const close = document.getElementById('close');
const saveBtn = document.getElementById('btn__savePlaylist');

function modalFunction() {
  btnAddSong.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
  });

  close.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
  saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'none';
  });
}

export {
  modalFunction, btnAddSong,
};
