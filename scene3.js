

//defines animations
//que: ""=keep o=playonce s=seq
var animation = {
	
			"itsocks": {
				"target":"itsocks",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":110,
                "frames": 8,
				"cframe":0,
                "loop": 0,
				"cloop":0,
				"direction":-1,
				"cycle":"bounce",
				"pause":0,
                "delay": 0,
				"wait":.1,
				"que":""
				
            },
			
			
			
			"pointernum5": {
				"target":"p-pointernum5",
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
			
			"pointernum6": {
				"target":"p-pointernum6",
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
			"s3-ithead": {
				"target":"ithead",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":59,
                "frames": 14,
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
			"s3-itarm": {
				"target":"itarm",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":80,
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
			
			"phone3": {
				"target":"s-phone3",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":35,
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
			"fact5": {
				"target":"fact5",
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
			"fact6": {
				"target":"fact6",
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
myObj.animationlist=["fact5","fact6","itsocks","s3-ithead","s3-itarm","phone3","pointernum5","pointernum6"];
myObj.animationorder=["fact5","fact6","itsocks","s3-ithead","s3-itarm","phone3","pointernum5","pointernum6"];
scenelist["scene3"]=myObj;

	
			