$(document).ready(function(){

	/*scroll btn time out*/
	setTimeout ("$('.banner .scroll').fadeIn('slow');",2000);

/*	page animation
	$(document).on('click', '.banner .scroll', function(){
		$('.main-screen').show();
		setTimeout ("$('.hidden-tittle').show();",800);
		$('.background-img').show();
		//setTimeout ("$('.banner').hide();",1000);
	});*/
	
	/*btn to main-screen*/
	$(document).on('click', '.banner .scroll', function(event){
		event.preventDefault();
		var id = $(this).attr('href');
		var top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

	/*location and contacts btn*/
	$(document).on('click', '.nav-btn', function(){
		$(this).prev().show('slow');
		$(this).hide('slow');
	});

	/*close side-menu btn*/
	$(document).on('click', '.close', function(){
		$(this).parent().hide('slow');
		$(this).parent().next().show('slow');

	});

	/*click out of nav*/
	$(document).mouseup(function(e){
		var div = $('.nav-btn').prev();
		if(!div.is(e.target) && div.has(e.target).length === 0) {
				div.hide('slow');
				$('.nav-btn').show();
				}
	});
	
});