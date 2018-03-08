/* 

	Eventos de Mouse

*/

$(document).ready(function(){
	$(".event").click(function(){		//Modifica o conteudo da div quando span for clicado
		$(".mouseEvent").text("Click").css("color", "blue");
		//Ao clicar duas vezes o span modifica o conteudo da div com a função .dblclick()
	}).dblclick(function(){
		$(".mouseEvent").text("Click Duplo").css("color", "red");
		//Ao passar o mouse no span a div se modifica
	}).mouseover(function(){
		$(".mouseEvent").text("Mouse Over").css("color", "white");
		//Ao tirar o mouse de cima do elemento span altera o conteudo da div
	}).mouseout(function(){
		$(".mouseEvent").text("Mouse Out").css("color", "black");
	});

		//Ao clicar e segurar o botao do mouse a div .mouseEvent2 muda de texto e a cor do texto
	$(".event2").mousedown(function(){
		$(".mouseEvent2").text("Mouse Down").css("color", "yellow");
		//Quando não estiver sendo pressionada o botao do mouse a div .mouseEvent2 muda de texto e a cor do texto
	}).mouseup(function(){
		$(".mouseEvent2").text("Mouse Up").css("color", "green");
	});
	//Mostra a posição do mouse no elemento div ao passar o mouse no span
	$(".event3").mousemove(function(p){
		$(".mouseEvent3").text("X = "+p.clientX+"Y = "+p.clientY);
	})
});