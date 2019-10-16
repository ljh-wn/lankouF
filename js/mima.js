function checkPass(pass){
   // //1、输入
   //  var pass = document.getElementById("pass").value;

   //2、逻辑
    //1)、长度6位
    if(pass.length<6){
        document.getElementById("passMsg").innerHTML = "×，长度应该不小于6位";
        return;
    }

    //2)、必须含有字母
    var hasLetter = false;
    for(var i=0;i<pass.length;i++){
        var code = pass.charCodeAt(i);
        if((code>=65 && code<=90) || (code>=97 && code<=122)){//有没有字母
            hasLetter = true;
            break;
        }
    }
    if(hasLetter==false){//!hasLetter
        document.getElementById("passMsg").innerHTML = "×，必须有字母";
        return;
    }
    
    //3)、必须含有数字
    var hasNum = false;
    for(var i=0;i<pass.length;i++){
        var code = pass.charCodeAt(i);
        if(code>=48 && code<=57){
            hasNum = true;
            break;
        }
    }
    if(hasNum==false){//!hasNum
        document.getElementById("passMsg").innerHTML = "×";
        return;
    }
    
    //4)、必须含有特殊字符
    var arr=["$","%","!","#","*"];
    var hasSpec = false;
    for(var i=0;i<pass.length;i++){
        var char = pass.charAt(i);//$
        if(arr.indexOf(char)>-1){
            hasSpec = true;
            break;
        }
    }
    if(hasSpec==false){//!hasSpec
        document.getElementById("passMsg").innerHTML = "×";
        return;
    }

   //3、输出
   document.getElementById("passMsg").innerHTML = "√";

}