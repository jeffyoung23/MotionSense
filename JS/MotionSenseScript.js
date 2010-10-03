var mouse_path = new Array();

var level_one = new Array(0,0,0,0); //cardinal directions

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
}

function clear_canvas(){

    var canvas = document.getElementById("input_canvas");

    var context = canvas.getContext('2d');

    context.clearRect (0, 0,  400, 400);

}

function print_path(){
 
    for(x in mouse_path){
        console.log("X = " + mouse_path[x].x + " Y = " + mouse_path[x].y);
    }
}

function normalize_path(){

    var x_diff = mouse_path[0].x;
    var y_diff = -1 * mouse_path[0].y;

    for( x in mouse_path){
	mouse_path[x].x = (mouse_path[x].x) - x_diff;
	mouse_path[x].y = (-1 * mouse_path[x].y) - y_diff;
	console.log("X = " + mouse_path[x].x + " Y = " + mouse_path[x].y);
    }


}

function compare(){


    for( x in mouse_path){
	if(mouse_path[x].x == 0 && mouse_path[x].y > 0){ //up y-axis
	    level_one[0] = level_one[0] + 1;
	}    
	if(mouse_path[x].x > 0 && mouse_path[x].y == 0){ // out x-axis to right
	    level_one[1] = level_one[1] + 1;
	}    

	if(mouse_path[x].x == 0 && mouse_path[x].y < 0){ // down y-axis
	    level_one[2] = level_one[2] + 1;
	}    

	if(mouse_path[x].x < 0 && mouse_path[x].y == 0){ //out x-axis to left
	    level_one[3] = level_one[3] + 1;
	}    
    }
    console.log(compare_level_one(level_one));
}





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