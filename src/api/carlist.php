<?php
		// 配置参数
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'h5_1705';
	
	// 1）连接数据库
	$conn = new mysqli($servername,$username,$password,$database);

	// 检测连接
	if($conn->connect_errno){
		die('连接失败：'.$conn->connect_error);
	}

	// 设置字符集
	$conn->set_charset('utf8');
	// 编写查询sql语句
	$id = isset($_GET['id']) ? $_GET['id'] : '';
	$imgURL = isset($_GET['imgURL']) ? $_GET['imgURL'] : '';
	$synopsis = isset($_GET['synopsis']) ? $_GET['synopsis'] : '';
	$name = isset($_GET['name']) ? $_GET['name'] : '';
	$price = isset($_GET['price']) ? $_GET['price'] : '';
	$discount = isset($_GET['discount']) ? $_GET['discount'] : '';
	$sale_qty = isset($_GET['sale_qty']) ? $_GET['sale_qty'] : '';
	$num = isset($_GET['num']) ? $_GET['num'] : '';
	//查看id是否已经存在
	$sql = "select id from carlist where id='$id'";
	$result = $conn->query($sql);
	if($result->num_rows>0){
//		num=num+$num;
		$sql = "update carlist set num=$num+num where id=$id";
		$result = $conn->query($sql);
	}
	else{
		$sql = "insert into carlist (id,imgURL,synopsis,name,price,discount,sale_qty,num)
		 values('$id','$imgURL','$synopsis','$name','$price','$discount','$sale_qty','$num')";


		// 获取查询结果
		$result = $conn->query($sql);

		if ($result) {
		    echo "ok";
		} else {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}

	
	

	// 释放查询内存(销毁)
	$result->free();

	//关闭连接
	$conn->close();
?>