// Keep everything in anonymous function, called on window load.
if(window.addEventListener)
    {
    window.addEventListener('load', function()
			    {

	    var canvas;

	    var context;

	    var pointer;

	    function draw()
	    {
	       
		canvas = document.getElementById('input_canvas');
		
		context = canvas.getContext('2d');
		

		
		tool = new pointer();

		canvas.addEventListener('mousedown', get_ev_canvas, false);

		canvas.addEventListener('mousemove', get_ev_canvas, false);

		canvas.addEventListener('mouseup',   get_ev_canvas, false);

	    }

	  
	    function pointer() 
	    {

		var location = this;
		this.started = false;

		this.mousedown = function(ev)
		    {
		    context.beginPath();
		    context.moveTo(ev._x, ev._y);
		    tool.started = true;
		};

		
		this.mousemove = function(ev)
		    {
		    if(tool.started)
			{
			context.lineTo(ev._x, ev._y);
			context.stroke();
		    }
		};

		this.mouseup = function(ev)
		    {
		    if (tool.started)
			{
			tool.mousemove(ev);
			tool.started = false;
		    }
		};
	    }

	    function get_ev_canvas(ev)
	    {
		if(ev.layerX || ev.layerX == 0) 
		    { // gecko
		    ev._x = ev.layerX;
		    ev._y = ev.layerY;
		}
		else if(ev.offsetX || ev.offsetX == 0)
		    { // Opera
		    ev._x = ev.offsetX;
		    ev._y = ev.offsetY;
		}

		var func = tool[ev.type];
		if(func)
		    {
		    func(ev);
		}
	    }

	    draw();

	}, false); }
