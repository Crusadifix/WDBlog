var twitAttributionInput = document.getElementById("twit-attribution-input");
var twitContainer = document.getElementsByClassName("twit-container")[0];
var twitTextInput = document.getElementById("twit-text-input");

var twitDatabase = [];
var databaseSize = 0;

//Search Event Function
function searchTwits(event) {
	var searchTerms = searchInput.value.toLowerCase();
	var j = twitContainer.childElementCount;
	
	for(var i = 0; i < j; i++)
		twitContainer.childNodes[0].remove();
	for(var i = 0; i < databaseSize; i++)
		if(twitDatabase[i].textContent.toLowerCase().search(searchTerms) != -1)
			twitContainer.appendChild(twitDatabase[i]);
}

//Refresh Twit Display Function
function refreshTwitDisplay() {
	var searchTerms = searchInput.value.toLowerCase();
	var j = twitContainer.childElementCount + 1;
	
	for(var i = 0; i < j; i++)
		twitContainer.childNodes[0].remove();
	for(var i = 0; i < databaseSize; i++)
		if(twitDatabase[i].textContent.toLowerCase().search(searchTerms) != -1)
			twitContainer.appendChild(twitDatabase[i]);
}

//Search Bar Interaction Event
searchInput.addEventListener("input", searchTwits);

//Creating Database and removing phantom Children
for(var i = 0; i < 9; i++){
	twitContainer.childNodes[i].remove();
	if(i < 8)
	{
		twitDatabase[i] = twitContainer.childNodes[i];
		databaseSize++;
	}
}
