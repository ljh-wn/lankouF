
// 盒子轮播图
class hotBanner{constructor(boxDom,obj){
	this.boxDom=boxDom;
	this.boxImg=null;
	this.ul=null;//所有li的容器
	let defaultObj = {
            imgs:["img/1.jpg","img/2.jpg"],
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
        this.myTimer=null;
    }
    // 方法
    // 渲染（创建所有的Dom元素）
    render(){
    	// 1创建图片及其容器
    	this.
    }
}