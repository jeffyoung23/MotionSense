jQuery(document).ready(function(){

	var context;
	var canvas;
	var status = false;

	canvas = document.getElementById('input_canvas');

	context = canvas.getContext('2d');


	$(document).mousemove(function(e){
		if(status)
		    {
                        context.lineTo(e.pageX, e.pageY);
			obj = {
			x : e.pageX,
			y : e.pageY
			};
			mouse_path.push(obj);
			context.stroke();
                    }
	    }); 

	$(document).mousedown(function(e){
		context.beginPath();
		context.moveTo(e.pageX, e.pageY);
		obj = {
			x : e.pageX,
			y : e.pageY
			};
		mouse_path.push(obj);
		status = true;
	    }); 

	$(document).mouseup(function(e){
		if (status)
		    {
                        status = false;
                    }
	    });




    });