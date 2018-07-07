window.addEventListener("scroll", Scroll);

function Scroll() {
	var navBar = document.getElementById("logo");
	var ypos = window.pageYOffset;
	var color =  document.querySelector(".navbar");
	if (ypos > 550) {
		navBar.style.width = "100%";
		color.style.background = "#171a21";
	} else {
		navBar.style.width = "125%";
		color.style.background = "rgba(0,0,0,0)";

	}
}

$("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var link = this.hash;

      $('html, body').animate({
        scrollTop: $(link).offset().top
      }, 800, function(){
   
      });
    }
  });