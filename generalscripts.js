// JavaScript Document

//init scene

function init(){
	
	showhidesimple("storycloud");
	showhidesimple("buttonfloor");
	showhidesimple("circlebutton");
	showsimplepx("socialviewporttext1",-1000);
	showsimplepx("socialviewporttext2",-1000);
	showsimplepx("socialviewporttext3",-1000);
	showsimplepx("socialviewporttext4",-1000);
	showsimplepx("socialviewporttext6",-1000);
	
	showsimplepx("flag1",-1000);
	showsimplepx("flag2",-1000);
	showsimplepx("flag3",-1000);
	showsimplepx("flag4",-1000);
	showsimplepx("flag5",-1000);
	showsimplepx("flag6",-1000);
	showsimplepx("flag7",-1000);
	showsimplepx("flag8",-1000);
	showsimplepx("factflag1",-1000);
	showsimplepx("factflag2",-1000);
	showsimplepx("factflag3",-1000);
	showsimplepx("factflag4",-1000);
	showsimplepx("factflag5",-1000);
	showsimplepx("factflag6",-1000);
	showsimplepx("factflag7",-1000);
	showsimplepx("factflag8",-1000);
	showsimplepx("bonus2",-1000);
	showsimplepx("bonus3",-1000);
	showsimplepx("bonus4",-1000);
	
	
	
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
	 // hidesimple("flag7");
	  // hidesimple("flag8");
	  //  hidesimple("bonus4");
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

function changeani(scenename){
	
	//kill animation order
	dumpanimation();
	aniscene(scenename);
	
}
function oncheckclose(scenename){
	if((newscene!=scenename)&&(newscene=="")){
		
		newscene=scenename;
		dopan();
		changeani(scenename);
		
	}
	
	if(newscene!=scenename){
		leavescene=newscene;
		newscene=scenename;
		oncloseplain(scenename);
		changeani(scenename);
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