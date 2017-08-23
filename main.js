

var mainContainerDiv = document.getElementById("kat-koral");


function domString(catCrap){
	var catString = "";
	for(var i = 0; i < catCrap.length; i++){
		catString += `<div class="cat">`;
		catString += `<div class="catName">${catCrap[i].name}</div>`;
		catString += `<div class="catColor">${catCrap[i].color}</div>`;
		catString += `<img src="${catCrap[i].url}" width="300px" height="169">`;
		catString += `</div>`;
	}
	writeToDom(catString);
}


function writeToDom(catString){
	mainContainerDiv.innerHTML += catString;
}


function executeThisCodeAfterFileLoads() {
	var data = JSON.parse(this.responseText);
	domString(data.cats);
}

function executeThisCodeAfterFileLoads2() {
	var data = JSON.parse(this.responseText);
	domString(data.dogs);
}

function executeThisCodeIfFileErrors() {
	console.log("Shit broke");
}

function executeThisCodeIfFileErrors2() {
	console.log("Shit broke");
}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "cats.json");
myRequest.send();


var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", executeThisCodeAfterFileLoads2);
myRequest2.addEventListener("error", executeThisCodeIfFileErrors2);
myRequest2.open("GET", "dogs.json");
myRequest2.send();











