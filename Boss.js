class Boss extends Opponent {
  /**
    *@param game {Game}
    */
  constructor(game){
    const height = OPPONENT_HEIGHT * game.width / 100,
      width = OPPONENT_WIDTH * game.width / 100,
      x = getRandomNumber(game.width / 2),
      y = 0,

      speed = BOSS_SPEED,
      myImage = BOSS_PICTURE,
      myImageDead = BOSS_PICTURE_DEAD;

    super(game, width, height, x, y, speed, myImage, myImageDead);
    this.myImage = BOSS_PICTURE;
    this.image.src = this.myImage;
    this.myImageDead = BOSS_PICTURE_DEAD;
    this.speed = BOSS_SPEED;

    this.direction = "L";
    setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500);
      
  }
  
}

collide() { //Matar al oponente
  if (!this.dead) {
    game.score++;
    setTimeout(() => {
      this.game.removeBoss();
      
    }, 2000);
    super.collide();

  }    
  }
  shoot(){
    if (!this.dead && !this.game.ended) {
      if (!this.game.paused) {
        this.game.shoot(this);
      }
      setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500))
    }
  }
  update() {
    if (!this.dead && !this.game.ended) {
      this.y += this.speed;
      if (this.y > this.game.height) {
        this.y = 0;
      }
      if (this.direction === "R") { // Hacia la derecha
        if (this.x < this.game.width - this.width - this.speed) {
          this.x += this.speed;
        } else {
          this.horizontalMov = 0;
        }
      } else if (this.x > this.speed) {
        this.x -= this.speed;
      } else {
        this.horizontalMov = 0;
      }
      this.horizontalMov -= this.speed;
      if (this.horizontalMov < this.speed) {
        this.horizontalMov = getRandomNumber(this.game.width / 2);
        this.direction = this.direction === "R" ? "L" : "R"; // Cambia de sentido
      }
    }
  }
}