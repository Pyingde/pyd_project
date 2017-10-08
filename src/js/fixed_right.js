define(['jquery'],function($){
	return {
		fixed_right:function(){
			var $li_b=$('#fix_right_b ul li').eq(3);
			$li_b.on('click',function(){
				$("html,body").animate({scrollTop:0});
			});
			
			//点击隐藏，hover出现
			var $img=$('#fix_right_t i').eq(0);
			var $box=$('#fix_right_t .box').eq(0);
			var $i=$('#fix_right_t i').eq(1);
			
			$i.on('click',function(){
				$box.css({display:'none'})
			})
			$img.on('mouseenter',function(){
				$box.css({display:'block'})
			});
		}
	}
});