var bigMapButton = document.querySelector(".small-map")
var modalMap = document.querySelector(".modal-big-map")
var closeModalMap = document.querySelector(".close-modal-map")
var writeUsButton = document.querySelector(".write-us-button");
var modalWriteUs = document.querySelector(".modal-write-us");
var closeWriteUs = document.querySelector(".close-write-us");
var writeUsName = modalWriteUs.querySelector("[name=name]");
var writeUsForm = modalWriteUs.querySelector("modal-form");
var writeUsEmail = modalWriteUs.querySelector("[name=email]");
var writeUsText = modalWriteUs.querySelector("[name=text]");
var storageName = "";
var storageEmail = "";
var isStorageSupport = true;

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

writeUsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.add("modal-show");
  if (storageName) {
    writeUsName.value = storageName;
    if (storageEmail){
      writeUsEmail.value = storageEmail;
      writeUsText.focus();
    } else {
      writeUsEmail.focus();
    }
  } else {
    modalWriteUs.offsetWidth = modalWriteUs.offsetWidth;
    writeUsName.focus();
  }
})

closeWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove("modal-show");
  modalWriteUs.classList.remove("modal-error");
})

modalWriteUs.addEventListener("submit", function (evt) {
  if (!writeUsName.value || !writeUsEmail.value || !writeUsText.value) {
    evt.preventDefault();
    modalWriteUs.classList.remove("modal-error");
    modalWriteUs.classList.add("modal-error");
  }
  else {
    if (isStorageSupport){
    localStorage.setItem("name", writeUsName.value);
    localStorage.setItem("email", writeUsEmail.value);
    }
  }
})

bigMapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
})

closeModalMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalWriteUs.classList.contains("modal-show")){
      evt.preventDefault();
      modalWriteUs.classList.remove("modal-show");
      modalWriteUs.classList.remove("modal-error");
    }
    if (modalMap.classList.contains("modal-show")) {
      evt.preventDefault();
      modalMap.classList.remove("modal-show");
    }
  }
})

