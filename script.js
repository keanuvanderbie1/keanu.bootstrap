const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "blue";
  context.fillRect(playerX, playerY, playerWidth, playerHeight);

  context.fillStyle = "red";
  for (let i = 0; i < enemies.length; i++) {
    context.fillRect(enemies[i].x, enemies[i].y, enemyWidth, enemyHeight);
  }

  context.fillStyle = "black";
  for (let i = 0; i < bullets.length; i++) {
    context.fillRect(bullets[i].x, bullets[i].y, bulletWidth, bulletHeight);
  }
}

function gameLoop() {
  draw();

  requestAnimationFrame(gameLoop);
}


gameLoop();
