
if ( $(window).width() > 900) {


console.log("Hello World");

function Scroll() {
	var navBar = document.getElementById("logo");
	var ypos = window.pageYOffset;
	var color =  document.querySelector(".navbar");
	if (ypos > 550) {
		navBar.style.width = "100%";
		color.style.background = "#171a21";
	} else {
		navBar.style.width = "125%";
		color.style.background = "#3e404c";

	}
}

}

window.addEventListener("scroll", Scroll);