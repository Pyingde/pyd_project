define(['jquery'],function($){
	return {
		car_find:function(){
			
			var params = location.search;
			// 截取？后面的字符
		    var da=params.slice(1);
		    var arr=da.split('&');
		    var id=arr[0];
		    var num=arr[1];
		    $.ajax({
                type:'post',
                data:{'id':id},
                url:'../api/datalist_find.php',
                dataType:'json',
                success:function(data){
                	var cid=data[0].id;
                	var imgURL=data[0].imgURL;
                	var synopsis=data[0].synopsis;
                	var name=data[0].name;
                	var price=data[0].price;
                	var discount=data[0].discount;
                	var sale_qty=data[0].sale_qty; 
                	num;
                	 $.ajax({
		                type:'get',	
		                data:{'id':cid,
		                'imgURL':imgURL,
		                'synopsis':synopsis,
		                'name':name,
		                'price':price,
		                'discount':discount,
		                'sale_qty':sale_qty,
		                'num':num,
		                },
		                url:'../api/carlist.php',
		                success:function(data2){
		                	console.log(data2);
		                }
		            });
                }
            });
		}
	}
});