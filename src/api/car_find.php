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
	
    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';

	if(isset($_REQUEST['del'])){
		$sql = "delete from carlist where id=$id";
	}
	else{
		$sql = 'select * from carlist';
	}
    
    $result = $conn->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($row,JSON_UNESCAPED_UNICODE)
?>