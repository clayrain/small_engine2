

//defines animations
//que: ""=keep o=playonce s=seq
var animation = {
	
			"book-hover": {
				"target":"book",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":164,
                "frames": 22,
				"cframe":0,
                "loop": 0,
				"cloop":0,
				"direction":-1,
				"cycle":"bounce",
				"pause":0,
                "delay": 0,
				"wait":.1,
				"que":"s"
				
            },
			
			"book-hover2": {
				"target":"book",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":164,
                "frames": 15,
				"cframe":0,
                "loop": 0,
				"cloop":0,
				"direction":-1,
				"cycle":"bounce",
				"pause":0,
                "delay": 0,
				"wait":.1,
				"que":"s"
				
            },
			
			"pointernum7": {
				"target":"p-pointernum7",
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
			
			"pointernum8": {
				"target":"p-pointernum8",
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
			"s4-cindyhead": {
				"target":"cindyhead",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":74,
                "frames": 5,
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
			
			"phone": {
				"target":"s-phone4",
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
				"que":"s"
				
            },
			"fact7": {
				"target":"fact7",
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
			"fact8": {
				"target":"fact8",
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
myObj.animationlist=["fact7","fact8","book-hover","book-hover2","s4-cindyhead","phone","pointernum7","pointernum8"];
myObj.animationorder=["fact7","fact8","book-hover","pointernum7","s4-cindyhead","phone","pointernum8"];
scenelist["scene4"]=myObj;

	
			