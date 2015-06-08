function setupViewport(){
	
	for(i=0;i<animationlist.length;i++){
		
		var animationpart=animationlist[i];
		
		console.log(animationpart);
		var viewportname=animation[animationpart].target+"-vp";
		var viewportHeight=animation[animationpart].offsetY;
		$(viewportname).style.height=viewportHeight+"px";
		
		//console.log(viewportname+" "+viewportHeight);
		
	
	}
}

function aniplayer(){
	
	var frames=animation[pickani].frames;
	var currentframe=animation[pickani].cframe;
	var target=animation[pickani].target;
	var startX=animation[pickani].startX;
	var startY=animation[pickani].startY;
	var offsetX=animation[pickani].offsetX;
	var offsetY=animation[pickani].offsetY;
	var direction=animation[pickani].direction;
	var wait=animation[pickani].wait;
	var randomloop=animation[pickani].randomloop;
	var cycle=animation[pickani].cycle;
	
	
	
	
	
	switch (cycle){
		
		case "bounce":
		  var animationend=((currentframe<frames)&&(direction==-1));
		  
		  if(!animationend){
			
			
			//check to make sure it is only called once. the above
			pause=animation[pickani].pause;
			if((pause!=0)&&(direction==-1)){
				wait=pause;
			}
			
			
			direction=1; 
			animation[pickani].direction=1;
			animationend=true; 
			
			
			
			//kill animation
			  
			  //pause it
		  };
		  
		  if((currentframe==0)&&(direction==1)){
			  animationend=false;
			  direction=-1; 
			  animation[pickani].direction=-1;
			  
			  
			  
			  
			  
			  
		  }
		
		break;
		
		default:
	  	var animationend=currentframe<frames;
	  	break;
	}
	
	
	
	if(animationend){
		
		
		switch (direction){
			
			case -1:
			var move=offsetY*(currentframe)+startY;
			$(target).style.top=move*direction+"px";
		//console.log($(target).style.top);
		
			animation[pickani].cframe=currentframe+1;
			clearInterval(aniflip);
			
			
			aniflip=setInterval(aniplayer, 1000*wait);
			
			//console.log(move);
			break;
			
			
			case 1:
			currentframe-=1;
			animation[pickani].cframe=currentframe-1;
			
			var move=offsetY*(currentframe)+startY;
			$(target).style.top=move*-1+"px";
			animation[pickani].cframe=currentframe;
			clearInterval(aniflip);
			aniflip=setInterval(aniplayer, 1000*wait);
			//console.log(move);
			
			
			
			break;
		
		}
		
		
		
		
		
	}else{
		
		
		
	  // reset and loop or end with switch
	  $(target).style.top=(startY*-1)+"px";
	  animation[pickani].cframe=0;
	  
	  var nextani=Math.floor((Math.random() * maxtime*1000)+1 )
	  doani=setInterval(anique, nextani);
	  clearInterval(aniflip);
	  
	  //see if random loop
	  if(randomloop!=0){
	  	var redo=Math.floor((Math.random() * randomloop)+1 ); 
	  	if(redo<randomloop-1){
		  	aniflip=setInterval(aniplayer, 1000*wait);
		  	clearInterval(doani);
	  	}
	  }
	  
	  
	}
	//set vals
	
	
	
}



function playani(whichani){
	//whichani=3;
	
	pickani=animationlist[whichani];
	clearInterval(doani);
	aniflip=setInterval(aniplayer, 0);
	//aniplayer();	
}

function anique(){
	
	//pick an animation 
	var whichani=Math.floor((Math.random() * animationlist.length)); 
	playani(whichani);
   
}

var doani=setInterval(anique, 0);
var maxtime=3;
setupViewport();