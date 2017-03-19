$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});
	

$(document).ready(function(){

// MOBILE VERSION

	$(".mini-button-menu").click(function(e) {
		e.preventDefault();
		$(".navbar").toggleClass('mini');
		$(".header-top__form-search").removeClass('mini');
		$(".holder-modal.modal-user").removeClass('show-modal');
		$(".holder-modal.modal-basket").removeClass('show-modal');
	});

	$(".mini-search").click(function(e) {
		e.preventDefault();
		$(".header-top__form-search").toggleClass('mini');
		$(".navbar").removeClass('mini');
		$(".holder-modal.modal-user").removeClass('show-modal');
		$(".holder-modal.modal-basket").removeClass('show-modal');
	});

// POPUP USER

	$(".user").click(function(e) {
		e.preventDefault();
		$(".holder-modal.modal-user").addClass('show-modal');
		$(".navbar").removeClass('mini');
		$(".header-top__form-search").removeClass('mini');
		$(".holder-modal.modal-basket").removeClass('show-modal');
	});
	$(".modal__close").click(function(e) {
		e.preventDefault();
		$(".holder-modal.modal-user").removeClass('show-modal');
	});
	$(".overlay").click(function(e) {
		e.preventDefault();
		$(".holder-modal.modal-user").removeClass('show-modal');
	});

// POPUP BASKET

	$(".basket").click(function(e) {
		e.preventDefault();
		$(".holder-modal.modal-basket").addClass('show-modal');
		$(".holder-modal.modal-user").removeClass('show-modal');
		$(".navbar").removeClass('mini');
		$(".header-top__form-search").removeClass('mini');
	});
	$(".modal__close").click(function(e) {
		e.preventDefault();
		$(".holder-modal.modal-basket").removeClass('show-modal');
	});
	$(".overlay").click(function(e) {
		e.preventDefault();
		$(".holder-modal.modal-basket").removeClass('show-modal');
	});

// NO  SCROLL
	$( '.holder-modal' ).bind( 'mousewheel DOMMouseScroll', function ( e ) {
	    var e0 = e.originalEvent,
	        delta = e0.wheelDelta || -e0.detail;
	    
	    this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
	    e.preventDefault();
	});

	$('.overlay').bind( 'mousewheel DOMMouseScroll', function ( e ) {
	    var e0 = e.originalEvent,
	        delta = e0.wheelDelta || -e0.detail;
	    
	    this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
	    e.preventDefault();
	});



/* Main-carousel*/
	$('.main-carousel').slick({
		dots: true,
		speed: 1000,
		autoplay:true,
		prevArrow: '<button class="slick-prev"><i class="icon-arrow-left"></i></button>',
		nextArrow: '<button class="slick-next"><i class="icon-arrow-right"></i></button>',
		autoplaySpeed:5000
	});

});


/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){

	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();	
	$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



