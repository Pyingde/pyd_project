jQuery(function($){
	var $username=$('#username');
	var $password=$('#password');
	var $p1=$('#username_p');
	var $p2=$('#password_p');
	console.log($username,$password);
	$username.blur(function(){
		console.log($username.val());
		if($username.val()===''){
			$p1.show();
			$p1.html('请输入账户名');
		}
		else{
			$p1.hide();
			$p1.html('');
		}
		
	});
	$password.blur(function(){
		if($password.val()===''){
			$p2.show();
			$p2.html('请输入密码')
		}
		else{
			$p2.hide();
			$p2.html('');
		}
	});
});
