require.config({
	paths:{
		jquery:"../lib/jquery-3.1.1",
		
	},
	
	
});

require(['jquery','car_find','car_data'],function($,car_find,car_data){
	
	car_find.car_find();
	car_data.car_data();
	
});