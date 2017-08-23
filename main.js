var cats = [
	{name: "Fluffy", color: "Green", url: "https://i.ytimg.com/vi/-OJMIqVrON0/maxresdefault.jpg"},
	{name: "Balls", color: "Gray", url: "https://vignette3.wikia.nocookie.net/animal-jam-clans-1/images/3/34/Good-names-male-gray-cat_c973a4d20153d374_i2Zi0RewT8e0NIZzcAoj1g.jpg/revision/latest?cb=20170127000422"},
	{name: "Titty-Caca", color: "Hairless", url: "https://featuredcreature.com/wp-content/uploads/2011/12/DSC_0156.jpg"},
];

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