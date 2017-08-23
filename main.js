

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


domString(cats);