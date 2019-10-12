var toBuy = document.querySelectorAll(".to-buy");
var modalCart = document.querySelector(".modal-cart");
var closeModalCart = document.querySelector(".close-modal-cart");
var continueBuying = document.querySelector(".modal-cart__button");

for (var i=0; i < toBuy.length; i++) {
  toBuy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCart.classList.add("modal-show");
  })
}

closeModalCart.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalCart.classList.remove("modal-show");
})

continueBuying.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalCart.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalCart.classList.contains("modal-show")) {
      evt.preventDefault();
      modalCart.classList.remove("modal-show");
    }
  }
})