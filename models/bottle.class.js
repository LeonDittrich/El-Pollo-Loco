class Bottle extends MovableObject {

    height = 80;
    width = 80;
    offsetW = 50;
    offsetH = 140;
    offsetY = 75;
    offsetX = 25;




    constructor(x) {
        super().loadImage(this.mixingImg());
        this.x = x;
        this.x = x; + Math.random() * 300;
        this.y = 345;
    }

    mixingImg() {

        if ( Math.random() <= 0.5) {
            return 'img/6.botella/2.Botella_enterrada1.png';
        }else {
            return 'img/6.botella/2.Botella_enterrada2.png';
        }
    }

}