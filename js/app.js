// Scroll Reveal

window.sr = ScrollReveal();
sr.reveal('.navbar', {
	duration: 2000,
	origin: 'bottom'
});
sr.reveal('.imageOne', {
	duration: 2000,
	origin: 'top',
	distance: '18.75rem'
});
sr.reveal('.articleOne', {
	duration: 2000,
	origin: 'right',
	distance: '18.75rem'
});
sr.reveal('.heroThree', {
	duration: 2000,
	origin: 'bottom',
	distance: '18.75rem'
});
sr.reveal('.articleTwo', {
	duration: 2000,
	origin: 'right',
	distance: '18.75rem',
	viewFactor: 0.2
});
sr.reveal('.card-deck', {
	duration: 2000,
	origin: 'left',
	distance: '18.75rem',
	viewFactor: 0.2
});
sr.reveal('.articleThree', {
	duration: 2000,
	origin: 'top',
	distance: '18.75rem',
	viewFactor: 0.2
});
sr.reveal('.videoRowOne', {
	duration: 2000,
	origin: 'top',
	distance: '18.75rem',
	viewFactor: 0.2
});
sr.reveal('.videoRowTwo', {
	duration: 2000,
	origin: 'top',
	distance: '18.75rem',
	viewFactor: 0.2
});

// Smooth Scrolling

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});