

//defines animations
//que: ""=keep o=playonce s=seq
var animation = {
	
			
			"redflag-wave": {
				"target":"redflag",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":21,
                "frames": 9,
				"cframe":0,
                "loop": 0,
				"cloop":0,
				"direction":-1,
				"cycle":"bounce",
				"pause":0,
                "delay": 0,
				"wait":.1,
				"que":"s",
				"turbo":0
				
            },
			"redflag-wave2": {
				"target":"redflag",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":21,
                "frames": 6,
				"cframe":0,
                "loop": 0,
				"cloop":0,
				"direction":-1,
				"cycle":"bounce",
				"pause":0,
                "delay": 0,
				"wait":.2,
				"que":"s",
				"turbo":0
				
            },
			
			"sock-wind": {
				"target":"sock",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":77,
                "frames": 12,
				"cframe":0,
                "loop": 0,
				"cloop":0,
				"direction":-1,
				"cycle":"bounce",
				"pause":0,
                "delay": 0,
				"wait":.2,
				"que":"",
				"turbo":0
				
            },  
			"sock-wind2": {
				"target":"sock",
                "startX": 0,
                "startY": 558,
				"offsetX":0,
				"offsetY":62,
                "frames": 5,
				"cframe":0,
                "loop": 0,
				"cloop":0,
				"direction":-1,
				"cycle":"bounce",
				"pause":0,
                "delay": 0,
				"wait":.1,
				"que":"s",
				"turbo":0
				
            },
			"cloud-move3": {
				"target":"cloud3",
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
				"wait":.05,
				"que":"",
				"bound":"-100,700,-100,700"
				
            },
			
			"cloud-move4": {
				"target":"cloud4",
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
				"wait":.05,
				"que":"",
				"bound":"-200,760,-100,700",
				"turbo":0
				
            },
			"cloud-move5": {
				"target":"cloud5",
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
				"wait":.05,
				"que":"",
				"bound":"-200,760,-100,700"
            },
			"cloud-move6": {
				"target":"cloud6",
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
				"wait":.05,
				"que":"",
				"bound":"-300,860,-300,700"
				
				
            },
			"startbutton": {
				"target":"startbutton",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":88,
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
				
				
            }
			
}




myObj ={};
myObj.animation=animation;
myObj.animationlist=["startbutton","redflag-wave","redflag-wave2","sock-wind","sock-wind2","cloud-move3","cloud-move4","cloud-move5","cloud-move6"];
myObj.animationorder=["startbutton","redflag-wave","sock-wind","cloud-move3","cloud-move4","cloud-move5","cloud-move6"];

scenelist["scene0"]=myObj;

	
			