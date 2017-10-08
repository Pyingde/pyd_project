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
		cav:"cav"
	},
	shim:{
		xcarousel:['jquery']
	}
	
});

require(['jquery','load','xcarousel','header_1','footer','fixed','banner','datalist_tab','cav','goodlist','transmit'],function($,load,xcarousel,header_1,footer,fixed,banner,datalist_tab,cav,goodlist,transmit){
	
	load.load(function(){
		header_1.header_1();
	},function(){
		footer.footer();
		fixed.fixed_right();
	});

	banner.banner();
	datalist_tab.datalist_tab();
	cav.cav();
	goodlist.goodlist(function(){
		transmit.transmit();
	});
	
	
});