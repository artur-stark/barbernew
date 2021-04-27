var popupMap = document.querySelector(".modal-map");
var linksMap = document.querySelectorAll(".link-map");
var closeMap = popupMap.querySelector(".modal-close");

for (let linkMap of linksMap){
	linkMap.addEventListener("click", function(evt){
		evt.preventDefault();
		popupMap.classList.add("modal-show");
	});
}
closeMap.addEventListener("click", function(evt){
	popupMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt){
	if (evt.keyCode === 27) {
		evt.preventDefault();
		popupMap.classList.remove("modal-show");
	}
});