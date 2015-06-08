function playscene(whichscene){
	stopani();
	dumpanimation();
	
	switch (whichscene) {
		
		
		
		case "intro1":
		    
			
			//console.log(wag("intro").innerHTML);
			
			
			setupintro();
		
			intro();
			aniscene("intro1");
			startani();
			startanit();
		
		break;
		
		case "anne":
		    
			aniscene("anne");
			startani();
			startanit();
		
		break;
		
		
		default:
		break;

		
	}
}


function exitscene(whichscene){
	//stopani();
	//dumpanimation();
	
	switch (whichscene) {
		
		
		
		case "intro1":
		t12.kill();
		  exitscene1(introscene1);
		  
		break;
		
		default:
		break;
		
	}
	
}
function resetscene(whichscene){
	stopani();
	dumpanimation();
	hide();
	
	switch (whichscene) {
		
		case "intro1":
		    
			settopleft();
			
		break;
		
		
		default:
		break;

		
	}
}


function settopleft(){
	
	
	for(j=0;j<mySetListDiv.length;j++){
		divid=mySetListDiv[j];
		
		resettween(divid);//if teenMax
		wag(divid).style.top=mySetList[divid].top;
		wag(divid).style.left=mySetList[divid].left;
		
		//console.log(divid+" "+mySetList[divid].top);
		
	}
	
	
	
}