/* 
	Seletores de Ordem em jQuery 
*/

$(document).ready(function(){

	$("tbody tr:first")
	// first vai selecionar o primeiro elemento
	// last vai selecionar o ultimo elemento
	// even vai selecionar os elementos em pares
	// odd vai selecionar os elementos em impares
	// com o not() inverte o comando e nega 
	//gt() vai selecionar os elementos maiores que o numero especificado em ()
	//lt() vai selecionar os elementos menores que o numero especificado em ()
	.css("background", "#CCC");

});