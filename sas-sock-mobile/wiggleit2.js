function wag(div_element) {
            return document.getElementById(div_element);
        }
		
		
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(obj, start) {
        for (var i = (start || 0), j = this.length; i < j; i++) {
            if (this[i] === obj) {
                return i;
            }
        }
        return -1;
    }
}



function setupViewport() {

    for (i = 0; i < animationlist.length; i++) {

        var animationpart = animationlist[i];
        var viewportname = animation[animationpart].target + "-vp";
        var viewportHeight = animation[animationpart].offsetY;
        wag(viewportname).style.height = viewportHeight + "px";
    }
}

function aniplayer() {

    var frames = animation[pickani].frames;
    var currentframe = animation[pickani].cframe;
    var target = animation[pickani].target;
    var startX = animation[pickani].startX;
    var startY = animation[pickani].startY;
    var offsetX = animation[pickani].offsetX;
    var offsetY = animation[pickani].offsetY;
    var direction = animation[pickani].direction;
    var wait = animation[pickani].wait;
    var randomloop = animation[pickani].randomloop;
    var cycle = animation[pickani].cycle;


    switch (cycle) {
		
		

        case "bounce":
            var animationend = ((currentframe < frames) && (direction == -1));
            if (!animationend) {

                pause = animation[pickani].pause;

                if (direction == -1) {

                    animation[pickani].pausecount = 0;
                    //console.log(animation[pickani].pausecount+" "+currentframe);

                }


                direction = 1;
                animation[pickani].direction = 1;
                animationend = true;



                //kill animation

                //pause it
            };

            if ((currentframe == 0) && (direction == 1)) {
                animationend = false;
                direction = -1;
                animation[pickani].direction = direction;
				animation[pickani].cframe=1;
				
				//console.log("bdone");

            }

            break;
			
			case "walk":
				var targetTop=wag(target).style.top;
				var targetLeft=wag(target).style.left;
				targetTop = Number(targetTop.replace('px',''));
				targetLeft = Number(targetLeft.replace('px',''));
				dx=Number(direction)*Number(offsetX);
				//console.log(dx);
				dx=(targetLeft+dx);//*direction;
			
			 	
				
				bound=animation[pickani].bound;
				boundArray=bound.split(",");
				
				
				
				if(dx<Number(boundArray[0])){
					dx=Number(boundArray[1]);
				}
				if(dx>Number(boundArray[1])){
					dx=Number(boundArray[0]);
				}
				
				
				wag(target).style.left = dx + "px";
				
				
			break;

        default:
            var animationend = currentframe < frames;
            break;
    }



    if (animationend) {


        switch (direction) {

            case -1:
                var move = offsetY * (currentframe) + startY;
			
                wag(target).style.top = move * direction + "px";
				

                animation[pickani].cframe = currentframe + 1;
                //clearInterval(aniflip);
                //aniflip=setInterval(aniplayer, 1000*wait);


                break;


            case 1:

                animation[pickani].pausecount += anitick;

                //console.log(animation[pickani].pausecount+" "+animation[pickani].pause);
                if (animation[pickani].pausecount >= animation[pickani].pause) {
                    currentframe -= 1;
                    animation[pickani].cframe = currentframe - 1;

                    var move = offsetY * (currentframe) + startY;
				
                   wag(target).style.top = move * -1 + "px";
					
                    animation[pickani].cframe = currentframe;

                }


                break;

        }




    } else {



        // reset and loop or end with switch
		
		
		if(cycle!="walk"){
         wag(target).style.top = (startY * -1) + "px";
		}
		
        animation[pickani].cframe = 1;

        //see if loop, if loop then repeat


        if (animation[pickani].loop != animation[pickani].cloop) {

            animation[pickani].cloop += 1;


        } else {
            //DONE
            //console.log("done");
            //var nextani=Math.floor((Math.random() * maxtime*1000)+1 )

            var delay = 0;
            if (animation[pickani].delay != 0) {
                delay = Math.floor((Math.random() * (animation[pickani].delay + 1)))
            }
			
			//console.log(delay+" "+pickani);



             // add delays
			
			 animation[pickani].waitcount = -1 * delay;
             animation[pickani].cloop = 0;
			
			
			
            var que = animation[pickani].que;

            if (que != "") {
                index = animationorder.indexOf(pickani);
				//remove from que
                if (index > -1) {
                    animationorder.splice(index, 1);
                }
				
				//pick a random one if it is a seq
				currenttarget=animation[pickani].target;
				
				
				var tempani=[];
				for(i=0;i<animationlist.length;i++){
					var animationname=animationlist[i];
					newtarget = animation[animationname].target;
					
					if(newtarget==currenttarget){
						tempani.push(animationname);
					}
				}
				
				// get a random one and push to the main player
				
				tempani_count=tempani.length;
				tempani_pick=Math.floor((Math.random()*tempani_count));
				//console.log(tempani_pick);
				animationorder.push(tempani[tempani_pick]);
				
				
				
            }

            


        }
    }
    //set vals



}



function aniclock() {

    for (i = 0; i < animationorder.length; i++) {
        pickani = animationorder[i];

        //see if animation is locked from turbo
		
		//console.log(((animation[pickani].turbo!==0))||(turbocount==0));
		if(((animation[pickani].turbo!=0)&&(turbomode))||(turbocount==0)){
        	if (animation[pickani].waitcount != undefined) {
            	animation[pickani].waitcount += anitick;
        	} else {
            	animation[pickani].waitcount = anitick;
        	}


       		if (animation[pickani].waitcount >= animation[pickani].wait) {
				animation[pickani].waitcount=0;
            	aniplayer(); 
        	}
		
		}
		
		
		
    }

}

function aniclockt(){
	
	//adds turbo speed for animation that accept it.
	turbocount=1;
	aniclock();
	turbocount=0;
	
}
var scenelist={}
var currentscene="";
var anitime;
var anitimet;
var animationlist=[];
var animationorder=[];
var turbocount=0;
var turbomode=0;

function aniscene(whichscene){
	
	currentscene=whichscene;
	animationlist=[];
	animationorder=[];
	

	
	if(scenelist[whichscene]){
		
	animationlist=scenelist[whichscene].animationlist;
	animationorder=scenelist[whichscene].animationorder;
	}
}
function startani(){
	clearInterval(anitime);
	anitime = setInterval(aniclock, 1000 * anitick);
}

function startanit(){
	turbomode=1;
	turbocount=0;
	clearInterval(anitimet);
	anitimet = setInterval(aniclockt, 1000 * anitick);
}


function stopani(){
	turbomode=0;
	turbocount=0;
	 clearInterval(anitimet);
	 clearInterval(anitime);
}

function stopanit(){
	turbomode=0;
	turbocount=0;
	 clearInterval(anitimet);
	 
}

function dumpanimation(){
	animationorder=[];
}


function addaniobj(clickani){
	var tempArray=clickani.split(",");
				
	animationorder = animationorder.concat(tempArray);	
	
	scenelist[whichscene].animateorder=animationorder;
				
	//animationorder.push(clickani);
	
}

function addani(clickani){
	var tempArray=clickani.split(",");
				
	animationorder = animationorder.concat(tempArray);	
				
	//animationorder.push(clickani);
	
}

function removeani(clickani){
	
	console.log(clickani);
	 index = animationorder.indexOf(clickani);
				//remove from que
				
			
				
				
                if (index > -1) {
					
				 var target = animation[clickani].target;
				 var startY = animation[clickani].startY;
				 wag(target).style.top=startY+"px";
                    animationorder.splice(index, 1);
                }
	
}


