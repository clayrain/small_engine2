

//defines animations
//que: ""=keep o=playonce s=seq
var animation = {
	
		
			
			
			"s6-steveeyes": {
				"target":"steveeyes",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":8,
                "frames": 8,
				"cframe":0,
                "loop": 0,
				"cloop": 0,
				"direction":-1,
				"cycle":"bounce",
				"pause":3,
                "delay": 6,
				"wait":.1,
				"waitcount":-3,
				"que":""
				
            },
			"s6-stevearm": {
				"target":"stevearm",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":47,
                "frames": 6,
				"cframe":0,
                "loop": 0,
				"cloop": 0,
				"direction":-1,
				"cycle":"bounce",
				"pause":3,
                "delay": 6,
				"wait":.1,
				"waitcount":-3,
				"que":""
				
            },
			"shoe1": {
				"target":"shoe1",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":29,
                "frames": 4,
				"cframe":0,
                "loop": 0,
				"cloop": 0,
				"direction":-1,
				"cycle":"bounce",
				"pause":3,
                "delay": 6,
				"wait":.1,
				"waitcount":-3,
				"que":""
				
            },
			"shoe2": {
				"target":"shoe2",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":29,
                "frames": 4,
				"cframe":0,
                "loop": 0,
				"cloop": 0,
				"direction":-1,
				"cycle":"bounce",
				"pause":3,
                "delay": 6,
				"wait":.1,
				"waitcount":-3,
				"que":""
				
            },
			
			"s-phone6": {
				"target":"s-phone6",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":52,
                "frames": 4,
				"cframe":0,
                "loop": 0,
				"cloop": 0,
				"direction":-1,
				"cycle":"bounce",
				"pause":3,
                "delay": 10,
				"wait":.1,
				"waitcount":-6,
				"que":"s"
				
            }
			
}




myObj ={};
myObj.animation=animation;
myObj.animationlist=["s6-steveeyes","s6-stevearm","shoe1","shoe2","s-phone6"];
myObj.animationorder=["s6-steveeyes","s6-stevearm","shoe1","shoe2","s-phone6"];
scenelist["scene6"]=myObj;

	
			