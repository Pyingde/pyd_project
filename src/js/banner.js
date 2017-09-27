define(['jquery','xcarousel'],function($){
	return {
		banner:function(){
			jQuery(function($){
				$('#banner').xCarousel({
					imgs:['img/banner_1.jpg','img/banner_2.png','img/banner_3.jpg','img/banner_4.jpg','img/banner_5.jpg','img/banner_6.jpg','img/banner_7.jpg','img/banner_8.jpg'],
					index:0,
					type:'fade'
				})
			});
			
			jQuery(function($){
				$('#hot .body .banner').xCarousel({
					imgs:['img/hot_1.jpg','img/hot_2.jpg','img/hot_3.jpg','img/hot_4.jpg'],
					index:0,
					type:'fade',
					height:375,
					width:400
				})
			});
			
			jQuery(function($){
				$('#sale .body .banner').xCarousel({
					imgs:['img/sale_1.jpg','img/sale_2.jpg','img/sale_3.jpg','img/sale_4.jpg'],
					index:0,
					type:'fade',
					height:375,
					width:400
				})
			});
			
			jQuery(function($){
				$('#new .body .banner').xCarousel({
					imgs:['img/new_1.jpg','img/new_2.jpg','img/new_3.jpg','img/new_4.jpg'],
					index:0,
					type:'fade',
					height:375,
					width:400
				})
			});
		}
	}
});


