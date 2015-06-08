

//defines animations
//que: ""=keep o=playonce s=seq
var animation = {
	
			"anneflip": {
				"target":"anne",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":76,
                "frames": 4,
				"cframe":0,
                "loop": 0,
				"cloop":0,
				"direction":-1,
				"cycle":"wraps",
				"pause":0,
                "delay": 0,
				"wait":.1,
				"que":"",
				"turbo":0
				
            },
			"annewalk": {
				"target":"anne_vp",
                "startX": 0,
                "startY": 0,
				"offsetX":1,
				"offsetY":0,
                "frames": 0,
				"cframe":0,
                "loop": 0,
				"cloop":0,
				"direction":1,
				"cycle":"walk",
				"pause":0,
                "delay": 0,
				"wait":.2,
				"que":"",
				"bound":"-100,800,-100,800"
				
            }
			
			
			
}




myObj ={};
myObj.animationlist=["anneflip","annewalk"];
myObj.animationorder=["anneflip","annewalk"];

scenelist["anne"]=myObj;

	
			