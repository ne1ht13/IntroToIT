// Game logic

// Initialize the game screen
const cvs = document.getElementById("gameScreen");

// call to initialize an 2d object from canvas that has properties
//  and methods to all draw functionality
const ctx = cvs.getContext("2d");

//  Set the screen border
cvs.style.border = "1px solid #0ff";

// Load Background img
const BG_IMG = new Image();
BG_IMG.src = "../../img/game/bg-christmas_800x800.jpg";
