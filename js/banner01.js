
//1、类（属性和方法）：轮播图
class Banner{
    //构造函数
    constructor(boxDom,obj){
        this.boxDom = boxDom;
        this.boxImg = null;//所有图片标签的容器
        this.ul = null;//所有li标签的容器
        this.leftBox=null;
        this.rightBox=null;
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

        this.myTimer = null;
        this.render();
        this.autoPlay();
        this.addEvent();
        console.log(this.boxDom);
    }

    //方法：
    //渲染（创建所有的dom元素）
    render(){
        //1、创建图片及其容器
        //1)、容器
        this.boxImg = document.createElement("div");
        this.boxImg.style.cssText = ` 
            position: absolute;
            width: 100%;
            height:100%;`;
        this.boxDom.appendChild(this.boxImg);
        this.leftBox=document.createElement("div");
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
        this.boxDom.appendChild(this.leftBox);
        this.rightBox=document.createElement("div");
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
        this.boxDom.appendChild(this.rightBox);
        //2)、图片
        let num = this.as.length;
        for(let i=0;i<num;i++){
            let  aDom=document.createElement("a");
            aDom.href=this.as[i];
            aDom.style.cssText=`
                float:left;
                text-decoration: none;
                width: 100%;
                height: 100%;
                position:absolute;
                opacity: 0;
            
            `;
            if(i==0){
                aDom.style.opacity = 1;
                aDom.style.zIndex = 1;
            }
            this.boxImg.appendChild(aDom);
            let imgDom = document.createElement("img");
            imgDom.src = this.imgs[i];
            imgDom.style.cssText = `
                position: absolute;
                width: 100%;
                height: 100%;
                text-align:center;
            `;
            aDom.appendChild(imgDom);
          
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
            z-index: 1;
        `;
        this.boxDom.appendChild(this.ul);
        //2)、li
        for(let i=0;i<num;i++){
            let li = document.createElement("li");
            li.style.cssText = `
                float: left;
                margin-left:10px;
                width:${this.douSize}px;
                height: ${this.douSize}px;
                background-color: ${this.douColor};
            `;
            if(this.douIsCircle){
                li.style.borderRadius = "50%";
            }
            if(i==0){
                li.style.backgroundColor = this.douHighColor;
            }
            this.ul.appendChild(li);
        }
    }

    //自动播放
    //1、自动播放（每隔一定时间换一张图片）
    autoPlay(){
        this.myTimer = setInterval(() => {
            //一、处理数据
            //1、
            let outIndex = this.index;
            this.index++;//1
            //2、
            if(this.index>this.as.length-1){
                this.index=0;
            }
            //二、改变外观
            let imgDoms = this.boxImg.children;
             imgDoms[this.index].style.zIndex=0;
            imgDoms[outIndex].style.zIndex=1;
            // console.log( imgDoms);
            fadeInOut(imgDoms[this.index],imgDoms[outIndex],this.timeSpace/3);
            let liDoms = this.ul.children;
            liDoms[this.index].style.backgroundColor = this.douHighColor;
            liDoms[outIndex].style.backgroundColor = this.douColor;
        }, this.timeSpace);
    }

    //2、停止播放
    stop(){
        window.clearInterval(this.myTimer);
    }

    //4、跳转到指定图片
    goImg(transOrd){
        //一、处理数据    
        let outIndex = this.index;
        this.index = transOrd;

        if(this.index>this.as.length-1){
            this.index=0;
        }

        //二、改变外观
        let imgDoms = this.boxImg.children;
        fadeInOut(imgDoms[this.index],imgDoms[outIndex],this.timeSpace/3);
        let liDoms = this.ul.children;
        liDoms[this.index].style.backgroundColor = this.douHighColor;
        liDoms[outIndex].style.backgroundColor = this.douColor;
    }

    addEvent(){
        //2、鼠标移入，停止播放
        this.boxDom.onmouseover = ()=>{
            this.stop();
            this.rightBox.style.display="block";
            this.leftBox.style.display="block";

        }
    
        //3、鼠标离开继续播放 
        this.boxDom.onmouseout = ()=>{
            this.autoPlay();
            this.rightBox.style.display="none";
            this.leftBox.style.display="none";
        }
        
        //4、点击豆豆跳转到对应的图片上。
        let liDoms = this.ul.children;
        for(let i=0;i<liDoms.length;i++){
            liDoms[i].onclick = ()=>{
                this.goImg(i);
            }
        }
        this.leftBox.onclick=()=>{
            let index1=this.index;
            index1--;
            if(index1<0){
                index1=this.as.length-1;
            }
          this.goImg(index1);
        }
         this.rightBox.onclick=()=>{
            let index1=this.index;
            index1++;
            if(index1>7){
                index1=0;
            }
          this.goImg(index1);
        }
    }
}