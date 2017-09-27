define(['jquery'],function($){
	return {
		header_1:function(){
			$(function($){
				var $li=$('.header1 ul li:nth-child(4)');
				var $erweima=$('.header1 .erweima');
				var $imgs=$('.header1 .erweima img');
				var $h4s=$('.header1 .erweima h4');
				$li.on('mouseenter',$erweima,function(){
					$erweima.css({display:`block`});
					$erweima.stop().animate({height:215});
				}).on('mouseleave',$erweima,function(){
					$erweima.stop().animate({height:0},function(){
						$erweima.css({display:`none`});
					});	
				})
				
				$h4s.first().addClass('active');
				$imgs.slice(1).hide();
				$h4s.on('mouseenter',$imgs,function(){
			        // 获取当前索引值
			        var idx = $(this).index();
			
			        // 高亮
			        $(this).addClass('active').siblings('h4').removeClass();
			
			        // 显示对应的内容
			        $imgs.eq(idx).fadeIn().siblings('img').fadeOut();
			    });
				
			
				
			var $li_6=$('.header1 ul li:nth-child(6)');
				var $fuwu=$('.header1 .fuwu');
			//	var $h4s_6=$('.header1 .fuwu h4');
				$li_6.on('mouseenter',$fuwu,function(){
					$fuwu.css({display:`block`});
					$fuwu.stop().animate({height:176});
				}).on('mouseleave',$fuwu,function(){
					$fuwu.stop().animate({height:0},function(){
						$fuwu.css({display:`none`});
					});	
				})
				
			});
		}
	}
});


