

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
	
$(function () {

	const $document = $(document);
		let fadeElem = $('.fade-scroll');



		$document.on('scroll', function() {
			const currScrollPos = $document.scrollTop();

			fadeElem.each(function() {
				const $this = $(this);
				elementOffsetTop = $this.offset().top;

				if (currScrollPos > elementOffsetTop) $this.css({'opacity': 1 -(currScrollPos-elementOffsetTop)/350});
			} )
		})

})

var typed = new Typed('#typed', {
	strings: ['Matthew Dodi', 'a Web Developer', 'a Web Designer'],
	typeSpeed: 80,
	backSpeed: 40,
	startDelay: 1500,
	backDelay: 1400,
	smartBackspace: false,
	loop: true
  });