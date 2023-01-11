// Register Đăng ki
const register = document.querySelector(".js-form-register");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const modalClose = document.querySelector(".js-close");

// Log in Dang nhap
const loGin = document.querySelector(".js-form-login");
const modalLogin = document.querySelector(".js-modal-login");
const modalCloseLogin = document.querySelector(".js-close-login");
const modalContainerLogin = document.querySelector(".js-modal-container-login");

function showRegister() {
  modal.classList.add("open");
}

function hideRegister() {
  modal.classList.remove("open");
}

function nofoamoncard(event) {
  event.stopPropagation();
}

register.addEventListener("click", showRegister);
modalClose.addEventListener("click", hideRegister);
modal.addEventListener("click", hideRegister);
modalContainer.addEventListener("click", nofoamoncard);

// Log in Dang nhap
function showLogin() {
  modalLogin.classList.add("open");
}

function hideLogin() {
  modalLogin.classList.remove("open");
}

loGin.addEventListener("click", showLogin);
modalCloseLogin.addEventListener("click", hideLogin);
modalLogin.addEventListener("click", hideLogin);
modalContainerLogin.addEventListener("click", nofoamoncard);
