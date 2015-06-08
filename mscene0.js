

//defines animations
//que: ""=keep o=playonce s=seq
var animation = {
	
			"sock2-wind": {
				"target":"sock",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":50,
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
			"sock-wind": {
				"target":"sock",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":62,
                "frames": 14,
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
			"cloud-move": {
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
				"bound":"-100,300,-100,300"
				
            },
			"cloud-move2": {
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
				"bound":"-200,360,-100,300"
				
            },
			"cloud-move3": {
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
				"bound":"-200,360,-100,300",
				"turbo":0
				
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
				"bound":"-200,360,-100,300"
				
				
            },
			"startbutton": {
				"target":"startbutton",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":59,
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
				
				
            },
			"cloudbutton": {
				"target":"cloudbutton",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":44,
                "frames": 6,
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
				"offsetX":3,
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
				
            },
			"book-hover": {
				"target":"book",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":82,
                "frames": 22,
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
			
			"book-hover2": {
				"target":"book",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":82,
                "frames": 15,
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
			
			"pointernum7": {
				"target":"p-pointernum7",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":24,
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
			
			"pointernum8": {
				"target":"p-pointernum8",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":39,
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
			"s4-cindyhead": {
				"target":"cindyhead",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":37,
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
				"que":"",
				"turbo":0
				
            },
			
			"phone": {
				"target":"c-phone",
                "startX": 0,
                "startY": 0,
				"offsetX":0,
				"offsetY":17,
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
				
            }
			
}




myObj ={};
myObj.animation=animation;
myObj.animationlist=["cloudbutton","startbutton","sock-wind","sock-wind2","redflag-wave","redflag-wave2","cloud-move","cloud-move2","cloud-move3","cloud-move6"];
myObj.animationorder=["cloudbutton","startbutton","sock2-wind","redflag-wave"];

scenelist["intro1"]=myObj;

	
			