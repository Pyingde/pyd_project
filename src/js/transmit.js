define(['jquery'],function($){
	return {
		transmit:function(){
				/************数据传参*******************/
				//获取元素li，当点击li时就会跳转并把参数传到详情页
			   
		        //获取所有的li
		        var $goodLi = $("#goodlist ul li");
		        $goodLi.on('click',function(){
		        	// 获取当前索引值
			        var idx = $(this).index();		
					var $id=$goodLi.eq(idx).data().id;
					console.log($id);
			        toDetail($id);
			        
		        });
		        function toDetail($id){
		            var params = "";
		            params += $id;
		            location.href = "datalist.html?" + params;		            
		        }
		}
	}
})