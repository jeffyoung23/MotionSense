// onload function....
if(window.addEventListener)
    {
    window.addEventListener('load', function ()
			    {
	    
	    var canvas;

	    var context;

	    /**
	       Draw the initial canvas, and init everything
	    */

	    function draw()
	    {
		/**
		   Grab the canvas
		*/
		canvas = document.getElementById('input_canvas');

		context = canvas.getContext('2d');

		canvas.addEventListener('mousemove', ev_mousemove, false);
	    }

	    var started = false;
	    function ev_mousemove(ev)
	    {
		var x, y;

		
		if(ev.layerX || ev.layerX == 0)
		    { // Firefox ish
		    x = ev.layerX;
		    y = ev.layerY;
		} else if(ev.offsetX || ev.offsetX == 0)
		    { // Opera  ish
		    x = ev.offsetX;
		    y = ev.offsetY;
		}

		if (!started) {
		    context.beginPath();
		    context.moveTo(x, y);
		    started = true;
		} else {
		    context.lineTo(x, y);
		    context.stroke();
		}
	    }

	    draw();
	}, false);
 }
