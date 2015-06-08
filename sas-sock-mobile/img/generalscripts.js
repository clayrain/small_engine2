// JavaScript Document


function showhidesimple(divid){
	
	currenttop=wag(divid).style.top;
	
	if(currenttop=="-1000px"){
		
	wag(divid).style.visibility=visible;
	switch (divid){
		
		case "storycloud":
		wag(divid).style.top="0px";
		break;
		
		default:
		
		break;
	}
	}else{
		wag(divid).style.top="-1000px";
		wag(divid).style.visibility=hidden;
		
	}
	
	
}