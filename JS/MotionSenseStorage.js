/*
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
    localStorage.setItem("" +localStorage.getItem("count") + "a", array);
    localStorage.setItem("" +localStorage.getItem("count") + "w", web);
    localStorage.setItem("" +localStorage.getItem("count") + "n", name);
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
