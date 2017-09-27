define(['jquery'],function($){
	return {
		footer:function(){
			$(function(){
				var $as_1=$('#foot .foot_r1 a');
				var $imgs_1=$('#foot .foot_r1 img');
				$as_1.first().addClass('active');
				$imgs_1.slice(1).hide();
				$as_1.on('mouseenter',$imgs_1,function(){
			        // 获取当前索引值
			        var idx = $(this).index();
			
			        // 高亮
			        $(this).addClass('active').siblings('a').removeClass();
			
			        // 显示对应的内容
			        $imgs_1.eq(idx).fadeIn().siblings('img').fadeOut();
			   });
				
				
				
				var $as_2=$('#foot .foot_r2 a');
				var $imgs_2=$('#foot .foot_r2 img');
				$as_2.first().addClass('active');
				$imgs_2.slice(1).hide();
				$as_2.on('mouseenter',$imgs_2,function(){
			        // 获取当前索引值
			        var idx = $(this).index();
			
			        // 高亮
			        $(this).addClass('active').siblings('a').removeClass();
			
			        // 显示对应的内容
			        $imgs_2.eq(idx).fadeIn().siblings('img').fadeOut();
			    })
				
			});

		}
	}
});

