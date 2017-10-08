require.config({
	paths:{
		jquery:"../lib/jquery-3.1.1",
		reg:"reg"
	}
});

require(['jquery','reg'],function($,reg){
	reg.reg();
});