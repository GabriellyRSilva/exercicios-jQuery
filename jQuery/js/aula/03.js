	$(document).ready(function(){ 	
			//Seletor de descendente					
			$("div span").css("background-color", "yellow");

			//filhos do elemento
			$("li > ul").css("color", "red");

			//Irmãos do elemento 
			//$("#Item1_1 + li").css("color", "blue"); o sinal + acha apenas um elemento , ~ acha todos
			$("#Item1_1 ~ li").css("color", "blue"); // Irmãos do #Item1_1 
		});
