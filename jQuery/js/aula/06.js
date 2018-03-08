/* 

	Seletores de Atributos

*/

$(document).ready(function(){

	$("a[name=menu]")
	//Seleciona com a cor #CCC todos elementos <a> que tenham name=menu
	.css("background", "#CCC");

	$("a[href*=min")
	//Seleciona com a cor red todos elementos <a> que tenham no href um trecho com "min"
	.css("background", "red");

	$("a[name|=exemplo]")
	/* Seleciona todos elementos que começam com name=exemplo e seguidos de hífen(-)
	   No caso, o name é exemplo-1
	*/
	.css("background", "green");

	$("a[name~=curriculo]")
	// Seleciona todos elementos name que contenham espacos e possuem a palavra 'curriculo'
	.css("background", "yellow");

	$("a[href$=com]")
	//Seleciona todos elementos que tenham trechos de palavras (com) no fim do href 
	.css("background", "brown");

	$("a[name^=te]")
	//Seleciona todos elementos que começam com a sílada 'te'
	.css("background", "purple");

});