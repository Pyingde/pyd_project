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
//		        console.log(scrolltop);
		        //将当前页面顶部top值与 目标位置的top值做比较 
		        if(scrolltop>=600){  
		        	 //当当前窗口顶部坐标大于目标位置时，按钮显示   否则隐藏按钮  
		            $fixed.show();    
		        }else{  
		            $fixed.hide();  
		        }  
		    });
		    
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
		}
	}
});