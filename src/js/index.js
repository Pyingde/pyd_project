require.config({
	paths:{
		jquery:"../lib/jquery-3.1.1",
		xcarousel:"../lib/jquery-xCarousel/jquery.xcarousel",
		banner:"banner",
		header_1:"header_1",
		endtimer:"endtimer",
		like:"like",
		footer:"footer",
		fixed:"index_fixed"
	},
	shim:{
		xcarousel:['jquery']
	}
	
});

require(['jquery','xcarousel','banner','header_1','endtimer','like','footer','fixed'],function($,xcarousel,banner,header_1,endtimer,like,footer,fixed){
	banner.banner();
	header_1.header_1();
	endtimer.endtimer();
	like.like();
	footer.footer();
	fixed.fixed();
});