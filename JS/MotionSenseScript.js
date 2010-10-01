var mouse_path = new Array();

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


    for(x in mouse_path){
	mouse_path[x].x = mouse_path[x].x - x_diff;
	mouse_path[x].y =(-1 *  mouse_path[x].y) - y_diff;
        console.log("X = " + mouse_path[x].x + " Y = " + mouse_path[x].y);
    }


}