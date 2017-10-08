define(['jquery'],function($){
	return {
		datalist_find:function(){
			var params = location.search;
			// 截取？后面的字符
		    id=params.slice(1);
		    console.log(id);
		    $.ajax({
                type:'post',
                data:{'id':id},
                url:'../api/datalist_find.php',
                dataType:'json',
                success:function(data){
                	data = data[0];
                	console.log(data);
                	var li_img=$('#li_img');
                	li_img[0].src=data.imgURL;
                	var price=$('#price .price')
                	price.html(data.price);
                	var discount=$('#discount');
                	discount.html(data.discount)
                }
            });
		}
	}
});