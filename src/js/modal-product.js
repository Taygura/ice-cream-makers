(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal__open--product-cream]"),
      closeModalBtn: document.querySelector("[data-modal__close--product-cream]"),
      modal: document.querySelector("[data-modal__product-cream]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();
