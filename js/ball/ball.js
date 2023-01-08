const BALL_RADIUS = 30;
const BALL_SPEED = 5;

// Img for the Ball
const BALL_IMG = new Image();
BALL_IMG.src = "../../img/game/ball-christmast.jpeg";

class Circle {
  constructor(x, y, radius, speed = undefined, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    // dx dy for accerlaration of the ball
    this.dx = dx;
    this.dy = dy;
  }
  draw(img = undefined) {
    if (img) {
      // this is square obj
      ctx.drawImage(img, this.x, this.y, this.radius, this.radius);
    } else {
      // this is circle obj
      ctx.beginPath();
      //arc(x,y,radius,start angle,end angle) 0 degree to -> Math.Pi * 2 (360)
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      // file the circle inner side
      ctx.fillStyle = "#ffcd05";
      ctx.fill();
      // fill the circle border
      ctx.lineWidth = 5;
      ctx.strokeStyle = "#2e3548";
      ctx.stroke();
      ctx.closePath();
    }
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
}

const Ball = new Circle(
  cvs.width / 2,
  Paddle.y - BALL_RADIUS, // Paddle y is constant so we use it to fast calculate
  BALL_RADIUS,
  BALL_SPEED,
  BALL_SPEED * (Math.random() * 2 - 1), //random movement of Ball at the beginning
  -BALL_SPEED // to always go above at the beginning
);

// Ball movement when collide with Wall
const ballCollisonWall = () => {
  //   // 4 cases right , top, left and bottom

  //   // We change the sign of dx , dy to match the movement of the ball
  //   // right: x + y > screen width ;  left: x - radius < 0
  //   if (Ball.x + Ball.radius > cvs.width || Ball.x - Ball.radius < 0)
  //     Ball.dx = -Ball.dx;

  //   // top: y - radius < 0
  //   if (Ball.y - Ball.radius < 0) Ball.dy = -Ball.dy;

  //   // botoom: y + radius > screen height
  //   if (Ball.y + Ball.radius > cvs.height) resetBall();

  // For rectangular:
  // Right wall
  if (Ball.x + Ball.radius > cvs.width) {
    BALL_HIT_WALL_SOUND.play();
    updatePoint();
    Ball.x = cvs.width - Ball.radius;
    Ball.dx = -Ball.dx;
  }

  // Left wall
  if (Ball.x < 0) {
    BALL_HIT_WALL_SOUND.play();
    updatePoint();
    Ball.x = 0;
    Ball.dx = -Ball.dx;
  }
  // Top wall
  if (Ball.y < 0) {
    BALL_HIT_WALL_SOUND.play();
    updatePoint();
    Ball.dy = -Ball.dy;
  }

  // Bottom wall
  if (Ball.y + Ball.radius > cvs.height) {
    GAME_OVER_SOUND.play();
    gameOver = true;
  }
};

// Ball movement when collide with Paddle
const ballCollisonPaddle = () => {
  // The ball need to hit the Paddle Width or Paddle Height
  if (
    // Hit Paddle width --> Paddle.x  <= Ball.x  <= Paddle.x + Paddle.width
    Ball.x + Ball.radius >= Paddle.x &&
    Ball.x <= Paddle.x + Paddle.width &&
    // Hit Paddle height -->Ball.y + Ball.radius >= Paddle.y

    Ball.y + Ball.radius >= Paddle.y
  ) {
    // let collidePoint to be 0 and then divided by Paddle.width/2
    // to make collidePoint go between -1 to 1
    BALL_HIT_PADDLE_SOUND.play();
    // BALL_HIT_PADDLE_SOUND.volume = 0.1;

    let collidePoint = Ball.x + Ball.radius / 2 - (Paddle.x + Paddle.width / 2);
    collidePoint = collidePoint / (Paddle.width / 2);

    // MathPi/3 is 60 degree
    let angle = collidePoint * (Math.PI / 3);

    // Calculate the movement of the Ball
    Ball.dx = Ball.speed * Math.sin(angle);
    Ball.dy = -Ball.speed * Math.cos(angle); // Need to take negative to make right movement
  }
};

// // reset Ball
// const resetBall = () => {
//   Ball.x = cvs.width / 2;
//   Ball.y = Paddle.y - BALL_RADIUS;

//   // change dx randomly to make the ball move random from left or right or straight
//   Ball.dx = 5 * (Math.random() * 2 - 1); // random from -3 to 3
//   Ball.dy = -5;

//   point--;
//   Point.textContent = `Point : ${point}`;
// };
