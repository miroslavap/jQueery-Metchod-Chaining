 $(document).ready(function() {

   	$("#button_effects1").mouseenter(function() {
   		$(this).removeClass("makeRed").addClass("makeBorder");
   	});

   $("#button_effects1").mouseleave(function() {
   	$("#button_effects1").removeClass("makeBorder").addClass("makeRed");

   	});
   	
 });	