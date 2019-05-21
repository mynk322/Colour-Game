var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var pickedColor = pickColor(6);
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numb=6;
easyBtn.addEventListener("click",function(){
	numb=3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(3);
	h1.style.backgroundColor = "steelblue";
	h1.style.color = "white";
	pickedColor = pickColor(3);
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
		squares[i].style.backgroundColor = colors[i];
	}
	else{
		squares[i].style.backgroundColor = "#232323";
	}
}
		messageDisplay.textContent = "";
});
hardBtn.addEventListener("click",function(){ numb=6;
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	h1.style.backgroundColor = "steelblue";
	h1.style.color = "white";
	numb=6;
	colors = generateRandomColors(6);
	pickedColor = pickColor(6);
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < 6; i++) {
		squares[i].style.display = "bock";
		squares[i].style.backgroundColor = colors[i];
	}
		messageDisplay.textContent = "";

});


reset.addEventListener("click",function(){
	colors = generateRandomColors(numb);
	pickedColor = pickColor(numb);
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	h1.style.color = "white";

	for (var i = 0; i < numb; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
		messageDisplay.textContent = "";

});


colorDisplay.textContent = pickedColor;

for (var i = 0; i < numb; i++) {
	squares[i].style.background= colors[i%numb];

	squares[i].addEventListener("click", function(){
	var clickedColor = this.style.backgroundColor;
	console.log(clickedColor,pickedColor);
	if(clickedColor === pickedColor)
	{
		messageDisplay.textContent = "Correct! ";
		changeColors(clickedColor);
		reset.textContent = "Play Again?";
	}
	else
	{
		messageDisplay.textContent = "Try Again!";
		this.style.backgroundColor="#232323";
	}
});
}
function changeColors(color){
	for (var j = 0; j < numb; j++) {
		squares[j].style.backgroundColor = color;
	}
	h1.style.backgroundColor = color;
	h1.style.color = "black";
}
function pickColor(num){
	var random= Math.floor(Math.random()*num);
	return colors[random];
	}
function generateRandomColors(num){
var arr = [];
for (var i = 0; i < num; i++) {
	arr.push(randomColor());
}
return arr;
}
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+ r +", "+g+", "+b+")";
}