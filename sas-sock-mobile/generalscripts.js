// JavaScript Document

//init scene

function init(){
	
	showhidesimple("storycloud");
	showhidesimple("buttonfloor");
	showhidesimple("circlebutton");
	hide();
	
}

function hide(){
	ihide("storycloud");
	ihide("buttonfloor");
	ihide("circlebutton");
	 wag("circlebutton").style.top="-1000px";
	 
	 wag("scene1").style.top="-1000px";
	 wag("scene2").style.top="-1000px";
	 wag("scene3").style.top="-1000px";
	 wag("scene4").style.top="-1000px";
	 wag("scene5").style.top="-1000px";
	 wag("scene6").style.top="-1000px";
	  hidesimple("flag7");
	   hidesimple("flag8");
	    hidesimple("bonus4");
	 newscene="";
	//ihide("scene1");
}

function ihide(divid){
	   wag(divid).style.top="-1000px";
	wag(divid).style.visibility="hidden";
	
}
function hidesimple(divid){
	wag(divid).style.top="-1000px";
}
function showsimple(divid){
	wag(divid).style.top="0px";
}
function showsimplepx(divid,divtop){
	wag(divid).style.top=divtop+"px";
}

function showhidesimple(divid){
	
	currenttop=wag(divid).style.top;
	if(currenttop=="-1000px"){
		
	wag(divid).style.visibility="visible";
	switch (divid){
		
		case "storycloud":
		wag(divid).style.top="0px";
		break;
		
		case "buttonfloor":
		wag(divid).style.top="2px";
		break;
		
		case "circlebutton":
		wag(divid).style.top="40px";
		break;
		
		default:
	
		
		break;
	}
	}else{
		wag(divid).style.top="-1000px";
		wag(divid).style.visibility="hidden";
		
	}
	
	
}

var newscene="";
var leavescene="";

function dopan(){
	
	//console.log(newscene);
	switch (newscene){
			
			case "scene1":
			  m0hot();
			break;
			
			case "scene2":
			  m1hot();
			break;
			
			case "scene3":
			  m2hot();
			break;
			
			case "scene4":
			  m3hot();
			break;
			
			case "scene5":
			  m4hot();
			break;
			
			case "scene6":
			  m5hot();
			break;
			
			
			
			default:
			break;
			
			
			
		}
	onclose(newscene);
}
function oncheckclose(scenename){
	if((newscene!=scenename)&&(newscene=="")){
		
		newscene=scenename;
		dopan();
		
	}
	
	if(newscene!=scenename){
		leavescene=newscene;
		newscene=scenename;
		oncloseplain(scenename);
	}
	
	
	
	
}

function oncloseplain(scenename){
	
	    wag("elevatordoors").style.top="0px";
		t32 = TweenMax.to(doorleft, .5, {delay:0,left:0,ease: Quad.easeOut});
		t33 = TweenMax.to(doorright, .5, {delay:0,left:150,ease: Quad.easeOut,onComplete:onopenplain});
	
}
function onopenplain(){
	//switch to newscene
	//console.log(leavescene);
	wag(leavescene).style.top="-1000px";
	t32 = TweenMax.to(doorleft, .5, {left:-150,ease: Quad.easeOut, onComplete:dopan});
	t33 = TweenMax.to(doorright, .5, {left:300,ease: Quad.easeOut});
}


function onclose(scenename){
	
	
	//if(newscene!=scenename){
		newscene=scenename;
		wag("elevatordoors").style.top="0px";
		t30 = TweenMax.to(doorleft, .5, {delay:1,left:0,ease: Quad.easeOut});
		t31 = TweenMax.to(doorright, .5, {delay:1,left:150,ease: Quad.easeOut,onComplete:switchscene});
	//}
}
function onopen(){
	t30 = TweenMax.to(doorleft, .5, {left:-150,ease: Quad.easeOut});
	t31 = TweenMax.to(doorright, .5, {left:300,ease: Quad.easeOut, onComplete:doorhide});
}

function doorhide(){
	wag("elevatordoors").style.top="-1000px";
}
function switchscene(){
	//newscene
	//place new scene
	//do animationlist
	wag(newscene).style.top="0px";
	onopen();
	
}