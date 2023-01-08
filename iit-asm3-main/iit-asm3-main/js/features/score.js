const SCORE_IMG = new Image();
SCORE_IMG.src = "../../img/game/score.png"

let score = 0;

let Score = document.getElementById('gameover-score');
Score.innerHTML = score;
// draw Score img and the text

const ShowGameStats = (text,textX,textY,img,imgX,imgY) => {
    ctx.fillStyle = "#"; // pick color later
    ctx.font = "25px Germania One";
    ctx.fillText(text,textX,textY);
    ctx.drawImage(img,imgX,imgY,40,40);
} 

