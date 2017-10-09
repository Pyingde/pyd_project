define(['jquery'],function($){
	return {
		car_data:function(){
			var params = location.search;
			// 截取？后面的字符
		    var da=params.slice(1);
		    var arr=da.split('&');
		    var id=arr[0];
		    var num=arr[1];
		    setTimeout(function(){
		    	
		   
			$.ajax({
//              type:'post',            
                url:'../api/car_find.php',
                dataType:'json',
                success:function(data){
//              	console.log(data[0].id);
					var goods=$('.goods')
					console.log(data);
                	var html=data.map(function(item){
                		return `<ul class="clear">
								<li class="one"><input type="checkbox" name="img_box" id="img_box" value="" /><label for="img_box"><img src="${item.imgURL}"></label></li>			
								<li class="two"><span>【特惠商品一口价！不参加用券】限时赠表带！全新升级！</span><span id="goodsName">${item.name}</span><span>附送说明书，全球联保卡</span></li>
								<li class="three">
									<p id="price">￥${item.price}</p>
									<del>￥4600.00</del>
								</li>
								<li class="four">
									<button>-</button>
									<input type="text" name="qty" id="qty" value="${item.num}" />
									<button>+</button>
								</li>
								<li id="total">￥${item.price*item.num}</li>
								<li class="del" data-main="${item.id}">&times;</li>
							</ul>`
                	});
                	goods.html(html);
                	//删除
                	var $li=$('.goods .del');
                	$li.on('click',function(){
                		var id=$(this).attr("data-main");
                		console.log(id)
                		$.ajax({
	                        type:'post',
	                        url:'../api/car_find.php',
	                        data:{'id':id,'del':'del'},
	                        dataType:'json',
	                        success:function(msg){
	                            data(msg);
	                        }
	                   });
	                   $(this).parent().remove();
                	})
                	
                }
             });
             },100);
		}
	}
});