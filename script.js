$(document).ready(function() {
   $("#button_effects1").on("mouseenter", function() {
   		$(this).css( "background-color", "red");
   	});

   $("#button_effects1").on("mouseleave", function() {
   	$("#button_effects1").css( "background-color", "rgba(129, 187, 201,.85)");

   	});
   	$("#button_effects2").click(function() {
   		$(".card_para").hide(2000).show(2000);
	});
 });	
