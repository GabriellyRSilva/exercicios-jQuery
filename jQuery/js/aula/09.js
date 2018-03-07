/*

	Manipulação do conteudo 

*/

$("document").ready(function(){
	$("span").click(function(){

		//alert($("p").html()); 					  //Recupera o primeiro elemento em html

		//$("p").html("<h1>Conheça o Brasil</h1>"); //Atribui ao <p> o elemento dentro do .html()

	  //$("div > div").text("<h1>Conheça o Brasil</h1>"); Atribui ao <div> (filha) o elemento do tipo text
	  // alert($("div > div").text());

	 // $("div > div").text($("p").html()); 		Atribui ao <div>(filha) o elemento do tipo text do <p> no formato html

	 //alert($("textarea").val()); 				Imprime o valor do elemento <textarea>

	 //$("p").html($("textarea").val()); 			Atribui ao <p> o valor do elemento <textarea>

	 $("div > div").replaceWith($("textarea").val()); 	//Atribui <div>(filha) o valor do  <textarea>



	});
});