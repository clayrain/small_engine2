

//defines animations
//que: ""=keep o=playonce s=seq
var animation = {
	
			"monitor-hover": {
				"target":"monitor",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":358,
                "frames": 8,
				"cframe":0,
                "loop": 0,
				"cloop":0,
				"direction":-1,
				"cycle":"bounce",
				"pause":0,
                "delay": 0,
				"wait":.1,
				"que":"",
				"turbo":0
				
            },
			
			
			
			"pointernum3": {
				"target":"p-pointernum3",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":117,
                "frames": 20,
				"cframe":0,
                "loop": 0,
				"cloop": 0,
				"direction":-1,
				"cycle":"bounce",
				"pause":0,
                "delay": 0,
				"wait":.05,
				"waitcount":0,
				"que":""
				
            },
			
			"pointernum4": {
				"target":"p-pointernum4",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":117,
                "frames": 20,
				"cframe":0,
                "loop": 0,
				"cloop": 0,
				"direction":-1,
				"cycle":"bounce",
				"pause":0,
                "delay": 0,
				"wait":.05,
				"waitcount":0,
				"que":""
				
            },
			"s2-janehead": {
				"target":"janehead",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":131,
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
			"s2-janearm": {
				"target":"janearm",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":169,
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
			
			"phone2": {
				"target":"s-phone2",
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
				"que":"s",
				"turbo":0
				
            },
			"fact3": {
				"target":"fact3",
                "startX": 0,
                "startY": -3,
				"offsetX":0,
				"offsetY":71,
                "frames": 20,
				"cframe":0,
                "loop": 0,
				"cloop": 0,
				"direction":-1,
				"cycle":"bounce",
				"pause":0,
                "delay": 0,
				"wait":.05,
				"waitcount":0,
				"que":"",
				"turbo":0
				
            },
			"fact4": {
				"target":"fact4",
                "startX": 0,
                "startY": -3,
				"offsetX":0,
				"offsetY":71,
                "frames": 20,
				"cframe":0,
                "loop": 0,
				"cloop": 0,
				"direction":-1,
				"cycle":"bounce",
				"pause":0,
                "delay": 0,
				"wait":.05,
				"waitcount":0,
				"que":"",
				"turbo":0
				
            }
			
}




myObj ={};
myObj.animation=animation;
myObj.animationlist=["fact3","fact4","monitor-hover","s2-janehead","s2-janearm","phone2","pointernum3","pointernum4"];
myObj.animationorder=["fact3","fact4","monitor-hover","pointernum3","s2-janehead","s2-janearm","phone2","pointernum4"];
scenelist["scene2"]=myObj;

	
			