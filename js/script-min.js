for(var toBuy=document.querySelectorAll(".to-buy"),modalCart=document.querySelector(".modal-cart"),closeModalCart=document.querySelector(".close-modal-cart"),continueBuying=document.querySelector(".modal-cart__button"),bigMapButton=document.querySelector(".small-map"),modalMap=document.querySelector(".modal-big-map"),closeModalMap=document.querySelector(".close-modal-map"),writeUsButton=document.querySelector(".write-us-button"),modalWriteUs=document.querySelector(".modal-write-us"),closeWriteUs=document.querySelector(".close-write-us"),writeUsName=modalWriteUs.querySelector("[name=name]"),writeUsForm=modalWriteUs.querySelector("modal-form"),writeUsEmail=modalWriteUs.querySelector("[name=email]"),writeUsText=modalWriteUs.querySelector("[name=text]"),storageName="",storageEmail="",isStorageSupport=!0,i=0;i<toBuy.length;i++)toBuy[i].addEventListener("click",function(e){e.preventDefault(),modalCart.classList.add("modal-show")});closeModalCart.addEventListener("click",function(e){e.preventDefault(),modalCart.classList.remove("modal-show")}),continueBuying.addEventListener("click",function(e){e.preventDefault(),modalCart.classList.remove("modal-show")}),bigMapButton.addEventListener("click",function(e){e.preventDefault(),modalMap.classList.add("modal-show")}),closeModalMap.addEventListener("click",function(e){e.preventDefault(),modalMap.classList.remove("modal-show")});try{storageName=localStorage.getItem("name"),storageEmail=localStorage.getItem("email")}catch(e){isStorageSupport=!1}writeUsButton.addEventListener("click",function(e){e.preventDefault(),modalWriteUs.classList.add("modal-show"),storageName?(writeUsName.value=storageName,storageEmail?(writeUsEmail.value=storageEmail,writeUsText.focus()):writeUsEmail.focus()):(modalWriteUs.offsetWidth=modalWriteUs.offsetWidth,writeUsName.focus())}),closeWriteUs.addEventListener("click",function(e){e.preventDefault(),modalWriteUs.classList.remove("modal-show"),modalWriteUs.classList.remove("modal-error")}),modalWriteUs.addEventListener("submit",function(e){writeUsName.value&&writeUsEmail.value&&writeUsText.value?isStorageSupport&&(localStorage.setItem("name",writeUsName.value),localStorage.setItem("email",writeUsEmail.value)):(e.preventDefault(),modalWriteUs.classList.remove("modal-error"),modalWriteUs.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(modalWriteUs.classList.contains("modal-show")&&(e.preventDefault(),modalWriteUs.classList.remove("modal-show"),modalWriteUs.classList.remove("modal-error")),modalMap.classList.contains("modal-show")&&(e.preventDefault(),modalMap.classList.remove("modal-show")),modalMap.classList.contains("modal-show")&&(e.preventDefault,modalCart.classList.remove("modal-show")))});