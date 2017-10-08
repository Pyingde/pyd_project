define(['jquery','xcarousel'],function($){
	return {
		banner:function(){
		
				$('#banner').xCarousel({
					imgs:['img/banner_1.jpg','img/banner_2.png','img/banner_3.jpg','img/banner_4.jpg','img/banner_5.jpg','img/banner_6.jpg','img/banner_7.jpg','img/banner_8.jpg'],
					index:0,
					type:'fade'
				})
			
			
		
				$('#hot .body .banner').xCarousel({
					imgs:['img/hot_1.jpg','img/hot_2.jpg','img/hot_3.jpg','img/hot_4.jpg'],
					index:0,
					type:'fade',
					height:375,
					width:400
				})
		
			
			
				$('#sale .body .banner').xCarousel({
					imgs:['img/sale_1.jpg','img/sale_2.jpg','img/sale_3.jpg','img/sale_4.jpg'],
					index:0,
					type:'fade',
					height:375,
					width:400
				})
			
			
			
				$('#new .body .banner').xCarousel({
					imgs:['img/new_1.jpg','img/new_2.jpg','img/new_3.jpg','img/new_4.jpg'],
					index:0,
					type:'fade',
					height:375,
					width:400
				})
		
			/*******************列表页轮播图****************************/
			
				$('.main_2_l_2').xCarousel({
					imgs:['../img/datalist_main_1.jpg','../img/datalist_main_2.jpg'],
					index:0,
					type:'horizontal',
					width:200,
					height:400,
					showButton:false,
					seamless:'true'
				})
		
			
		
				$('.main_2_l_4 .banner1').xCarousel({
					imgs:['../img/main_2_l_4.fw.png','../img/main_2_l_4_2.fw.png','../img/main_2_l_4.fw.png'],
					index:0,
					type:'horizontal',
					width:200,
					height:1000,
					showButton:false
				})
			
				$('.main_2_l_5 .banner2').xCarousel({
					imgs:['../img/wp1.fw.png','../img/wp1.fw.png','../img/wp1.fw.png'],
					index:0,
					type:'horizontal',
					width:200,
					height:700,
					showButton:false,
					seamless:'false',
				})
		
		}
	}
});


