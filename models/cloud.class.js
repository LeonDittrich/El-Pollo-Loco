class Cloud extends MovableObject {
    y = 20;
    height = 250;
    width = 500;
    speed = 0.15;


    constructor(x) {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        this.x = x;
        this.x = x + Math.random() * 500;  // zufällige Zahl zwischen 200 und 700
        this.animate();
    }

    
    animate() {
        setInterval(() => {
            this.moveLeft();
            if(this.x < -1000) {
                this.x = 3320;
            }
        },1000 / 60);   
    }

    newClouds() {
        if(this.world.level.clouds == this.world.level.level_start_x) {
           this.world.level_start_x = 3320;
        }
    }
}