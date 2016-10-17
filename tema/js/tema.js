// Carousel tweets
/*
setInterval(function(){ 
	if($(".tweets-carousel").css("left") >= 0){
		$(this).css({ "left": "-100%" });
		console.log("left>0");
	}
	else{
		$(this).css({ "left": "0" });
		console.log("left=0");
	};
	console.log($(".tweets-carousel").css("left"));
}, 1000);
*/
 
//	...
//	Menu mobile
	
	$(".show-menu").click(function(){
		$(".mobile-menu").toggleClass("open");
		$(".content-wraper").toggleClass("mobile-menu-open");
	});

//	...
//	Anima  conforme a rolagem
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
