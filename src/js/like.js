define(['jquery'],function($){
	return {
		like:function(){
			jQuery(function($){
				var $imgs= $('#like .box_r img');
				$('#like .box_r ').on('mouseenter','li',function(){
			       	$(this).siblings('li').css({opacity:0.5});
				});
				$('#like .box_r ').on('mouseleave','li',function(){		
			       	$('#like .box_r li').css({opacity:1});
				});
			});

		}
	}
});

