/**
Array holding objects of captured mouse coordinates
*/
var mouse_path = [];
/**
Level one array for current set of data
*/

var level_one = [0,0,0,0]; //cardinal directions

localStorage.clear();
/**
Test level one arrays to compare to
*/

var test_array_1 = [0,2,0,0];

var test_array_2 = [1,0,0,1];

/**
Saves the drawn mouse path in the canvas as a .png
Then creates an element for the image and
adds it to the html
*/

function capture_Gesture(){

    var canvas = document.getElementById("input_canvas");

    var context = canvas.getContext("2d");

    var img     = canvas.toDataURL("image/png");

    var x = document.getElementById('saved_images');
   
     var web = document.getElementById("event_website").value;
    var name  = document.getElementById("event_name").value;
    

 var image = document.createElement('img');
 var wrapper = document.createElement('div');
  var caption = document.createElement('div');
  
  wrapper.id = "image_wrapper";
  image.id = "save_image";
  caption.id = "caption_image";

  caption.innerHTML = name + " - " + web;
  
    image.src = img;
    image.id = "save_image";

    wrapper.appendChild(image);
    wrapper.appendChild(caption);

    x.appendChild(wrapper);

    normalize_path();
    build_level_one();

      
    store(string_Array(),web, name); 
}

/**
Clear current canvas
*/

function clear_canvas(){

    var canvas = document.getElementById("input_canvas");

    var context = canvas.getContext('2d');

    context.clearRect (0, 0,  400, 400);

   
    level_one[0] = 0;
    level_one[1] = 0;
    level_one[2] = 0;
    level_one[3] = 0;
 
 mouse_path = [];
}

/**
Print the current values in path
*/

function print_path(){
 
    for(x in mouse_path){
        console.log("X = " + mouse_path[x].x + " Y = " + mouse_path[x].y);
    }
}

/**
Normalizes path so that the first data point
is at (0,0) and everything else is oriented 
around that
*/

function normalize_path(){

    var x_diff = mouse_path[0].x;
    var y_diff = -1 * mouse_path[0].y;

    for( x in mouse_path){
	mouse_path[x].x = (mouse_path[x].x) - x_diff;
	mouse_path[x].y = (-1 * mouse_path[x].y) - y_diff;
    }


}

/**
Builds the level one array from the
current set of data points

The if comparisons look for pairs where either x or y is 0, or the last coordinate has a different
sign then the current coordinate. Both signal that the path has crossed an axis
*/

function build_level_one(){
    var fudge = 0;
    for(x in mouse_path){
	if(fudge > 5){
	if(mouse_path[x].x == 0 && mouse_path[x].y == 0){
	}
	else if(((mouse_path[x-1].x < 0 && mouse_path[x].x >= 0)||(mouse_path[x-1].x > 0 && mouse_path[x].x <= 0)) && mouse_path[x].y > 0)
	    {
		level_one[0] = level_one[0] + 1;
	}
      else if(((mouse_path[x-1].y < 0 && mouse_path[x].y >= 0)||(mouse_path[x-1].y > 0 && mouse_path[x].y <= 0)) && mouse_path[x].x > 0)
	  {
	      level_one[1] = level_one[1] + 1;
	}
       else if(((mouse_path[x-1].x < 0 && mouse_path[x].x >= 0)||(mouse_path[x-1].x > 0 && mouse_path[x].x <= 0)) && mouse_path[x].y < 0)
	   {
	       level_one[2] = level_one[2] + 1;
	}
	else if(((mouse_path[x-1].y < 0 && mouse_path[x].y >= 0)||(mouse_path[x-1].y > 0 && mouse_path[x].y <= 0)) && mouse_path[x].x < 0)
	    {
		level_one[3] = level_one[3] + 1;
	}
	}
	fudge = fudge + 1;
    }
    //Call compare_level_one on the newly built level one array
    //   console.log(compare_level_one(level_one));
    // console.log(level_one);
}



/**
Compares level_one array
to the two test arrays
*/

function compare_level_one(key){
 
    var com_array = getLevelOne(key);

    for(var i = 0; i < 4; i++){
	if(level_one[i] != com_array[i]){
	   
	    return false;
	} 
    }
    return true;
}

function string_Array(){
   
    return "" + level_one[0] + "," + level_one[1] + "," + level_one[2] + "," + level_one[3];
}