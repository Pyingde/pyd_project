define(['jquery'],function($){
	return {
		zoom:function(){
			var imgbox=$('.imgbox')
			var img=$('#li_img');
			console.log(img);
			var imgbox_left=imgbox.offset().left;
			var imgbox_top=imgbox.offset().top;
			console.log(imgbox_left,imgbox_top)
			imgbox.on('mousemove',function(e){
				
				var mouse_left=e.pageX;
				var mouse_top=e.pageY;
				var left=mouse_left-imgbox_left;
				var top=mouse_top-imgbox_top;
				img.css({width:'150%',height:'150%',left:-left/3,top:-top/3});
				
			})
			imgbox.on('mouseout',function(){
				img.css({width:'100%',height:'100%',left:0,top:0});
			})
		}
	}
});