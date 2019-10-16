<?php
header("Content-type:text/html;charset=utf-8");
// 1接受前端数据
$phonenum=$_GET['phonenum'];
$phonenum=$_GET['useremail'];
// 2处理数据
// 连接数据库
 $conn = mysql_connect("localhost","root","root");

    if(!$conn){
        echo("数据库出错".mysql_error());
    }else{
        //2)、选择库（选择目的地）
        mysql_select_db("clientdb",$conn);

        //3)、执行SQL语句（数据传输）
        //3.1)
        $sqlstr="select * from client where phonenum='$phonenum'";//查询该用户名在数据库中有没有。
		$str="select * from client where useremail='$useremail'";
        $result1 = mysql_query($sqlstr,$conn);
        $result2 = mysql_query($str,$conn);
        $rows = mysql_num_rows($result1);//获得结果的行数
		$row = mysql_num_rows($result2);
        if($rows>0){
            //4)、关闭数据库
            mysql_close($conn);
            echo "0";//注册失败,用户名已被注册
        }else{
            echo "1";//成功
        }
		if($row>0){
		    //4)、关闭数据库
		    mysql_close($conn);
		    echo "0";//注册失败,用户名已被注册
		}else{
		    echo "1";//成功
		}
		
    }
?>