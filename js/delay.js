function  delay(value1,value2){
	value1.onmouseover = function(){
			value2.style.display = "block";
		}
		value1.onmouseout = function(){
			setTimeout(function(){
				if(!isInside) {
					value2.style.display = "none";
				}
			},500);
		}
		
		var isInside = false;
		
		value2.onmouseover = function(){
			isInside = true;
		}
		value2.onmouseout = function(){
			isInside = false;
			this.style.display = "none";
		}
		
}
