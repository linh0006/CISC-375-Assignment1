
function initialize()
{
	
	

}

/* Used template from URL: https://www.w3schools.com/howto/howto_js_lightbox.asp for a general understanding of coding a lightbox technique*/

var slideNumber = 1;

function initiateLightBox() {
  document.getElementById('lightBox').style.display = "block";

}


function closeLightBox() {
  document.getElementById('lightBox').style.display = "none";
}


function moveSlide(plusMinusSlide) {
  slideTransition(slideNumber = slideNumber + plusMinusSlide);
}


function currentSlide(getSlideNumber) {
  slideNumber = getSlideNumber;
  slideTransition(slideNumber);
  document.addEventListener("keydown", keyBoardInput,false);
}

function slideTransition(pictureNumber) {
  var i;
  var slides = document.getElementsByClassName("displayPicture"); 
  
  if (pictureNumber > slides.length) 
  {
	  slideNumber = 1
  }
  if (pictureNumber < 1) 
  {
	  slideNumber = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

	slides[slideNumber-1].style.display = "block";
 
}

function keyBoardInput(event){
	
		if(event.keyCode == 37) {
			moveSlide(-1);
		}
		else if(event.keyCode == 39) {
			moveSlide(1);
		}
		else if(event.keyCode == 27){
			closeLightBox();
		}
	
}
	
	
	