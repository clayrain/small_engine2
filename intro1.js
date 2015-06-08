

var mySet ={};
var mySetList=[];
var mySetListDiv=[];

function addRestObj(divid){
	
	mySet ={};
	
	mySet.top=wag(divid).style.top;
	mySet.left=wag(divid).style.left;
	mySetList[divid]=mySet;
	mySetListDiv.push(divid);//mySet
	
	
}
function setupintro(){
	mySetListDiv=[];
	addRestObj("building");
	addRestObj("logos");
	addRestObj("title1");
	addRestObj("clouds1");
	addRestObj("clouds2");
	addRestObj("introscene1");
	//addRestObj("startbuttonvp");
	
TweenMax.to(building, 0, {
	delay:0,
    transformOrigin: "50% 50%",
    top: 350,
    left: 300,
    scaleX: .5,
    scaleY: .5,
});
TweenMax.to(logos, 0, {
	delay:0,
    transformOrigin: "50% 50%",
    opacity:0
});


wag("startbuttonvp").style.top="-200px";





TweenMax.to(title1, 0, {
	delay:0,
    transformOrigin: "50% 50%",
    scaleX: .5,
    scaleY: .5,
	opacity:0
});


TweenMax.to(cloud3, 0, {
	delay:0,
    transformOrigin: "50% 50%",
	opacity:.5,
    scaleX: .5,
    scaleY: .5,
});

}
function intro(){
t4 = TweenMax.to(title1, 3, {
    delay: 0,
    transformOrigin: "50% 50%",
   
    scaleX: 1.25,
    scaleY: 1.25,
    opacity: 1,
    ease: Quad.easeOut
});

t5 = TweenMax.to(title1, 1, {
    delay: 4,
    transformOrigin: "50% 50%",
    top: -250,
    ease: Quad.easeIn
});

t1 = TweenMax.to(clouds1, 3, {
    transformOrigin: "50% 50%",
    top: -250,
    left: -100,
    scaleX: 5,
    scaleY: 5,
    opacity: .5,
    ease: Quad.easeIn
});



t2 = TweenMax.to(clouds2, 3, {
    delay: 1,
    transformOrigin: "50% 50%",
    top: -250,
    left: 0,
    scaleX: 4,
    scaleY: 4,
    opacity: .5,
    ease: Quad.easeIn, onComplete:clouds
});

t3 = TweenMax.to(building, 4, {
    delay: 1.5,
    transformOrigin: "50% 50%",
    top: 1,
    left: -135,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    ease: Quad.easeOut,
	onComplete:showlogos
});

}
function clouds(){
	
	addani("cloud-move,cloud-move2,cloud-move3,cloud-move6");
	
	
	
}

function showlogos(){
t7 = TweenMax.to(logos, 2, {
    transformOrigin: "50% 50%",
    opacity: 1,
    ease: Quad.easeOut,
	
});


t12 = TweenMax.to(startbuttonvp, 2, {
    transformOrigin: "50% 50%",
	top:130,
    opacity: .9,
    ease: Quad.easeOut,
	
});

//wag("startbuttonvp").style.top="100px";
//wag("startbuttonvp").style.top=mySetList["startbuttonvp"].top;



}

function resettween(divid){
	
	//console.log(divid);
	
	TweenMax.killAll(false,true,false);
    TweenMax.set(wag(divid), {clearProps:"all"});




}


function exitscene1(divid){
	
t10 = TweenMax.to(divid, 1, {
    transformOrigin: "50% 50%",
	left:100,
	top:-400,
	scaleX:1.0,
	scaleY:1.0,
	 ease: Quad.easeOut,
	 onComplete:exitscene1b
});
/*t11 = TweenMax.to(divid, .5, {
    delay:.25,
	transformOrigin: "50% 50%",
	left:100,
	top:-430
});*/

wag("startbuttonvp").style.top="-200px";
}

function exitscene1b(){
	t10 = TweenMax.to(building, 1, {
	delay:.5,
	scaleX:1.45,
	scaleY:1.45,
	
	top:-300,
	left:-200,
	 ease: Quad.easeOut,
	 onComplete:finalinterface
});



//addani("anneflip,annewalk");
}

function finalinterface(){
	
	showhidesimple("buttonfloor");
	showhidesimple("circlebutton");
	showsimplepx("socialout",255);
	
}





