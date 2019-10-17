
	
	
	$(".imgBoc").click(function(){
		$(".boxMain").css("display","none");
	});
	// 邮箱和手机号注册切换
	let count=1;
$("#eem").click(function(){
	count++;
	
	if(count%2==0){
		$("#eem").children(0).css("display","block");
	}else{
		$("#eem").children(0).css("display","none");
	}
});
	let count1=1;
$("#eem2").click(function(){
	count1++;
	
	if(count1%2==0){
		$("#eem2").children(0).css("display","block");
	}else{
		$("#eem2").children(0).css("display","none");
	}
});

$(".regem").click(function(){
	 $('#tog2').show();
	 $('#tog1').hide();
	
}) 
$(".regnum").click(function(){
	 $('#tog2').hide();
	 $('#tog1').show();
	
})  
// 随机验证码
$(".huan").eq(0)click(function(){
	let num=getMa();
	$("#firy").html(num);
	
});
$(".huan").eq(1).click(function(){
	let num=getMa();
	$("#secf").html(num);
	
})
 
 // 判断输入框是否输入东西
  let inputs=my$(".clearA");
  let secSpan=$(".secSpan")
  let placeVal;
 for(let j=0;j<inputs.length;j++){
	 inputs[j].nextElementSibling.style.display="none";
	 secSpan.eq(j).css("display","none");
	  
	 
	 
	 inputs[j].onfocus=function(){
		placeVal=$(this).attr("placeholder");
	    $(this).attr("placeholder","");
} 
	 let count=1;
	 inputs[j].onblur=function(){
		 count++;
		
		  $(this).attr("placeholder",placeVal);
		 if(count%2==0){
			inputs[j].nextElementSibling.style.display="block";
			
			secSpan.eq(j).css("display","none");
			
			inputs[j].nextElementSibling.style.color="#D51B51";
			inputs[j].nextElementSibling.style.fontSize="12px";
			inputs[j].nextElementSibling.style.textAlign="center";
			this.style.border="1px solid #D51B51";
			
		}
		if(count>0 & inputs[j]==inputs[0] || count>0 & inputs[j]==inputs[5]){
			let str=this.value;
			let reg=/^1\d{10}$/;
			if(j==5){
				if(reg.test(str)==true){
					inputs[j].nextElementSibling.style.display="none"; 
					secSpan.eq(j+1).css("display","none");
					this.style.border="1px solid #999999";
				}else if(str==""){
					inputs[j].nextElementSibling.style.display="block";
					secSpan.eq(j+1).css("display","none"); 
				}else{
					inputs[j].nextElementSibling.style.display="none";
					
					secSpan.eq(j+1).css({display:"block",color:"#D51B51",textAlign:"center",fontSize:"12px"}); 
				}
					
			}else{
				if(reg.test(str)==true){
					inputs[j].nextElementSibling.style.display="none"; 
					secSpan.eq(j).css("display","none");
					this.style.border="1px solid #999999";
				}else if(str==""){
					inputs[j].nextElementSibling.style.display="block";
					secSpan.eq(j).css("display","none"); 
				}else{
					inputs[j].nextElementSibling.style.display="none";
					
					secSpan.eq(j).css({display:"block",color:"#D51B51",textAlign:"center",fontSize:"12px"}); 
				}
					
			}
			
			// 确认密码
		}else if(count>0 & inputs[j]==inputs[1] || count>0 & inputs[j]==inputs[6]){
			let pass=this.value;
			inputs[j].nextElementSibling.style.display="none";
			secSpan.eq(j+1).css("display","none"); 
			secSpan.eq(j+2).css("display","none"); 
		    if(j==6){
			if(pass==""){
				inputs[j].nextElementSibling.style.display="block";
				secSpan.eq(j+1).css("display","none"); 
				secSpan.eq(j+2).css("display","none"); 
				
				 
				
				}else if(pass.length<8){
				  inputs[j].nextElementSibling.style.display="none";
				  secSpan.eq(j+1).css({display:"none",color:"#D51B51",textAlign:"center",fontSize:"12px"});
				secSpan.eq(j+2).css({display:"block",color:"#D51B51",textAlign:"center",fontSize:"12px"}); 
				 return;
			 }
							
				 //2)、必须含有字母
				 var hasLetter = false;
				 for(var i=0;i<pass.length;i++){
				     var code = pass.charCodeAt(i);
					if(pass==""){
						inputs[j].nextElementSibling.style.display="block";
						secSpan.eq(j+1).css("display","none"); 
						secSpan.eq(j+2).css("display","none");
						
					}else if((code>=65 && code<=90) || (code>=97 && code<=122)){//有没有字母
					 hasLetter = true;
					 break;
				 }
}
				if(pass==""){
					inputs[j].nextElementSibling.style.display="block";
					secSpan.eq(j+1).css("display","none"); 
					secSpan.eq(j+2).css("display","none"); 
					
				}else if(hasLetter==false){//!hasLetter
				     inputs[j].nextElementSibling.style.display="none";
									
				     secSpan.eq(j+1).css({display:"none",color:"#D51B51",textAlign:"center",fontSize:"12px"}); 
					secSpan.eq(j+2).css({display:"block",color:"#D51B51",textAlign:"center",fontSize:"12px"}); 
				     return;
				 }
				 
				 //3)、必须含有数字
				 var hasNum = false;
				 for(var i=0;i<pass.length;i++){
				     var code = pass.charCodeAt(i);
					if(pass==""){
						inputs[j].nextElementSibling.style.display="block";
						secSpan.eq(j+1).css("display","none"); 
						secSpan.eq(j+2).css("display","none"); 
						
					}
				    else if(code>=48 && code<=57){
				         hasNum = true;
				         break;
				     }
		         }
						if(pass==""){
							inputs[j].nextElementSibling.style.display="block";
							secSpan.eq(j+1).css("display","none"); 
							secSpan.eq(j+2).css("display","none"); 
							
						}
				 else if(hasNum==false){//!hasNum
				    inputs[j].nextElementSibling.style.display="none";
				    	secSpan.eq(j+1).css({display:"none",color:"#D51B51",textAlign:"center",fontSize:"12px"}); 
						secSpan.eq(j+2).css({display:"block",color:"#D51B51",textAlign:"center",fontSize:"12px"}); 
				     return;
				 }
				 
				 //4)、必须含有特殊字符
				 var arr=["$","%","!","#","*","@"];
				 var hasSpec = false;
				 for(var i=0;i<pass.length;i++){
				     var char = pass.charAt(i);//$
						if(pass==""){
							inputs[j].nextElementSibling.style.display="block";
							secSpan.eq(j+1).css("display","none"); 
							secSpan.eq(j+2).css("display","none"); 
							
						}
				    else if(arr.indexOf(char)>-1){
				         hasSpec = true;
				         break;
				     }
				 }
				 if(pass==""){
				 	inputs[j].nextElementSibling.style.display="block";
				 	secSpan.eq(j+1).css("display","none"); 
				 	secSpan.eq(j+2).css("display","none"); 
				 	
				 }else if(hasSpec==false){//!hasSpec
				     inputs[j].nextElementSibling.style.display="none";
				     secSpan.eq(j+1).css({display:"none",color:"#D51B51",textAlign:"center",fontSize:"12px"}); 
					secSpan.eq(j+2).css({display:"block",color:"#D51B51",textAlign:"center",fontSize:"12px"}); 
					this.style.border="1px solid #999999";
								
				     return;
				 }
							
				//3、输出
				if(pass==""){
					inputs[j].nextElementSibling.style.display="block";
					secSpan.eq(j+1).css("display","none"); 
					secSpan.eq(j+2).css("display","none"); 
					
				}else{
				   inputs[j].nextElementSibling.style.display="none";
				   secSpan.eq(j+1).css("display","none");
				   secSpan.eq(j+2).css("display","none");
				   this.style.border="1px solid #999999";
				}
			}else{
				if(pass==""){
							inputs[j].nextElementSibling.style.display="block";
							secSpan.eq(j+1).css("display","none"); 
							secSpan.eq(j+2).css("display","none"); 
							
				}else if(pass.length<8){
				    inputs[j].nextElementSibling.style.display="none";
					secSpan.eq(j).css({display:"none",color:"#D51B51",textAlign:"center",fontSize:"12px"});
				    secSpan.eq(j+1).css({display:"block",color:"#D51B51",textAlign:"center",fontSize:"12px"}); 
				     return;
				 }
							
				 //2)、必须含有字母
				 var hasLetter = false;
				 for(var i=0;i<pass.length;i++){
				     var code = pass.charCodeAt(i);
						if(pass==""){
							inputs[j].nextElementSibling.style.display="block";
							secSpan.eq(j).css("display","none"); 
							secSpan.eq(j+1).css("display","none"); 
							
						}else if((code>=65 && code<=90) || (code>=97 && code<=122)){//有没有字母
				         hasLetter = true;
				         break;
				     }
				 }
					if(pass==""){
						inputs[j].nextElementSibling.style.display="block";
						secSpan.eq(j).css("display","none"); 
						secSpan.eq(j+1).css("display","none"); 
						
					}
				 else if(hasLetter==false){//!hasLetter
				     inputs[j].nextElementSibling.style.display="none";
									
				     secSpan.eq(j).css({display:"none",color:"#D51B51",textAlign:"center",fontSize:"12px"}); 
					secSpan.eq(j+1).css({display:"block",color:"#D51B51",textAlign:"center",fontSize:"12px"}); 
				     return;
				 }
				 
				 //3)、必须含有数字
				 var hasNum = false;
				 for(var i=0;i<pass.length;i++){
				     var code = pass.charCodeAt(i);
									if(pass==""){
										inputs[j].nextElementSibling.style.display="block";
										secSpan.eq(j).css("display","none"); 
										secSpan.eq(j+1).css("display","none"); 
										
									}
				    else if(code>=48 && code<=57){
				         hasNum = true;
				         break;
				     }
				 }
								if(pass==""){
									inputs[j].nextElementSibling.style.display="block";
									secSpan.eq(j).css("display","none"); 
									secSpan.eq(j+1).css("display","none"); 
									
								}
				 else if(hasNum==false){//!hasNum
				    inputs[j].nextElementSibling.style.display="none";
				    	secSpan.eq(j).css({display:"none",color:"#D51B51",textAlign:"center",fontSize:"12px"}); 
						secSpan.eq(j+1).css({display:"block",color:"#D51B51",textAlign:"center",fontSize:"12px"}); 
				     return;
				 }
				 
				 //4)、必须含有特殊字符
				 var arr=["$","%","!","#","*","@"];
				 var hasSpec = false;
				 for(var i=0;i<pass.length;i++){
				     var char = pass.charAt(i);//$
							if(pass==""){
								inputs[j].nextElementSibling.style.display="block";
								secSpan.eq(j).css("display","none"); 
								secSpan.eq(j+1).css("display","none"); 
								
							}
				    else if(arr.indexOf(char)>-1){
				         hasSpec = true;
				         break;
				     }
				 }
				 if(pass==""){
				 	inputs[j].nextElementSibling.style.display="block";
				 	secSpan.eq(j).css("display","none"); 
				 	secSpan.eq(j+1).css("display","none"); 
				 	
				 }else if(hasSpec==false){//!hasSpec
				     inputs[j].nextElementSibling.style.display="none";
				     secSpan.eq(j).css({display:"none",color:"#D51B51",textAlign:"center",fontSize:"12px"}); 
					secSpan.eq(j+1).css({display:"block",color:"#D51B51",textAlign:"center",fontSize:"12px"}); 
									this.style.border="1px solid #999999";
								
				     return;
				 }
							
				//3、输出
				if(pass==""){
					inputs[j].nextElementSibling.style.display="block";
					secSpan.eq(j).css("display","none"); 
					secSpan.eq(j+1).css("display","none"); 
					
				}else{
				   inputs[j].nextElementSibling.style.display="none";
				   secSpan.eq(j).css("display","none");
				   secSpan.eq(j+1).css("display","none");
				   this.style.border="1px solid #999999";
				}
			}
			  
			    
			// 短信验证码
			}else if(count>0 & inputs[j]==inputs[2] || count>0 & inputs[j]==inputs[8]){
				let str=this.value;
				let reg=/^\d{6}$/;
				inputs[j].nextElementSibling.style.display="none";
				secSpan.eq(j+2).css("display","none");
				if(j==8){
						if(str==''){
							inputs[j].nextElementSibling.style.display="block"; 
							// secSpan.eq(j+2).css({display:"none",}); 
							secSpan.eq(j+2).css("display","none"); 
							
						}
						else if(reg.test(str)==true){
							inputs[j].nextElementSibling.style.display="none"; 
							secSpan.eq(j+2).css("display","none");	
							this.style.border="1px solid #999999";
						}else{
							inputs[j].nextElementSibling.style.display="none";
							secSpan.eq(j+2).css({display:"block",color:"#D51B51",textAlign:"center",fontSize:"12px"}); 
								}	
					}else{
							if(str==''){
								inputs[j].nextElementSibling.style.display="block"; 
								secSpan.eq(j+1).css({display:"none",}); 
							}
							else if(reg.test(str)==true){
								inputs[j].nextElementSibling.style.display="none"; 
								secSpan.eq(j+1).css("display","none");	
								this.style.border="1px solid #999999";
							}else{
								inputs[j].nextElementSibling.style.display="none";
								secSpan.eq(j+1).css({display:"block",color:"#D51B51",textAlign:"center",fontSize:"12px"}); 
							}
					}
				// 确认密码
			}else if(count>0 & inputs[j]==inputs[3]|| count>0 & inputs[j]==inputs[7] ){
				let str=inputs[1].value;
				let str2=inputs[6].value;
				inputs[j].nextElementSibling.style.display="none";
				secSpan.eq(j+2).css("display","none"); 
				if(j==7){
					if(inputs[j].value==''){
						inputs[j].nextElementSibling.style.display="block"; 
						secSpan.eq(j+2).css("display","none"); 
						// secSpan.eq(j+2).css("display","none"); 
					}
					else if(inputs[j].value==str2){
						inputs[j].nextElementSibling.style.display="none"; 
						secSpan.eq(j+2).css("display","none");
						// secSpan.eq(j+2).css("display","none");
						this.style.border="1px solid #999999";
					}else if(inputs[j].value!=str2){
						// secSpan.eq(j+2).css("display","none"); 
						inputs[j].nextElementSibling.style.display="none"; 
						secSpan.eq(j+2).css({display:"block",color:"#D51B51",textAlign:"center",fontSize:"12px"});
					}
				}else{
					if(inputs[j].value==''){
						inputs[j].nextElementSibling.style.display="block"; 
						secSpan.eq(j+1).css("display","none"); 
						// secSpan.eq(j+2).css("display","none"); 
					}
					else if(inputs[j].value==str){
						inputs[j].nextElementSibling.style.display="none"; 
						secSpan.eq(j+1).css("display","none");
						// secSpan.eq(j+2).css("display","none");
						this.style.border="1px solid #999999";
					}else if(inputs[j].value!=str){
						secSpan.eq(j+1).css("display","none"); 
						inputs[j+1].nextElementSibling.style.display="block"; 
						// secSpan.eq(j+2).css({display:"block",color:"#D51B51",textAlign:"center",fontSize:"12px"});
					}
				}
				 
				
			}else if(count>0 & inputs[j]==inputs[4]){
				
					let str=this.value;
					let  reg = /^\w{3,16}@\w{2,16}\.(com|net|com.cn|cn)$/;
					
					if(reg.test(str)==true){
						inputs[j].nextElementSibling.style.display="none"; 
						secSpan.eq(j+1).css("display","none");
						this.style.border="1px solid #999999";
					}else if(str==""){
						inputs[j].nextElementSibling.style.display="block";
						secSpan.eq(j+1).css("display","none"); 
					}else{
						inputs[j].nextElementSibling.style.display="none";
						
						secSpan.eq(j+1).css("display","block"); 
					}
	            }
			
			
			
		}
	}
  
// 验证用户名在数据库中是否存在
my$("#regBtnp").onclick = function(){
    //1、
    let xhr = new XMLHttpRequest();

    xhr.open("post","regSave.php",true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            if(xhr.responseText=="-1"){
                my$("#messageBox").style.color ="red";
                my$("#messageBox").innerHTML ="该号码被人使用";
            }else if(xhr.responseText=="0"){
                my$("#messageBox").style.color ="red";
                my$("#messageBox").innerHTML ="注册失败";
            }else if(xhr.responseText=="1"){
				 addCookie("phonenum",my$("#phonenum").value,7);
				 
				 location.href="index.html";
				
               
            }
        }
    }
    //post方式：设置请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //post方式：把传给服务器端数据（键值对）放在send函数的参数里。
    let sendstr = `phonenum=${my$("#phonenum").value}&userpass=${my$("#userpass").value}`;
    xhr.send(sendstr);

}


 function my$(str){
 	if(str.charAt(0)=="#"){
 		return document.getElementById(str.substring(1));
 	}else if(str.charAt(0)=="."){
 		return document.getElementsByClassName(str.substring(1));
 	}else{
 		return document.getElementsByTagName(str);
 	}
 }	
     
    


