/* 

	Manipulação DOM remoção na Árvore
	
*/

$(document).ready(function(){
	$("span").click(function(){

		//Remove o h1 que contem o id = titulo ao clicar
		//$("h1").remove("#titulo");
		//$("#titulo").remove();

		//Esvazia o conteudo sem excluir a tag
		//$("li").empty();

		//Remove o elemento que está envolvente
		$("ul").unwrap();

	});
		//Add o li dps do primeiro elemento do <ul>
		$("ul").append($("<li>Dentro e na Primeira posição</li>")); 

		//Add o li antes do primeiro elemento do <ul>
		$("ul").prepend($("<li>Dentro e na última posição</li>")); 

		$("ul").before("<h1 id='titulo'>Fora e Antes do Elemento");

		$("ul").after("<h1>Fora e depois do Elemento");

		//Coloca o <ul> dentro de um <p>
		$("ul").wrap("<p></p>");

		//Clona o elemento li
		$("ul").append($("li").clone());


});