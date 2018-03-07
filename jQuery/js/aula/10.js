/* 

	Manipulação DOM

*/

$("document").ready(function(){
	$("span").click(function(){

		var img = $("<img/>", {			// Atribuição da var img por uma imagem e seus 'atributos'

			src: "img/Koala.jpg",
			title: "Koala Australiano",
			click: function(){
				alert("Koalas são fofinhos");		//Imprime a mensagem quando clicar na imagem
			}
		});

		var ul = $("<ul/>").append($("<li/>").append("Os koalas são mamíferos"));

		/*Inserção da var img (que contém a imagem Koala.jpg) no body ao clicar no <span> 
		  e da var ul que contém uma lista 
		*/
		$("body").append(ul).append(img); 			
	});
});