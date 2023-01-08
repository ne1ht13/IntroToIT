// Initialize paddle properties
const PADDLE_WIDTH = 120;
const PADDLE_HEIGHT = 40;
const PADDLE_MARGIN_BOTTOM = 50; // difference from paddle to bottom of game screen
const PADDLE_SPEED = 20;

// Initialize right and left arrow to check user control over paddle
var rightArrow = false;
var leftArrow = false;

// Img for the paddle
const PADDLE_IMG = new Image();
PADDLE_IMG.src = "../../img/game/christmas-paddle.jpeg";

// Initialize rectangular obj
class Rectangular {
  // shape x position, y position on xy-axis
  // shape width, height and speed
  constructor(x, y, width, height, speed = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
  }

  //--------- draw the shape
  draw(img = undefined) {
    // if the shape has img -> draw with img
    if (img) {
      ctx.drawImage(img, this.x, this.y, this.width, this.height);
    }
    // else fill default style rectangular
    else {
      // Fill color inside rectangular
      ctx.fillStyle = "#2e3548";
      ctx.fillRect(this.x, this.y, this.width, this.height);

      // Fill the border of the rectangular
      ctx.lineWidth = 5; // make it thicker
      ctx.strokeStyle = "#ffcd05"; //color
      ctx.strokeRect(this.x, this.y, this.width, this.height); //make border around shape
    }
  }

  //-------update the position of the rectangular
  updatePosition() {
    // whenever rightArrow true -> move the rectangular to the right
    // handle case when rectangular reach the right screen
    if (rightArrow && this.x + this.width < cvs.width) this.x += this.speed;


    // whenever leftArrow true -> move the rectangular to the left
    // handle case when rectangular reach the left screen
    if (leftArrow && this.x > 0) this.x -= this.speed;
  
  }
}

// Initialize Paddle obj
const Paddle = new Rectangular(
  // Have to +20px for the collison -> still dont know why?
  cvs.width / 2 - PADDLE_WIDTH / 2 + 20,
  cvs.height - PADDLE_HEIGHT - PADDLE_MARGIN_BOTTOM,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_SPEED
);

//-------- Control the paddle

// Key down when user push on the arrow on their keyboard
document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowRight":
      rightArrow = true;
      break;
    case "ArrowLeft":
      leftArrow = true;
      break;
  }
});

// Key up when user release the arrow on their keyboard
document.addEventListener("keyup", (event) => {
  switch (event.code) {
    case "ArrowRight":
      rightArrow = false;
      break;
    case "ArrowLeft":
      leftArrow = false;
      break;
  }
});
