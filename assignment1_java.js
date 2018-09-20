
function initialize()
{
	console.log("hi");
	
	var photos = document.getElementsByTagName("img");
	console.log(photos.length);
	var i; 
	
	for(i=0; i < photos.length; i++)
	{
		photos[i].addEventListener("click", largePhoto, false); //why does this hit 20 times
	}

}

function largePhoto(event){
		
		var newImage = document.createElement("img");
		newImage.src = event.target.src;
		newImage.style.height= "700px";
		newImage.style.width= "700px";
		
		var belowTable = document.getElementById("showLarge");
		console.log(belowTable.childNodes.length);
		belowTable.appendChild(newImage);
		belowTable.removeChild(belowTable.childNodes[0]);
		
		
	

}

	
	
	/*console.log("hi");
	var tool = document.getElementById("tool");
	tool.style.background = "black";
	
	var paragraph = document.getElementsByTagName("p");
	var i; 
	for(i=0; i < paragraph.length; i++)
	{
		paragraph[i].addEventListener("click", redParagraph, false);
	}*/