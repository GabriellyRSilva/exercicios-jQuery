/* 

	Seletores de Formulários

*/

$(document).ready(function(){
	//Todos os input ficam com borda vermelha
	$(":input").css("border","3px solid #FF0000");

	$(":button").click(function(){
		$(":checkbox").parent().css("border", "3px solid #0048ff");
	});

});