class Player {
    constructor(x, y, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.width = PLAYER_PIC.width;
        this.height = PLAYER_PIC.height;
        this.draw = function() {
            if (playerPicLoaded) {
                canvasContext.drawImage(PLAYER_PIC, this.x, this.y);
            }
        };

        // this.checkGround = function() {
        //     if(this.y >=)
        // };

        this.move = function() {
            // this.checkGround();

            if (moveLeft && this.x + this.speedX > 0) {
                this.speedX = -3;
            } else if (moveRight && this.x + this.width < canvasWidth) {
                this.speedX = 3;
            } else {
                this.speedX = 0;
            }

            if (!onGround) {
                this.speedY = 10;
            } else if (onGround) {
                this.speedY = 0;
            }

            if (jump) {
                this.speedY = -10;
                this.speedY += gravity;
            }

            this.x += this.speedX;
            this.y += this.speedY;
        };
    }
}
