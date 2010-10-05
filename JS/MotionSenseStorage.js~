/*
All Motion Sense js code relating to local storage
*/


function clear_storage(){
    localStorage.clear();
}

function store(key, item){
    if(localStorage.length == 0){
        localStorage.setItem("count", "0");
    }
    var x = parseInt(localStorage.getItem("count")) + 1;
    localStorage.setItem("count","" + x);
    localStorage.setItem("" +localStorage.getItem("count"), item);
}

