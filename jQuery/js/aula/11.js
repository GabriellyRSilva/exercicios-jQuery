/* 

	Manipulação DOM inserir na Árvore
	
*/

$("document").ready(function(){
	$("span").click(function(){

		//Add o li dps do primeiro elemento do <ul>
		$("ul").append($("<li>Dentro e na Primeira posição</li>")); 

		//Add o li antes do primeiro elemento do <ul>
		$("ul").prepend($("<li>Dentro e na Primeira posição</li>")); 

		$("ul").before("<h1>Fora e Antes do Elemento");

		$("ul").after("<h1>Fora e depois do Elemento");

		//Coloca o <ul> dentro de um <p>
		$("ul").wrap("<p></p>");

		//Clona o elemento li
		$("ul").append($("li").clone());

	});
});