define(['jquery'],function($){
	return {
		load:function(h_callback,f_callback){
			$('#header').load('common_header.html',function(){
				h_callback();
			});
			$('#foot').load('common_foot.html',function(){
				f_callback();
			});
		}
	}
});