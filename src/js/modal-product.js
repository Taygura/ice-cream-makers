// Modal-cream
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

// Modal-coffee 
(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal__open--product-coffee]"),
      closeModalBtn: document.querySelector("[data-modal__close--product-coffee]"),
      modal: document.querySelector("[data-modal__product-coffee]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();

// Modal-milk
(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal__open--product-milk]"),
      closeModalBtn: document.querySelector("[data-modal__close--product-milk]"),
      modal: document.querySelector("[data-modal__product-milk]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();