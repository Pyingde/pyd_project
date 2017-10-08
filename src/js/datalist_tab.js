define(['jquery'],function($){
	return {
		datalist_tab:function(){
			var $as=$('#main_1 .main_2_l_5 .a');
			
			var $banner2=$('#main_1 .banner2');
			var $hotword=$('#main_1 .hotword');
			
			$as.eq(0).addClass('active');
			$banner2.show();
			$as.eq(0).on('mouseenter',function(){
				$as.eq(0).addClass('active');
				$as.eq(1).removeClass('active');
				$banner2.show();
				$hotword.hide();
			});
			$as.eq(1).on('mouseenter',function(){
				$as.eq(1).addClass('active');
				$as.eq(0).removeClass('active');
				$banner2.hide();
				$hotword.show();
			});
			
			
			/*********************************/
			
			var $as2=$('#main_1 .main_2_l_6 .a');
			
			var $sbzx=$('#main_1 .sbzx');
			var $wzcn=$('#main_1 .wzcn');
			$as2.eq(0).addClass('active');
			$sbzx.show();
			$as2.eq(0).on('mouseenter',function(){
				$as2.eq(0).addClass('active');
				$as2.eq(1).removeClass('active');
				$sbzx.show();
				$wzcn.hide();
			});
			$as2.eq(1).on('mouseenter',function(){
				$as2.eq(1).addClass('active');
				$as2.eq(0).removeClass('active');
				$sbzx.hide();
				$wzcn.show();
			});
		}
	}
})