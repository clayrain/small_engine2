function showsimplepx(divid,divtop){
	wag(divid).style.top=divtop+"px";
}

function preaniscene(newscene){
	
	//setscenes();
	showsimplepx(current_scene,-1000);
	showsimplepx(newscene,0);
	aniscene(newscene);
	
	current_scene=newscene;
	
}
function setscenes(){
	showsimplepx("socialviewporttext1",-1000);
	showsimplepx("socialviewporttext2",-1000);
	showsimplepx("socialviewporttext3",-1000);
	showsimplepx("socialviewporttext4",-1000);
	
	
}
