var pattern = new Array();

var answer = new Array(0,1,2,3,4,5,6,7,8);

var count = 0;

function addItem(n){
    pattern.push(n);
    addItemToList(n);
    count = count + 1;
    if(check()){
	return compare();
    }
}

function compare(){
    var status = true;
    console.log("in method");
    for(var i = 0; i < 9; i++)
	{
	    if(pattern[i]!=answer[i]){
		console.log("inside if statement");
		status = false;
		window.location = "http://www.espn.com/"
	    }
	}
    return status;
}

function check(){
    if(count == 9)
	return true;
    else
	return false;
}

function addItemToList(n){
    var x = document.getElementById('list_items');
    var e = document.createElement('li');
    e.innerHTML = n;
    x.appendChild(e);
}

