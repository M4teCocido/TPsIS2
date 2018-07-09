$(document).ready(function(){
	$('.carousel').carousel();

	$('.carousel.carousel-slider').carousel({
	    fullWidth: true,
	    indicators: true
	});

	$(".dropdown-trigger").dropdown();

	setInterval(function(){ $('.carousel').carousel('next'); }, 3500);
	$('select').formSelect();

	$('#login').click(function(){
		var id = $('#user').val();
		//alert("ingreso de usuario " + id);
		//document.location.href = newUrl;
	});
});