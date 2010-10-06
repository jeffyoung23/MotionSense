/**
All Motion Sense js code relating to local storage
*/


//Clear the local storage
function clear_storage(){
    localStorage.clear();
}


//Store an item
function store(array, web, name){
    if(localStorage.length == 0){
        localStorage.setItem("count", "0");
    }
    var x = parseInt(localStorage.getItem("count")) + 1;
    localStorage.setItem("count","" + x);
    
    //the key of each element is the gestures id, or number, and
    //an identifier to identify what info the value is
    localStorage.setItem("" +localStorage.getItem("count") + ",a", array);
    localStorage.setItem("" +localStorage.getItem("count") + ",w", web);
    localStorage.setItem("" +localStorage.getItem("count") + ",n", name);
}

//return a level one array
function getLevelOne(key){

var item = localStorage.getItem(key);

console.log(item);

console.log(item.split(",").join(", "));

return item.split(",");
}

//print a value in a array
function test_array(level_one, x){
	console.log(level_one[x]);
   
}

function queryGesture(){
    var key_num = 101;
    normalize_path();
    build_level_one();
    var status = true;
    var saved_gestures = [];
    var num_db = localStorage.length;

    for(var i = 0; i < num_db-1; i++){
	
	var key_x = localStorage.key(i);
	
	console.log("first for");

	var key_array = key_x.split(",");
	
	if(key_array[1] == 'a'){
	    console.log("first if");
	    var item_x = localStorage.getItem(key_x);
	    var item_array = key_x.split(",");
		for(var j = 0; j < 4; j++){
		    console.log("second for");		   
		    if(item_array[j] != level_one[j]){
			console.log("second if");
			status = false;
		    }
		}
		
	    if(status){
		    console.log("final if");
		    key_num =  key_x;
		}
	    }
	status = true;    
}

    return key_num;
}