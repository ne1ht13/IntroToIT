// Ball Hit Wall
const BALL_HIT_WALL_SOUND = new Audio();
BALL_HIT_WALL_SOUND.src = "../../sound/wall.mp3";
BALL_HIT_WALL_SOUND.volume = 0.2;
BALL_HIT_WALL_SOUND.muted = true;

// Ball hit Paddle
const BALL_HIT_PADDLE_SOUND = new Audio();
BALL_HIT_PADDLE_SOUND.src = "../../sound/paddle.mp3";
BALL_HIT_PADDLE_SOUND.volume = 0.1;
BALL_HIT_PADDLE_SOUND.muted = true;

// Game over
const GAME_OVER_SOUND = new Audio();
GAME_OVER_SOUND.src = "../../sound/gameover.mp3";
GAME_OVER_SOUND.volume = 0.2;


// Sound management
const soundManagement = document.getElementById("sound-img");
soundManagement.addEventListener("click", () => {
  if (soundManagement.getAttribute("src") == "../../img/game/sound-off.png") {
    // change icon of sound img
    soundManagement.setAttribute("src", "../../img/game/sound-on.png");

    // unmute the sound
    BALL_HIT_WALL_SOUND.muted = false;
    BALL_HIT_PADDLE_SOUND.muted = false;
  } else {
    soundManagement.setAttribute("src", "../../img/game/sound-off.png");
    BALL_HIT_WALL_SOUND.muted = true;
    BALL_HIT_PADDLE_SOUND.muted = true;
  }
});
