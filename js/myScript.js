// JavaScript Document

var picList = new Array (7);
var locationData = new Array(7);
var captionData = new Array(7)


var bButtonListener;
var fButtonListener;

locationData[0] = "New York, New York, New York";
locationData[1] = "Grand ol' Texas";
locationData[2] = "Sistine Chapel, Antarctica";
locationData[3] = "200 yards South-West of Choate House";
locationData[4] = "Newark, New Jersey";
locationData[5] = "Heaven, Almighty";
locationData[6] = "Atlantis, Atlatic Ocean";

captionData[0] = "Non-elective hat wearing";
captionData[1] = "The Zodiac Killer";
captionData[2] = "Michelangelo's finest";
captionData[3] = "OG Squaaaa";
captionData[4] = "eatin'";
captionData[5] = "Deer God!";
captionData[6] = "Fun With Spaghetti";

picList[0] = "images/p0.jpg";
picList[1] = "images/p1.jpg";
picList[2] = "images/p2.jpg";
picList[3] = "images/p3.jpg";
picList[4] = "images/p4.jpg";
picList[5] = "images/p5.jpg";
picList[6] = "images/p6.jpg";

var whatPicture;
var whatLocation;
var whatCaption;

window.onload = function() {

var whatPicture = 0;
var whatLocation = 0;
var whatCaption = 0;
	
	document.getElementById("pictureView").src = picList[whatPicture];
	document.getElementById("location").src = locationData[whatLocation];
	document.getElementById("title").src = captionData[whatCaption];
	
	fButtonListener = document.getElementById("F")
	bButtonListener = document.getElementById("B")
	
	fButtonListener.addEventListener('click', function(event) {
		whatPicture++
		whatCaption++
		whatLocation++
		if(whatPicture >= picList.length - 1) {
		whatPicture = 0;
		whatCaption = 0;
		whatLocation = 0;
	}
		document.getElementById("pictureView").src = picList[whatPicture];
	document.getElementById("location").innerHTML= locationData[whatLocation];
	document.getElementById("title").innerHTML = captionData[whatCaption];
	});
	
	bButtonListener.addEventListener('click', function(event) {
		whatPicture--
		whatCaption--
		whatLocation--
	if(whatPicture < 0) {
		whatPicture = piclist.length - 1;
		whatCaption = piclist.length - 1;
		whatLocation = piclist.length - 1;
	}
	document.getElementById("pictureView").src = picList[whatPicture];
	document.getElementById("location").innerHTML = locationData[whatLocation];
	document.getElementById("title").innerHTML = captionData[whatCaption];
	});

}

