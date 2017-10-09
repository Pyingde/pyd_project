define(['jquery'],function($){
	return {
		datalist_find:function(){
			var params = location.search;
			// 截取？后面的字符
		    id=params.slice(1);
		    $.ajax({
                type:'post',
                data:{'id':id},
                url:'../api/datalist_find.php',
                dataType:'json',
                success:function(data){
                	data = data[0];
                	var li_img=$('#li_img');
                	li_img[0].src=data.imgURL;
                	var price=$('#price .price')
                	price.html(data.price);
                	var discount=$('#discount');
                	discount.html(data.discount)
                }
            });
            
            var li_color=$('.li_color');
            //移动显示大图
            li_color.on('mouseenter',function(){
            	// 获取当前索引值
			    var idx = $(this).index()-1;
			    var img=li_color.eq(idx).children().eq(0);
			    var $src=img[0].src;
			    var li_img=$('#li_img');
                li_img[0].src=$src;
			  
            });
            //点击显示大图
            var ks_img=$('.ks img');
            ks_img.on('click',function(){
            	var idx = $(this).index();
            	$(this).addClass('active').siblings('img').removeClass();
            	var $src=$(this)[0].src;
            	var li_img=$('#li_img');
                li_img[0].src=$src;
            })
            //数量加减
            var num=$('.num').children();
            var $input=num.eq(2);
            var btn_jian=num.eq(1);
            var btn_jia=num.eq(3);
            var html=1;
            btn_jian.on('click',function(){
            	if(html<=1){
            		return;
            	}
            	html--;
            	$input.val(html);
            })
            btn_jia.on('click',function(){
            	html++;
            	$input.val(html);
            });
            
            //点击传参到购物车页
           	//获取所有的加入购物车a标签
	        var $a = $(".jiaru");
	        $a.on('click',function(){
	        	
		        toDetail(id);
		        
	        });
	        function toDetail(id){
	            var params = "";
	            params += id;
	            params +=`&${$input.val()}`;
	            location.href = "carlist.html?" + params;		            
	        }
		}
	}
});