var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var popupClose = popup.querySelector(".modal-close");
var login = popup.querySelector('[name="login"]');
var password = popup.querySelector('[name="password"]');
var form = popup.querySelector('form');
var storage = "";
var isStorageWorks = true;

try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageWorks = false;
}

link.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.add("modal-show");
	if (isStorageWorks && storage) {
		login.value = storage;
		password.focus();
	} else {
	login.focus();
	}
});

popupClose.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt){
	if (!login.value || !password.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
			if (isStorageWorks) {
			localStorage.setItem("login", login.value);
			}
		}
});
window.addEventListener("keydown", function(evt){
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {	
			evt.preventDefault();	
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});