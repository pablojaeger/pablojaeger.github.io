//	...
//	Define a altura dos Banners

	function defineAlturaBanners()
	{
		var alturaJanela = $(window).height();
		console.log(alturaJanela);

		$(".banner").each(function(){
			$(this).css({"height":alturaJanela});
		});
		$(".landing-news").each(function(){
			$(this).css({"min-height":alturaJanela});
		});
		$(".landing-diagnostico").each(function(){
			$(this).css({"min-height":alturaJanela});
		});
		/*$(".secao.atuacao").each(function(){
			$(this).css({"min-height":alturaJanela});
		});*/

		var alturaLinhaEspecialidades = $(".secao.apresentacao").height();
		
		$(".secao .crise").each(function(){
			$(this).css({"min-height":alturaJanela - alturaLinhaEspecialidades});
		});

		$(".secao .fiscal, .secao .dp, .secao .gestao, .secao .capa-blog, .secao .capa-sobre" ).each(function(){
			$(this).css({"min-height":alturaJanela * 0.5});
		});

		$(".secao .post-blog" ).each(function(){
			$(this).css({"min-height":alturaJanela * 0.75});
		});
		
		/*
		$(".secao").each(function(){
			$(this).css({"min-height": (alturaJanela * 0.9)});
		});
		*/
	}

//	...
//	Fixa o menu

	function fixaMenu()
	{
		var scrollPagina = $(window).scrollTop();
		var valorScrollTopMenu = $("#nav-topo").offset().top;
		var alturaBarraDestaqueTopo = $("#barra-destaque-topo").outerHeight();
		
		
		if(scrollPagina > alturaBarraDestaqueTopo)
		{
			if(!$("#nav-topo").hasClass("nav-dinamica"))
			{
				$("#nav-topo").addClass("nav-dinamica");
			}
			$(".back-to-top").addClass("mostra");
		}
		else
		{
			if($("#nav-topo").hasClass("nav-dinamica"))
			{
				$("#nav-topo").removeClass("nav-dinamica");
				//$(".assine-news").addClass("oculto");
			}
			$(".back-to-top").removeClass("mostra");
		}
		
		
		if( scrollPagina > 149 )
		{
			var opacidade = 0.95;
			$(".nav-efeito-cor").css({'background-color':'rgba(37, 49, 110,' + opacidade + ')'});
		}
		else if( scrollPagina > 99 )
		{
			var opacidade = 0.6;
			$(".nav-efeito-cor").css({'background-color':'rgba(37, 49, 110,' + opacidade + ')'});
		}
		else if( scrollPagina > 49 )
		{
			var opacidade = 0.3;
			$(".nav-efeito-cor").css({'background-color':'rgba(37, 49, 110,' + opacidade + ')'});
		}
		else if( scrollPagina == 0 )
		{
			var opacidade = 0;
			$(".nav-efeito-cor").css({'background-color':'rgba(37, 49, 110,' + opacidade + ')'});
		}
		/*
		else if ( scrollPagina > 1 && scrollPagina < 500 )
		{			
			var opacidadeRolagem = (scrollPagina / 50 ) / 10;
			
			if( scrollPagina > 0)
			{
				if (opacidadeRolagem < 0.95)
				{
					$(".nav-dinamica").css({'background-color':'rgba(37, 49, 110,' + opacidadeRolagem + ')'});
				}
			}
		}
		*/
	}
 
 //	...
 //	jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

//	...
//	Menu mobile
	
	$(".show-menu").click(function(){
		$(".mobile-menu").toggleClass("open");
		$(".content-wraper").toggleClass("mobile-menu-open");
	});


//	...
//	Chamada das funções

	$(window).scroll(function(){
		fixaMenu();
	});

	$(window).resize(function()
	{
		defineAlturaBanners();
	});

	defineAlturaBanners();  
	fixaMenu();
	

//	...
//	Anima  conforme a rolagem
/*
	function boxTop(idBox) {
	  var boxOffset = $(idBox).offset().top;
	  return boxOffset;
	}

	$(document).ready(function() {
	  var $target = $('.scroll-animation'),
	      animationClass = 'pre-animation',
	      windowHeight = $(window).height(),
	      offset = windowHeight - (windowHeight / 4);

	  function animeScroll() {
	    var documentTop = $(document).scrollTop();
	    $target.each(function() {
	      if (documentTop > boxTop(this) - offset) {
	        $(this).removeClass(animationClass);
	      } else {
	        $(this).addClass(animationClass);
	      }
	    });
	  }
	  animeScroll();

	  $(document).scroll(function() {
	    animeScroll();
	  });
	});
*/