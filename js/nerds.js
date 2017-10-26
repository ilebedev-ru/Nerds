var writelink = document.querySelector(".write-link");
var popup = document.querySelector(".write-us");
var login = popup.querySelector("[name=name]");
var close = popup.querySelector(".button-close");

writelink.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-open");
	login.focus();
 });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-open");
  });
