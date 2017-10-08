define(['jquery'],function(){
	return {
		reg:function(){
			var $suijicode=$('#suijicode');
			$suijicode.html(yanzhengma());
			$suijicode.css("color",randomColor())
			//随机验证码
			function yanzhengma(num){
				if(num === undefined){
					num = 4;
				}
				var arr = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
			
				// 循环获取验证码
				var res = '';
				for(var i=0;i<num;i++){
					var idx = parseInt(Math.random()*arr.length);
					res += arr[idx];
				}
				return res;
			}
			//随机颜色
			function randomColor(){
				var str = '0123456789abcdef';
				var res = '#';
				for(var i=0;i<6;i++){
					var idx = Math.floor(Math.random()*str.length);
					res += str[idx];
				}
				return res;
			}
		}
		
	}
});