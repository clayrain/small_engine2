

//defines animations
//que: ""=keep o=playonce s=seq
var animation = {
	
		
			
			
			"s5-sharonarm": {
				"target":"sharonarm",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":100,
                "frames": 4,
				"cframe":0,
                "loop": 0,
				"cloop": 0,
				"direction":-1,
				"cycle":"bounce",
				"pause":3,
                "delay": 3,
				"wait":.1,
				"waitcount":-3,
				"que":"",
			
				
            },
			"s5-bobarm": {
				"target":"bobarm",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":64,
                "frames": 12,
				"cframe":0,
                "loop": 0,
				"cloop": 0,
				"direction":-1,
				"cycle":"bounce",
				"pause":2,
                "delay": 3,
				"wait":.1,
				"waitcount":-1,
				"que":"",
				"turbo":0
				
            },
			"s5-bobhead": {
				"target":"bobhead",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":40,
                "frames": 3,
				"cframe":0,
                "loop": 0,
				"cloop": 0,
				"direction":-1,
				"cycle":"bounce",
				"pause":3,
                "delay": 3,
				"wait":.1,
				"waitcount":-1,
				"que":"",
				"turbo":0
				
            },
			"s5-pointer5a": {
				"target":"pointer5a",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":79,
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
			"s5-pointer5b": {
				"target":"pointer5b",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":79,
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
			"s5-pointer5c": {
				"target":"pointer5c",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":79,
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
			"s5-pointer5d": {
				"target":"pointer5d",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":79,
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
			"s5-pointer5e": {
				"target":"pointer5e",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":79,
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
				
            }
			
}




myObj ={};
myObj.animation=animation;
myObj.animationlist= ["s5-sharonarm","s5-bobarm","s5-bobhead","s5-pointer5a","s5-pointer5b","s5-pointer5c","s5-pointer5d","s5-pointer5e"];
myObj.animationorder=["s5-sharonarm","s5-bobarm","s5-bobhead","s5-pointer5a","s5-pointer5b","s5-pointer5c","s5-pointer5d","s5-pointer5e"];


scenelist["scene5"]=myObj;

	
			