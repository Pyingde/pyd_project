define(['jquery'],function($){
	return {
		fixed:function(){
			var $fixed=$('#fix_left');
			var $lis=$('#fix_left ul li');
			//获取元素页面位置
			var hotY=$('#hot').offset().top;
			var saleY=$('#sale').offset().top;
			var newY=$('#new').offset().top;
			var barandY=$('#barand').offset().top;
			var likeY=$('#like').offset().top;
			var shareY=$('#share').offset().top;
			var zixunY=$('#zixun').offset().top;
			
			//结束位置
			var zhengpinY=$('#zhengpin').offset().top;
			$(window).scroll(function(){
				//获取当前页面顶部的坐标
		        var scrolltop=$(this).scrollTop();
		        //将当前页面顶部top值与 目标位置的top值做比较 
		        if(scrolltop<600){
		        	$fixed.hide(); 
		        }
		        else if(scrolltop>=600&&scrolltop<3945){  
		        	 //当当前窗口顶部坐标大于目标位置时，按钮显示   否则隐藏按钮  
		            $fixed.show(); 
		            $fixed.addClass("fixed").removeClass("absoule"); 
		        }else if(scrolltop>=3945){
		            $fixed.addClass("absoule").removeClass("fixed");  
		        }  
		    });
		    //左边导航条点击时到达指定位置
		    $lis.eq(0).click(function(){  
				$("html,body").animate({scrollTop:hotY});    
			});
			$lis.eq(1).click(function(){  
				$("html,body").animate({scrollTop:saleY});    
			});  
			$lis.eq(2).click(function(){  
				$("html,body").animate({scrollTop:newY});    
			});  
			$lis.eq(3).click(function(){  
				$("html,body").animate({scrollTop:barandY});    
			});  
			$lis.eq(4).click(function(){  
				$("html,body").animate({scrollTop:likeY});    
			});  
			$lis.eq(5).click(function(){  
				$("html,body").animate({scrollTop:shareY});    
			});  
			$lis.eq(6).click(function(){  
				$("html,body").animate({scrollTop:zixunY});    
			});  
			
			/***************右边导航条***************/
			//返回顶部
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
			})
		}
	}
});