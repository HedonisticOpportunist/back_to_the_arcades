let player = { x: 350, y: 350 };
let fireball = { x: 190, y: 100, speed: 5 };

let gameOver = false;
let loadedCatImage;
let loadedFireballImage;

function preload() {
  loadedCatImage = loadImage("../resources/sprite.png");
  loadedFireballImage = loadImage("../resources/fireball.png");
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  if (gameOver) {
    background(0);
    textAlign(CENTER, CENTER);
    textSize(100);

    // Glow layers
    fill(255, 0, 120, 80);
    text("GAME OVER", width / 2 + 3, height / 2 + 3);
    fill(255, 0, 120, 150);
    text("GAME OVER", width / 2 + 1, height / 2 + 1);

    // Main text
    fill(255, 0, 120);
    text("GAME OVER", width / 2, height / 2);
    return;
  }

  //Gradient background.
  for (let i = 0; i < height; i++) {
    stroke(0, i * 0.4, 80);
    line(0, i, width, i);
  }

  // Calculate the distance between the player and the fireball.
  let dx = player.x - fireball.x;
  let dy = player.y - fireball.y;
  let distance = sqrt(dx * dx + dy * dy);

  // Move the fireball towards the player if the distance is larger than zero.
  if (distance > 1) {
    fireball.x += (dx / distance) * fireball.speed;
    fireball.y += (dy / distance) * fireball.speed;
  }

  let hitDistance = 40;

  if (distance < hitDistance) {
    gameOver = true;
  }

  // Draw the player.
  image(loadedCatImage, player.x, player.y, 80, 80);

  // Draw the fireball.
  image(loadedFireballImage, fireball.x, fireball.y, 50, 50);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) player.x -= 50;
  if (keyCode === RIGHT_ARROW) player.x += 50;
  if (keyCode === UP_ARROW) player.y -= 50;
  if (keyCode === DOWN_ARROW) player.y += 50;
}
