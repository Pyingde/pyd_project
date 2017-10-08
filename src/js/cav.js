define(['jquery','xcarousel'],function($){
	return {
		cav:function(){
			var $cov=$('#main_2 .shai .cov');
			
			var $last=$('#main_2 .last');
			$last.on('click',function(){
				if($cov.height()===0){
					$cov.animate({height:213},function(){
						$last.html('收起<i class="iconfont icon-left-copy-copy"></i>')
					});		
				}
				else if($cov.height()===213){
					$cov.animate({height:0},function(){
						$last.html('更多选项（表盘、表带、功能、防水等）<i class="iconfont icon-jiantou"></i>');
					});
					
				}
				
			})
		}
	}
});