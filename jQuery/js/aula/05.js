/* 
	Seletores de Contéudo jQuery
*/
$(document).ready(function(){

	$("td:contains('Crime'), td:contains('Drama')")
	//Preenche o conteudo contido em contains() com a cor #CCC
	.css("background", "#CCC");

	$("th:has(strong)")
	////Preenche todos os th que possui strong com a cor #CCC
	.css("background", "red");

	$("*:empty()")
	//Preenche todos(*) os conteudos que são vazios(empty()) com a cor azul
	.css("background", "blue");

	$("td+td:parent")
	//:parent vai selecionar todos elementos que tenham pelos menos um filho
	//td+td vai pegar o irmao do primeito td , no caso ele pega o segundo td e prenche todos com verde
	.css("background", "green");
});