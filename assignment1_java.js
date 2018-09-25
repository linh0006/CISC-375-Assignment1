
function initialize()
{
	
	var photos = document.getElementsByTagName("img");

	var i; 
	
	for(i=0; i < photos.length; i++)
	{
		photos[i].addEventListener("click", largePhoto, false); 
	}

}

function largePhoto(event){
		
		var newImage = document.createElement("img");
		newImage.src = event.target.src;
		newImage.style.height= "100%";
		newImage.style.width= "100%";
		newImage.style.marginLeft = "auto";
		newImage.style.marginRight = "auto";
		
		var belowTable = document.getElementById("showLarge");
		console.log(belowTable.childNodes.length);
		belowTable.appendChild(newImage);
		belowTable.removeChild(belowTable.childNodes[0]);
		
		
	

}

	
	
	