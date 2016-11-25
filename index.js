var canvas = new fabric.Canvas('canvas');
		
			// Define Rectangle One
        var rect1 = new fabric.Rect({
            top : 100,
            left : 100,
            width : 60,
            height : 70,
            fill : 'red'
        });

        // Define Rectangle Two
		var cir1 = new fabric.Circle({
            top : 100,
            left : 200,
            radius: 40,
            fill : 'yellow'
        });

		// Adding elemnt to canvas:
        canvas.add(rect1);
        canvas.add(cir1);

        canvas.setBackgroundColor('gray');


        canvas.forEachObject(function(obj){
    		//console.log(obj.name)
    			obj.set({
    			borderColor: 'red',
    			cornerColor: 'green',
    			cornerSize: 6,
    			transparentCorners: false
  			});

    		canvas.setActiveObject(obj);	
    		
		});


       /* canvas.item(0).set({
    		borderColor: 'red',
    		cornerColor: 'green',
    		cornerSize: 6,
    		transparentCorners: false
  		});*/
  		//canvas.setActiveObject(canvas.item(0));
  