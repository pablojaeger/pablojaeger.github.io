


function defineAlturaDestaque()
{
	var alturaJanela = $(window).height();
	var alturaBarraNav = $("#nav_geral").outerHeight();
	$("#capa").height(alturaJanela - alturaBarraNav);

	$(".secao").each(function(){
		$(this).css({"min-height":alturaJanela});
	});
}
 //**//**//**//**//**//**//**//**//**//**//**//
function fixaMenu()
{
	var scrollPagina = $(window).scrollTop();
	var valorScrollTopMenu = $("#nav_geral").offset().top;
	var alturaBarraNav = $("#nav_geral").outerHeight();
	if((valorScrollTopMenu - scrollPagina - alturaBarraNav)< 0)
	{
		if(!$("#nav_geral").hasClass("menu-fixo"))
		{
			$("#nav_geral").addClass("menu-fixo");
		}
	} 
}


// function identificaSecao(){
// 	$(".link-secoes a").each(function() {

// 		$(this).click(function(){
// 		    $(".link-secoes").parent().removeClass('active');
// 			$(this).parent().addClass('active');
// 		});

// 		/*
// 		$(this).click(funtion(){
// 			$(".link-secoes").removeClass('ativo');
// 			$(this).addClass('ativo');
// 		});
// 		*/
// 	});
// }
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 500, 'easeInOutExpo');
        event.preventDefault();
    });
});


var lastScrollTop = 0;
$(window).scroll(function(event)
{
	var st = $(this).scrollTop();
	if (st > lastScrollTop)
	{//desceu
	   fixaMenu();
	} 
	else 
	{//subiu
	  $("#nav_geral").removeClass("menu-fixo");
	}
	lastScrollTop = st;
});

$(window).scroll(function(){
	fixaMenu();
});

$(window).resize(function()
{
	defineAlturaDestaque();
});

defineAlturaDestaque();  
fixaMenu();
//identificaSecao();