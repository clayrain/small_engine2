currentpic=0;

function showhide(whichdiv, whichstate){
	
	document.getElementById(whichdiv).style.visibility=whichstate;
}

function scaleSizeMax(maxW, maxH, currW, currH){
	
	var ratio = currH / currW;
	if(currW >= maxW && ratio <= 1){
		currW = maxW;
		currH = currW * ratio;
	} 
	
	if(currH >= maxH){
		currH = maxH;
	currW = currH / ratio;
	}
	return [currW, currH];
	
	
}

function showThumb(maxW, maxH, currW, currH){
	
	var ratio = currH / currW;
	if(ratio >= 1){
		
		currH = maxH* ratio;
		currW = maxW;//*ratio;
	} 
	
	//wide
	if(ratio<1){
		currH = maxH;
	   currW = maxW;//currH *ratio;
	}
	return [currW, currH];
	
	
}
function add_tile(current_media){
    
	var img = new Image();
	img.src=current_media;
	img.onload = function() {
		mywidth=this.width;
	    myheight=this.height;
		
		newSize=showThumb(50, 50, mywidth, myheight);
		
		myimg="<img src="+img.src+" width='"+newSize[0]+"' height='"+newSize[1]+"'/>";
		
		var mytile="<div class='tile_box'>"+myimg+"</div>";
		document.getElementById('socialtile').innerHTML+=mytile;	
		
		
	}
	
	//document.getElementById('').innerHTML=document.getElementById('socialviewport').innerHTML;
	
	
	//var myimg="<img src='"+current_media+"'>";

	
	
}


function decodeHTMLEntities(text) {
    var entities = [
        ['apos', '\''],
        ['amp', '&'],
        ['lt', '<'],
        ['gt', '>'],
		['quot', '\'']
    ];

    for (var i = 0, max = entities.length; i < max; ++i) 
        text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);

    return text;
}


function starttext(){
	
	var current_text=data[0].text;
	current_text = decodeHTMLEntities(current_text);
	current_text=current_text.replace('<a ','<a target=_blank ');
	
	//console.log(current_text);
	//current_text = current_text.replace('&gt;','>');
	//current_text = current_text.replace('&lt;','<');
	//current_text = current_text.replace('<a','<a target=_blank');
	
	
	
	document.getElementById('socialtext').innerHTML= current_text;
	
	//console.log(current_text);
}

function showtweettext(node,where){
	
	
	
	var current_text=data[node].text;
	current_text = decodeHTMLEntities(current_text);
	
	
	current_text=current_text.replace('<a ','<a target=_blank ');
	current_text = current_text.replace("...'>","'>");
	
	//console.log(current_text);
	
	//alert(current_text);
	
	//current_text = current_text.replace('&gt;','>');
	//current_text = current_text.replace('&lt;','<');
	//current_text = current_text.replace('<a','<a target=_blank');
	
	
	
	document.getElementById(where).innerHTML= current_text;
	
	
}
function start(){
	
	
	
	for(i=0;i<data.length;i++){
		
		var current_media=data[i].media_url;
		add_tile(current_media);
		
	}
	
	//resize holder;
	var width=data.length*53;
	document.getElementById('socialtile').style.width = width+'px';
	//ani1();
	
}

function ani1(){
	
	
}




//GET DATA


//var myurl="tweet_get.php?who=ABCNETWORK";
var myurl="http://clayrain.com/sas-mobile10/tweet_get_bubble.php?who=SASDataMGMT";
request = new XMLHttpRequest();
request.open('GET', myurl, true);


request.onload = function() {
	
	
  if (request.status >= 200 && request.status < 400){
    // Success!
	
    data = JSON.parse(request.responseText);
	
	//alert(data);
	//start();
	//starttext();
	
	
  } else {
	 // alert("ng");
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();


