/* 
	Manipulação de atributos
*/

$("document").ready(function(){
	$("span").click(function() {  				//Quando clicar no elemento span vai executar a function()

		 alert($("img").attr("title")); 			//Imprime o atributo(attr) do elemento img 
												//Imprime o atributo(attr) do elemento src (source)
		$("img").attr("src", "img/Penguins.jpg");  //Altera a imagem do atributo(attr) src(source)
		
		/*alert($("img").attr({					Manipulação de atributos ao estilo JSON
			title	: "Koala Australiano",
			src  	: "img/Penguins.jpg"
		})); */

		//$("img").removeAttr("src"); remove os atributos

		

	});
});