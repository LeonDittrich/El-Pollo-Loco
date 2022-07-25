class Coin extends MovableObject {

    height = 120;
    width = 120;
    offsetW = 80;
    offsetH = 80;
    offsetY = 40;
    offsetX = 40;


    IMAGES_COINS = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ];


    constructor(x) {
        super().loadImage('img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGES_COINS);
        this.x = x;
        this.x = x + Math.random() * 500;
        this.y = 70 + Math.random() * 240;

        this.animateCoins();
    }

    animateCoins() {
        setInterval(() => {   
            this.playAnimation(this.IMAGES_COINS);  
        }, 400);
    }

   

}