require.config({
	paths:{
		jquery:"../lib/jquery-3.1.1",
		xcarousel:"../lib/jquery-xCarousel/jquery.xcarousel",
		load:"load",
		header_1:"header_1",
		footer:"footer",
		fixed:"fixed_right",
		banner:"banner",
		datalist_tab:"datalist_tab",
	},
	shim:{
		xcarousel:['jquery']
	}
	
});

require(['jquery','load','xcarousel','header_1','footer','fixed','banner','datalist_tab','goodlist','datalist_find'],function($,load,xcarousel,header_1,footer,fixed,banner,datalist_tab,goodlist,datalist_find){
	
	load.load(function(){
		header_1.header_1();
	},function(){
		footer.footer();
		fixed.fixed_right();
	});

	banner.banner();
	datalist_tab.datalist_tab();
	datalist_find.datalist_find();
	
});