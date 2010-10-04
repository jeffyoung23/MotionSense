/*
Array holding objects of captured mouse coordinates
*/
var mouse_path = new Array();

/*
Level one array for current set of data
*/

var level_one = new Array(0,0,0,0); //cardinal directions

/*
Test level one arrays to compare to
*/

var test_array_1 = new Array();

test_array_1[0] = 0;
test_array_1[1] = 2;
test_array_1[2] = 0;
test_array_1[3] = 0;

var test_array_2 = new Array();

test_array_2[0] = 1;
test_array_2[1] = 0;
test_array_2[2] = 0;
test_array_2[3] = 1;

/*
Saves the drawn mouse path in the canvas as a .png
Then creates an element for the image and
adds it to the html
*/

function saveImage(){

    var canvas = document.getElementById("input_canvas");

    var context = canvas.getContext("2d");

    var img     = canvas.toDataURL("image/png");

    var x = document.getElementById('saved_images');
    var e = document.createElement('img');
    e.src = img;
    e.id = "save_image";
    e.style.width = "200px";
    e.style.height = "200px";
    x.appendChild(e);

    var string_item = "";
    store(string_item + localStorage.length, string_item + localStorage.length); 
}

/*
Stores items to local storage
*/
    function store(key, value){
		localStorage.setItem(key, value);
    }


/*
Clear current canvas
*/

function clear_canvas(){

    var canvas = document.getElementById("input_canvas");

    var context = canvas.getContext('2d');

    context.clearRect (0, 0,  400, 400);

}

/*
Print the current values in path
*/

function print_path(){
 
    for(x in mouse_path){
        console.log("X = " + mouse_path[x].x + " Y = " + mouse_path[x].y);
    }
}

/*
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

/*
Builds the level one array from the
current set of data points

The if comparisons look for pairs where either x or y is 0, or the last coordinate has a different
sign then the current coordinate. Both signal that the path has crossed an axis
*/

function compare(){
    //Fudge factor is used to avoid any small variations in mouse movement to begin path
    var fudge_factor = 0;
    for(x in mouse_path){
	if(fudge_factor > 30){
	if(mouse_path[x].x == 0 && mouse_path[x].y == 0){
	}
}

/*
Stores items to local storage
*/
    function store(key, value){
	if (typeof(localStorage) == ‘undefined’ ) {
	    alert(‘Your browser does not support HTML5 localStorage. Try upgrading.’);
	} else {
	    try {
		localStorage.setItem(key, value); //saves to the database, “key”, “value”
	    } catch (e) {
		if (e == QUOTA_EXCEEDED_ERR) {
		    alert(‘Quota exceeded!’); //data wasn’t successfully saved due to quota exceed so throw an error
		}
	    }
    }


/*
Clear current canvas
*/

function clear_canvas(){

    var canvas = document.getElementById("input_canvas");

    var context = canvas.getContext('2d');

    context.clearRect (0, 0,  400, 400);

}

/*
Print the current values in path
*/

function print_path(){
 
    for(x in mouse_path){
        console.log("X = " + mouse_path[x].x + " Y = " + mouse_path[x].y);
    }
}

/*
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

/*
Builds the level one array from the
current set of data points

The if comparisons look for pairs where either x or y is 0, or the last coordinate has a different
sign then the current coordinate. Both signal that the path has crossed an axis
*/

function compare(){
    //Fudge factor is used to avoid any small variations in mouse movement to begin path
    var fudge_factor = 0;
    for(x in mouse_path){
	if(fudge_factor > 30){
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
	fudge_factor = fudge_factor + 1;
    }
    //Call compare_level_one on the newly built level one array
    console.log(compare_level_one(level_one));
    console.log(level_one);
}



/*
Compares level_one array
to the two test arrays
*/

function compare_level_one(x){

    var one = true;
    var two = true;

    for(var i = 0; i < 4; i++){
	if(x[i] != test_array_1[i]){
	    one = false;
	} 
	if(x[i] != test_array_2[i]){
	    two = false;
	} 
    }

    if(one){
	return 1;
    }
    if(two){
	return 2;
    }

    return 0;

}