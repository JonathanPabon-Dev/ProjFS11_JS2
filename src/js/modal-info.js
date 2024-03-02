(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  window.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      removeModal();
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
  function removeModal() {
    refs.modal.classList.add('is-hidden');
  }
})();
