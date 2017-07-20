//	...
//	Auxilio navegacao

	function auxilioNavegacao(){
		var windowScrollTop = $(window).scrollTop();
		//
		$(".foco-atuacao").each(function(){
			var posicaoBlocoInicial = $(this).offset().top;
			var conteudoTitulo = $(this).find(".titulo-rolador").text();
			$(this).find(".titulo-fixo").find(".nome-foco-atuacao").text(conteudoTitulo);		
		});
		//
		var topReferenciaMsgFixa =  $(".foco-atuacao:first-of-type").offset().top + 120;

		if (windowScrollTop < 120) {
			$(".areas-atuacao .msg-fixa").css({
				"top": topReferenciaMsgFixa
			});
		}
		
		console.log(windowScrollTop);
		//

		$(window).scroll(function(){
			$(".foco-atuacao").each(function()
			{
				var posicaoBloco = $(this).offset().top;
				var alturaBloco = $(this).height();
				var tituloFixoPositionTop = $(this).find(".titulo-fixo").position().top;
				var deslocamentoBloco = (posicaoBloco + alturaBloco) - $(window).scrollTop();
				//
				var tituloRoladorPosicao = $(this).find(".titulo-rolador").offset().top - $(window).scrollTop();
				//
				if( tituloRoladorPosicao <= tituloFixoPositionTop )
				{
					$(this).addClass("titulo-fixado");
				}
				if( tituloRoladorPosicao > tituloFixoPositionTop )
				{
					$(this).removeClass("titulo-fixado");
				}
				//			
				if( deslocamentoBloco < $(this).find(".titulo-fixo").innerHeight() + 40)
				{
					if($(this).hasClass("titulo-fixado")){
						$(this).find(".titulo-fixo").addClass("oculto");
					}
				}
				else{
					if($(this).hasClass("titulo-fixado")){
						$(this).find(".titulo-fixo").removeClass("oculto");
					}
				}
			});
			//
			//
			deslocamentoJanela = $(window).scrollTop();
			var topReferenciaMsgFixa2 =  parseInt(topReferenciaMsgFixa - deslocamentoJanela);
			

			if (topReferenciaMsgFixa2 > 120) {
				$(".areas-atuacao .msg-fixa").css({
					"top": topReferenciaMsgFixa2 + "px"
				});
			}
			else
			{
				$(".areas-atuacao .msg-fixa").css({
					"top": "120px"
				});
			}
		});
	}


//	...
//	Chamada das funções
auxilioNavegacao();