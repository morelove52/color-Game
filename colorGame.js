//set all my variables
   var numSquares = 6;
   var colors = [];
   var pickedColor;
   var squares = document.querySelectorAll(".square");
   var colorDisplay = document.getElementById("colorDisplay");
   var messageDisplay = document.querySelector("#message");
   var h1 = document.querySelector("h1");
   var resetButton = document.querySelector("#reset");
   var modeButtons = document.querySelectorAll(".modeBtn");

init();

  function init(){
	setupModeBtn();
	setupSquares();
    reset();
   }

//modeBtn
  function setupModeBtn() {
	for (var i = 0; i < modeButtons.length; i++){
	 modeButtons[i].addEventListener("click", function(){
	   modeButtons[0].classList.remove("selected");
	   modeButtons[1].classList.remove("selected");
	   this.classList.add("selected");
	   this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
	   reset(); 
	 });
   }
}

//Reset btn
   resetButton.addEventListener("click", function(){
	   reset();
  })
   
//setup squares
  function setupSquares() {
	 for(var i = 0; i < squares.length; i++) {
	   //add click listener to squares
	   squares[i].addEventListener("click", function(){
		   //grab color of clicked color
		 var clickedColor = this.style.backgroundColor;
		   //compare color to picked color
		 if(clickedColor === pickedColor) {
			 messageDisplay.textContent = "Correct!";
			 resetButton.textContent = "Play Again?";
			 changeColor(clickedColor);
			 h1.style.backgroundColor = clickedColor;
		 } else {
			 this.style.backgroundColor = "#232323";
			 messageDisplay.textContent = "Try Again!";
		   }
	   });
     }
}

   
// function to deal with buttons  
  function reset() {
	  colors = generateRandomColors(numSquares);
	   //pick a new random color from array
	   pickedColor = pickColor();
	   //change colorDisplay to match picked color
	   colorDisplay.textContent = pickedColor;
	   resetButton.textContent = "New Colors";
	   resetMessagedisplay();
	   //change colors of squares
	   for(var i = 0; i < squares.length; i ++){
		   if(colors[i]){
			  squares[i].style.display = "block"; 
			  squares[i].style.backgroundColor = colors[i]; 
		   } else {
			   squares[i].style.display = "none";
		   }
		}
	   h1.style.backgroundColor = "steelblue";
   }

//function to change color
  function changeColor (color){
	//loop through the squares
	for(var i = 0; i < squares.length; i++)
		//change each color to match the correct one
		squares[i].style.backgroundColor = color;
}

//function to pick color randomly
  function pickColor() {
	var random = Math.floor(Math.random () * colors.length);
	return colors[random];
}

//function to generate colors and add them to array (6 or 3 colors/ squares)
  function generateRandomColors (num) {
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++)
		//get random color and push into array
		arr.push(randomColor())
	   //return that array
	   return arr;
}

//function to generate RGB colors randomly
  function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//function to reset "Correct" & "Try Again!" message
  function resetMessagedisplay() {
	messageDisplay.textContent = "";
}