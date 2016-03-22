// section click event output to div
var outputEl = document.getElementById("output-target");
var articleEl = document.getElementsByClassName("article-section");

function handleSectionClick(MouseEvent) {
  var elementText = MouseEvent.target.innerHTML;
   outputEl.innerHTML = "You clicked on the " + elementText + " section";
}

for (var i=0; i < articleEl.length; i++) {
articleEl.item(i).addEventListener("click", handleSectionClick);
} 

// change h1 in title
var titleChange = document.getElementById("page-title");

function mouseover (mouseover) {
	titleChange.innerHTML = "You moved your mouse over me";
}

function mouseout (mouseout) {
	titleChange.innerHTML = "You left me!!"
}

titleChange.addEventListener("mouseover", mouseover);
titleChange.addEventListener("mouseout", mouseout);

// mirror input box text to div
var inputBoxText = document.getElementById("keypress-input");
var dupedText = document.getElementById("output-target");

function mirrored (typed){
	var mirrorText = typed.target.innerHTML;
	dupedText.innerHTML = inputBoxText.value;
}

inputBoxText.addEventListener("keypress", mirrored);


// add color to element
var makeMeBlue = document.getElementById("guinea-pig");
var blueButton = document.getElementById("add-color");

function blue (click){
	makeMeBlue.style.color = "blue";
}

blueButton.addEventListener("click", blue);


// hulkify

var hulkButton = document.getElementById("make-large");

function hulkSmash () {
	document.getElementById("guinea-pig").style.fontSize = "larger";
}

hulkButton.addEventListener("click", hulkSmash);


// add border

var captureButton = document.getElementById("add-border");

function addBorder () {
	document.getElementById("guinea-pig").style.border = "1px solid black";
}

captureButton.addEventListener("click", addBorder);

// first bold, last bold italic







// round border

var roundButton = document.getElementById("add-rounding");

function roundIt () {
	document.getElementById("guinea-pig").style.borderRadius = "0.5em";
}

roundButton.addEventListener("click", roundIt);




