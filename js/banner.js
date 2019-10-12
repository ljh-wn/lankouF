function Banner(boxDom,obj){
    this.boxDom=boxDom;  //将大box里面的所有子元素取出来
    this.as = obj.as;
    this.imgs = obj.imgs;
    this.douSize=obj.douSize;
    this.douIsCircle=obj.douIsCircle;
    this.douIsCircle=true;
    this.douColor=obj.douColor;
    this.douHighColor=obj.douHighColor;
    this.list=null;//所有的a 
    this.tab=null; //所有的litabLi
    this.btn=null; //这是两个左右两个箭头btnDiv
    this.index=null; //这些都必须是私有的，不然两个banner会一样
    this.timer=null;
    this.length=null;
    this.render();
    this.init();//下面创建好，要在这里执行
    let defaultObj = {
            imgs:["img/1.jpg","img/2.jpg"],
            as:["http://www.baidu.com"],
            width:400,
            height:300,
            timeSpace:1000,
            index:0,
            douSize : 10,
            douIsCircle:true,
            douColor:"pink",
            douHighColor:"red"
        };
        for(let key  in defaultObj){//key = imgs;
            if(obj[key]!=undefined){ //obj["imgs"]
                this[key] = obj[key];
            }else{
                this[key] = defaultObj[key]; 
            }
        }

   }
   Banner.prototype.render=function(){
        //1、创建图片及其容器
        //1)、容器
        this.boxImg = document.createElement("div");
        this.boxImg.style.cssText = ` 
            position: absolute;
            width: 100%;
            height:100%;`;
        this.boxDom.appendChild(this.boxImg);
        this.btn=document.createElement("div");
        this.btn.style.cssText=`
           position:relative;
            width:100%;
            height:100%`;
        this.boxDom.appendChild(this.btn);
        this.leftBox=document.createElement("div");
        this.leftBox.setAttribute("index",0);
        this.leftBox.style.cssText = ` 
            position: absolute;
            display:none;
            width: 44px;
            height:88px;
            background: url(img/arrow-black-left.png) no-repeat;
            background-position: 0 -3px;
            left:205px;
            top:155px;
            z-index: 1;
            cursor:pointer;`;
        this.btn.appendChild(this.leftBox);
        this.rightBox=document.createElement("div");
        this.rightBox.setAttribute("index",1);
        this.rightBox.style.cssText = ` 
            position: absolute;
            display:none;
            width: 44px;
            height:88px;
            background: url(img/arrow-black-right.png) no-repeat;
            background-position: -11px 0px;
            right:200px;
            top:155px;
            z-index: 1;
            cursor:pointer;`;
       this.btn.appendChild(this.rightBox);
       console.log(this.btn.children.length);
        //2)、图片
     
        let num = this.as.length;
        this.length=this.as.length;;
        for(let i=0;i<num;i++){
            let asObj=document.createElement("a");
            asObj.setAttribute("index",i);
            asObj.href=this.as[i];
            asObj.style.cssText=`
                float:left;
                text-decoration: none;
                width: 100%;
                height: 100%;
                position:absolute;
                opacity:1;
            
            `;
            // if(i==0){
            //    asObj.style.opacity = 1;
            //    // asObj.style.zIndex = 1;
            // }
            this.boxImg.appendChild(asObj);
            this.list=this.boxImg.children;
            console.log(this.list);
           let img = document.createElement("img");
            img.src = this.imgs[i];
            img.style.cssText = `
                position: absolute;
                width: 100%;
                height: 100%;
                text-align:center;
            `;
           asObj.appendChild(img);

          
        }

        //2、创建豆豆及其容器
        //1)、容器
        this.ul = document.createElement("ul");
        this.ul.style.cssText = `
            position: absolute;
            bottom:-35px;
            left:50%;
            transform:translate(-50%,-50%);

            list-style: none;
          
        `;
        this.boxDom.appendChild(this.ul);
        //2)、li
        for(let i=0;i<num;i++){
            let liObj = document.createElement("li");
            liObj.setAttribute("index",i);
            this.index=liObj.index;
            liObj.style.cssText = `
                float: left;
                margin-left:10px;
                width:${this.douSize}px;
                height:${this.douSize}px;
                background-color: ${this.douColor};
            `;
            if(this.douIsCircle){
               liObj.style.borderRadius = "50%";
            }
            if(i==0){
                liObj.style.backgroundColor ="#999999";
            }
            this.ul.appendChild(liObj);
            this.tab=this.ul.children;

        }
         
    }
   //  var banner1=new Banner(boxDom,picImg,tabLi,btnDiv);
   // banner1.init();
   // 初始化分类
Banner.prototype.init=function(){ //先把下面的分类
    var This=this; //var 一个This变量把this存起来
    this.list[0].style.display='block';
    
    this.tab[0].style.backgroundColor='#999999';
     
    for(let i=0;i<this.length;i++){
    this.tab[i].index=i; 
    this.tab[i].onclick=function(){
     //this.list[index].style.display='none'; 这里的this指向tab的this 
     This.list[This.index].style.display='none'; 
     This.tab[This.index].style.backgroundColor='#999999';
     //index=this.index;
     This.index=this.index;
    
     This.list[This.index].style.display='block';
     
     this.style.backgroundColor='#333333';
    } 
}
      let btn=This.btn.children;
   
       btn[0].onclick=()=>{
          This.list[This.index].style.display='none';
          This.list[This.index].style.zIndex=0; 
          This.tab[This.index].style.backgroundColor='#999999';
          if(This.index<This.length){ 
                
                 This.index--;
                 if(This.index<0){
                    This.index=This.length-1;
                 }
         }
         This.list[This.index].style.display='block';
         This.tab[This.index].style.backgroundColor='#333333';
       }
       btn[1].onclick=()=>{
          This.list[This.index].style.display='none'; 
          This.tab[This.index].style.backgroundColor='#999999';
          if(This.index<This.length){ 
                
                 This.index++;
                 if(This.index>This.length-1){
                    This.index=0;
                 }
         }
         This.list[This.index].style.display='block';
         This.list[This.index].style.zIndex=1;
         This.tab[This.index].style.backgroundColor='#333333';
       }
     

  
   // This.btn.children[currIndex].onclick=function(){
   //    // console.log(This.btn.children[i]);
   //    This.list[This.index].style.display='none'; 
   //    This.tab[This.index].style.backgroundColor='#333333';
   //       if(This.index){ 
              
   //             This.index++;
   //             This.index%=This.length;
   //       }else{
   //              This.index--;
   //              if(This.index<0){
   //                This.index=This.length-1;     
   //                }
   //            }  
   //       This.list[This.index].style.display='block';
   //       This.tab[This.index].style.backgroundColor='#999999'; 
   //      }
   // }

    this.auto();
    this.clear();    
   };

   Banner.prototype.auto=function(){
     var This=this; 
 
     This.timer=setInterval(function(){ //一般都是向左轮播,index++
      This.list[This.index].style.display='none';
      This.list[This.index].style.zIndex=0;
      This.tab[This.index].style.backgroundColor="#999999";
      This.index++;
      This.index%=This.length;
      This.list[This.index].style.display='block';
      This.list[This.index].style.zIndex=1;
      This.tab[This.index].style.backgroundColor="#333333";
      
     },1000)
   };
    
   Banner.prototype.clear=function(){
     var This=this;    
     this.boxDom.onmouseover=function(){
      clearInterval(This.timer)
      This.rightBox.style.display="block";
      This.leftBox.style.display="block";
   }
     this.boxDom.onmouseleave=function(){
      This.auto();
      This.rightBox.style.display="none";
      This.leftBox.style.display="none";
    } 
 };
    
    
   // var banner1=new Banner(boxDom,picImg,tabLi,btnDiv);
   // banner1.init();
   

 
 // function init(){
 //   for(var i=0;i<tabLi.length;i++){
 //    tabLi[i].index=i; 
 //    tabLi[i].onclick=function(){
 //     picImg[index].style.display='none'; 
 //     tabLi[index].className='';
 //     index=this.index;
 //     picImg[index].style.display='block';
 //     tabLi[index].className='on'; 
 //    }    
 //   };
    
    
 //   }
 //   for(var i=0;i<btnDiv.length;i++){
 //    btnDiv[i].index=i;
 //    btnDiv[i].onselectstart=function(){ 
 //     return false;
 //    }
 //    btnDiv[i].onclick=function(){
 //     picImg[index].style.display='none'; 
 //     tabLi[index].className='';
 //     if(this.index){
 //      index++;
 //      index%=tabLi.length;
 //     }else{
 //      index--;
 //      if(index<0)index=tabLi.length-1;     
 //     }  
 //     picImg[index].style.display='block';
 //     tabLi[index].className='on';
 //    }    
 //   };
 //   auto();
 //   boxDom.onmouseover=function(){
 //    clearInterval(timer)
 //   }
 //   boxDom.onmouseleave=function(){
 //    auto();
 //   }
 //   function auto(){
 //    timer=setInterval(function(){ //一般都是向左轮播,index++
 //      picImg[index].style.display='none';
 //      tabLi[index].className='';
 //      index++;
 //      index%=tabLi.length;
 //      picImg[index].style.display='block';
 //      tabLi[index].className='on';
 //    },2000)
 //   };
    
