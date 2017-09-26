jQuery(function($){
	var $time = $('#sale .timer');
	// 指定结束时间
	var end = '2017-10-10 20:59:00';
	var endTime = Date.parse(end);


	var daojishi = setInterval(function(){
		// 获取当前时间
		var nowTime = Date.now();

		// 计算时间差
		// 得到秒数
		var offset = parseInt((endTime - nowTime)/1000);

//		//判断是否结束
		if(offset<=0){
			time.style.display = 'none';
			// 停止定时器
			clearInterval(daojishi);
			return;
		}

		// 计算剩余天时分秒
		var secLeft = offset%60;
		var minLeft = parseInt(offset/60)%60;
		var hourLeft = Math.floor(offset/60/60)%24;
		var dayLeft = Math.floor(offset/60/60/24);

		$time.eq(0).html( '仅剩：' + dayLeft + '天' + hourLeft + '时' + minLeft + '分' + secLeft + '秒');
		$time.eq(1).html( '仅剩：' + dayLeft + '天' + hourLeft + '时' + minLeft + '分' + secLeft + '秒');
		$time.eq(2).html( '仅剩：' + dayLeft + '天' + hourLeft + '时' + minLeft + '分' + secLeft + '秒');
		$time.eq(3).html( '仅剩：' + dayLeft + '天' + hourLeft + '时' + minLeft + '分' + secLeft + '秒');
	},1000);

});