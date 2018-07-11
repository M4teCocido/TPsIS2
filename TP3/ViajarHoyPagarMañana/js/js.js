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
		if(id == 1){
			document.location.href = "registrado.html";
		}
		if(id == 2){
			document.location.href = "operador.html";
		}
		if(id == 3){
			document.location.href = "administrador.html";
		}

		//alert("ingreso de usuario " + id);
		//document.location.href = newUrl;
	});
});