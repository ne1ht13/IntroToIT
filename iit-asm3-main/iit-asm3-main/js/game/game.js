var gameOver = false;

// Game Loop
const gameLoop = () => {
  // Render the bg screen whenever the game animation restart and update
  // update game level
  updateGameLevel();

  // Clear the screen
  ctx.clearRect(0, 0, cvs.width, cvs.height);

  // Render bg image
  ctx.drawImage(BG_IMG, 0, 0); // img already fit screen so set dx dy to 0

  // draw Features
  drawFeatures();

  //  draw Obj
  drawObj();

  // update Obj Position
  gameUpdateObjPosition();

  // Create game loop if the game is not over
  if (!gameOver) requestAnimationFrame(gameLoop);
  else {
    showGameOver();
  }
};

// Create function to update Features
const drawFeatures = () => {
  ShowGameStats(score, 55, 35, SCORE_IMG, 5, 5);
};


// Create function to draw Obj
const drawObj = () => {
  // draw Paddle
  Paddle.draw(PADDLE_IMG);

  // draw Ball
  Ball.draw(BALL_IMG);
};

// create gameUpdateObjPosition
const gameUpdateObjPosition = () => {
  // Update paddle position
  Paddle.updatePosition();

  // move Ball
  Ball.move();

  //Check ball Collison to update ball movement
  ballCollisonWall();

  ballCollisonPaddle();
};

// create function update Point
const updatePoint = () => {
  score++;
};

// update game level: 6 levels
const updateGameLevel = () => {
  // Level 1
  if (score >= 10 && score <= 20) {
    Ball.speed = 7;
  }

  // Level 2
  if (score > 20 && score <= 30) {

    Ball.speed = 9;
  }

  // Level 3
  if (score > 30 && score <= 40) {
    Ball.speed = 11;
  }

  // Level 4
  if (score > 40 && score <= 50) {
    Ball.speed = 13;
  }

  // Level 5
  if (score > 50 && score <= 60) {
    Ball.speed = 15;
  }

  // Level 6
  if (score > 60) {
    Ball.speed = 17;
  }
};

// create Function to show GameOver
const showGameOver = () => {
  // Show score
  Score.innerHTML = score;


  // Reload the game
  const playAgain = document.getElementById("gameover-playagain");
  playAgain.addEventListener('click',() => {
      playAgainSound = new Audio;
      playAgainSound.src = '../../sound/gameover.mp3';
      playAgainSound.play();
      playAgainSound.volume = 0.2;
      setTimeout( () => {
        location.reload();
      }
      ,1000);
    
  })

  // Display the game over block
  const displayGameOver = document.getElementById("gameover");
  displayGameOver.style.display = 'block';



}

gameLoop();
