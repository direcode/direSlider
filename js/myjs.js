$(function(){

	$('.box').mouseenter(function(){
			/*$(this).find('.hover').stop(true, true).animate({opacity:1},'fast');*/	
			$(this).find('.hover').stop(true, true).animate({top:'50'},'fast');
			$(this).find('.hover2').stop(true, true).delay(100).animate({top:'0'},'fast');
	});
	$('.box').mouseleave(function(){
			/*$(this).find('.hover').stop(true, true).animate({opacity:0},'fast');*/
			$(this).find('.hover').stop(true, true).animate({top:'150'},'fast');
			$(this).find('.hover2').stop(true, true).delay(100).animate({top:'200'},'fast');
	});
	
	
	/* Attr Starts Here*/
		var email_default='Enter your email';
		
		$('input[type="email"]').attr('value',email_default). focus(function(){
			
			if($(this).val()== email_default){
			 $(this).val('');
			
			}

		}).blur(function(){
		
		if($(this).val()==''){
			$(this).val(email_default);
		}
		
		
		});
	
	/*Attr Ends Here*/
	
	$(button).html("click me");
});