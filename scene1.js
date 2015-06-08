

//defines animations
//que: ""=keep o=playonce s=seq
var animation = {
	
			
			"beth-point": {
				"target":"beth-arm",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":76,
                "frames": 4,
				"cframe":0,
                "loop": 0,
				"cloop": 0,
				"direction":-1,
				"cycle":"bounce",
				"pause":3,
                "delay": 0,
				"wait":.1,
				"waitcount":0,
				"que":""
				
				
            },
			"beth-shift": {
				"target":"beth-leg",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":124,
                "frames": 2,
				"cframe":0,
                "loop": 0,
				"cloop": 0,
				"direction":-1,
				"cycle":"bounce",
				"pause":6,
                "delay": 3,
				"wait":.1,
				"waitcount":0,
				"que":""
				
				
            },
			"beth-blink": {
				"target":"beth-eyes",
                "startX": 0,
                "startY": 310,
				"offsetX":0,
				"offsetY":6,
                "frames": 3,
				"cframe":0,
                "loop": 0,
				"cloop": 0,
				"direction":-1,
				"cycle":"bounce",
				"pause":0,
                "delay": 3,
				"wait":.1,
				"waitcount":0,
				"que":"",
				"turbo":0
				
            },
			
			"stan-blink": {
				"target":"stan-head",
                "startX": 0,
                "startY": 210,
				"offsetX":0,
				"offsetY":72,
                "frames": 5,
				"cframe":0,
                "loop": 0,
				"cloop": 0,
				"direction":-1,
				"cycle":"bounce",
				"pause":2,
                "delay": 4,
				"wait":.1,
				"waitcount":0,
				"que":""
				
            },
			"stan-point": {
				"target":"stan-arm",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":122,
                "frames": 5,
				"cframe":0,
                "loop": 0,
				"cloop": 0,
				"direction":-1,
				"cycle":"bounce",
				"pause":2,
                "delay": 5,
				"wait":.1,
				"waitcount":-3,
				"que":""
				
				
            },
			
			"pointernum1": {
				"target":"p-pointernum1",
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
			
			"pointernum2": {
				"target":"p-pointernum2",
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
			
			
			"phone": {
				"target":"s1-phone",
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
			"fact1": {
				"target":"fact1",
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
			"fact2": {
				"target":"fact2",
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
myObj.animationlist=["fact1","fact2","stan-point","stan-blink","beth-blink","beth-point","beth-shift","phone","pointernum1","pointernum2"];
myObj.animationorder=["fact1","fact2","stan-point","stan-blink","beth-blink","beth-point","beth-shift","pointernum1","phone","pointernum2"];
scenelist["scene1"]=myObj;

	
			