import Sprite from "./Sprite";

export default class Bug {
    constructor(context, x, y, img, skinId, magnet) {
        this.position = {
            x,
            y,
        }

        this.width = 240;
        this.height = 240;

        this.context = context;

        this.spriteImg = img;

        this.velocity = {
            x: 3,
            y: 0,
        }

        this.skinId = skinId;

        this.path = 0;
        this.magnet = magnet
        this.magnet2 = this.magnet;

        console.log('баг создан')

        this.start();
    }

    start() {
        this.sprite = new Sprite(this.context, this.spriteImg, 8, 4, 240, 240, this.position.x, this.position.y, 240);
    }

    update() {

        if (this.path !== this.magnet && this.path > this.magnet) {
            this.path = this.path - 1;
            this.goLeft();
        } else {
            this.magnet = this.magnet2;
        }

        if (this.path !== this.magnet && this.path < this.magnet) {
            this.path = this.path + 1;
            this.goRight();
        } else {
            this.magnet = -this.magnet2;
        }

        this.sprite.update();
        this.sprite.updatePosition(this.position.x, this.position.y);
        
    }

    animate() {
        this.update();
    }

    getSprite() {
        return this.sprite.get();
    }

    beKilled() {
        
    }

    stop() {
        this.velocity.x = 0;
    }

    goLeft() {
        this.position.x -= this.velocity.x;
    }

    goRight() {
        this.position.x += this.velocity.x;
    }

    moveRight(v) {
        this.position.x = this.position.x + v;
    } 

    moveLeft(v) {
        this.position.x = this.position.x - v;
    } 

    rotate() {

    }
}