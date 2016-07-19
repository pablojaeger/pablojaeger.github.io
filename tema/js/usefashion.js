/* alert("executou"); */

$(document).ready(function(){
	
	
	/* EFEITO DE ROLAGEM AO CLICAR */
	
	$(".rolagemSuave").click(function(event){        
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 600, 'swing');
	});
	/* -------------------------------------------------------------- */

	
	/* EFEITOS POP-UP */	
	function centralizarPopup(){
		$(".conteudo-popup").each(function(){
			var valorMarginTopPopup = ($(this).outerHeight() / 2) * -1
			$(this).css({"margin-top":valorMarginTopPopup, "top":"50%"});
		});
	}

	function abrePopupCursos(){
		$(".curso").each(function(){
			$(this).click(function(){
				var indiceCurso = $(this).index();
				$(this).parent().parent().siblings(".popup-overlay").find("li").eq(indiceCurso).show();
				$(this).parent().parent().siblings(".popup-overlay").fadeIn(200);
				centralizarPopup();
				$("body").addClass("body-sem-rolagem");
			});
		});
	}
	/* function abrePopupAgenda(){
		$("#ver-palestras").click(function(e){
			e.preventDefault();
			$(this).parent().siblings("#popupPalestras").fadeIn(200);
			centralizarPopup();
			dimensionaTabelaAgenda();
			$("body").addClass("body-sem-rolagem");
		});
	} */
	function abrePopup(){
		$(".abre-popup").click(function(e){
			e.preventDefault();
			var idBotao = "#" + $(this).attr("id");
			if(idBotao == "#ver-palestras"){
				$(this).parent().siblings("#popupPalestras").fadeIn(200, function(){
					var idElemento = "#" + $(this).attr("id");
					var alturaTotal = $(" "+ idElemento +" .popup-area-infos .conteudo-tabela-popup").outerHeight();
					var alturaCabecalho = $(" "+ idElemento +" .popup-area-infos .conteudo-tabela-popup .cabecalho-tabela").outerHeight();
					var alturaConteudo = alturaTotal - alturaCabecalho;
					$(" "+ idElemento +" .popup-area-infos .conteudo-tabela-popup .corpo-tabela").outerHeight(alturaConteudo);
				});
			}
			if(idBotao == "#ver-palestrantes"){
				$(this).parent().siblings("#popupPalestrantes").fadeIn(200, function(){
					var idElemento = "#" + $(this).attr("id");
					var alturaTotal = $(" "+ idElemento +" .popup-area-infos .conteudo-tabela-popup").outerHeight();
					var alturaCabecalho = $(" "+ idElemento +" .popup-area-infos .conteudo-tabela-popup .cabecalho-tabela").outerHeight();
					var alturaConteudo = alturaTotal - alturaCabecalho;
					$(" "+ idElemento +" .popup-area-infos .conteudo-tabela-popup .corpo-tabela").outerHeight(alturaConteudo);
				});
			}
			centralizarPopup();
			$("body").addClass("body-sem-rolagem");
		});
	}
	function fechaPopUp(){
		$(".conteudo-popup .botao-fechar").click(function(){
			$(".popup-overlay").find("li").hide();
			$(this).parents(".popup-overlay").fadeOut(200, function(){
				$("body").removeClass("body-sem-rolagem");
			});
		})
		$(".popup-overlay, .conteudo-popup").click(function(){
			$(".popup-overlay").find("li").hide();
			$(".popup-overlay").fadeOut(200, function(){
				$("body").removeClass("body-sem-rolagem");
			});
		});
		$(".conteudo-popup *").click(function(event){
			event.stopPropagation();
		})
	}
	
	function dimensionaTabelaAgenda(){
		var alturaTotal = $(".popup-area-infos .conteudo-tabela-popup").outerHeight();
		var alturaCabecalho = $(".popup-area-infos .conteudo-tabela-popup .cabecalho-tabela").outerHeight();
		var alturaConteudo = alturaTotal - alturaCabecalho;
	}
	
	centralizarPopup();
	abrePopupCursos();
	/* abrePopupAgenda(); */
	abrePopup();
	fechaPopUp();
	
	/* -------------------------------------------------------------- */
	
	
	
	/* EFEITOS DO MENU */

	var valorScrollTopReferencia = $(".menu").offset().top;
	var sessaoAtiva = 0;
	var numeroSecoes = $(".secoes").length;
	var indiceSecao = numeroSecoes - 1;
	
	/* funcao q aciona a marcacao do menu ativo */
	function marcadorSecaoAtiva(){
		var indiceSecao = numeroSecoes - 1;
		for (i = indiceSecao; i > -1; i--)
		{ 
			if($(".secoes").eq(i).offset().top - $(window).scrollTop() < 100 ){
				sessaoAtiva = numeroSecoes;
			}else{
				indiceSecao--;
			}
		}
		if(indiceSecao == -1){
			$(".marcador").outerWidth(0);
			$(".marcador").offset({left:$(".menu .link-secoes").eq(0).offset().left});
		}else{
			$(".marcador").show();
			//$(".marcador").outerWidth($(".menu .link-secoes").eq(indiceSecao).outerWidth());
			
			if($(window).outerWidth() <= 750){
				$(".marcador").hide();
			}else{
				$(".marcador").offset({left:$(".menu .link-secoes").eq(indiceSecao).offset().left});
				$(".marcador").outerWidth($(".menu .link-secoes").eq(indiceSecao).outerWidth());
				$(".marcador").css({"top":"100%"});
				//$(".link-secoes:visible").css({"display":"inline-block"});
			}
		}		
	}
	
	function fixaMenu(){
		var scrollPagina = $(window).scrollTop();
		var valorScrollTopMenu = $(".menu").offset().top;
		if((valorScrollTopMenu - scrollPagina)< 0) {
			$(".menu").addClass("menu-fixo");
			$(".menu-fixo .link-secoes").click(function(){
				$(".link-secoes:not(:last-of-type)").removeClass("visivel");
				$(".botao-login").removeClass("link-secoes");
				$(".menu-sanduiche").removeClass("menu-sanduiche-aberto");
			});
			$(".botao-login").click(function(){
				$(".menu-fixo .link-secoes").click();
			});
		}
		if((valorScrollTopReferencia - scrollPagina)> 0) {
			$(".menu").removeClass("menu-fixo");
			$(".link-secoes:not(:last-of-type)").removeClass("visivel");
			$(".botao-login").removeClass("link-secoes");
			$(".menu-sanduiche").removeClass("menu-sanduiche-aberto");
		}
	}

	$(".menu-sanduiche").click(function(){
		$(".link-secoes:not(:last-of-type)").toggleClass("visivel");
		$(".botao-login").toggleClass("link-secoes");
		$(this).toggleClass("menu-sanduiche-aberto");
	});
	
	$(window).scroll(function(){
		marcadorSecaoAtiva();
		fixaMenu();
	});
	
	$(window).resize(function(){
		marcadorSecaoAtiva();
		centralizarPopup();
		dimensionaTabelaAgenda();
	});
	
	marcadorSecaoAtiva();
	fixaMenu();
	
	/* -------------------------------------------------------------- */
	
	
	
	/* REDIMENSIONAMENTO DO <TEXTAREA> */
	var alturaTextarea = $(".grupo-campos:first-of-type").outerHeight() - 30;
	$(".grupo-campos textarea").outerHeight(alturaTextarea);
	
	/* -------------------------------------------------------------- */
	
	
	$("#palestrasWorkshops a[href='#contato']").click(function(){
		$("#contato #form-contato #assuntoMsg option:nth-child(4)").attr('selected', 'selected');
	})
	
	$("#projetosEspeciais a[href='#contato']").click(function(){
		$("#contato #form-contato #assuntoMsg option:nth-child(5)").attr('selected', 'selected');
	})
	
	
	/* -------------------------------------------------------------- */


}); 

