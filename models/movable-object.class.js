class MovableObject extends DrawableObject {
    speed = 8;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    lastHit = 0;
    collectetCoins = 0;
    collectetBottles = 0;

    
    



    applyGravity() {
        setInterval(() => {   
            if(this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;

                if(!this.isAboveGround()) {
                    this.y = 145;
                }
            }
           
        }, 1000 / 25);   
    }

    isAboveGround() {
        if(this instanceof ThrowableObject) {  //alle ThrowableObjects werden immer fallen, sie haben keinen Boden
            return true;
        }else {
            return this.y < 145;
        }
    }
    

    isColliding(mo) {
        return this.x + this.width - this.offsetW > mo.x + mo.offsetW &&
        this.y + this.offsetY + this.height -this.offsetH > mo.y - mo.offsetH &&
        this.x < mo.x &&
        this.y - this.offsetY < mo.y + mo.offsetY;
    }

   
    hit(energy) {
        this.energy -= energy;
        if(this.energy < 0) {
            this.energy = 0;
        }else {
            this.lastHit = new Date().getTime();  // fragt die Zeit ab wo wir zum ersten mal getroffen wurden.
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;  // hier nehmen wir die Differenz zwischen dem last hit(wo wir zuerst getroffen wurden) und der Zeit jetzt in ms
        timePassed = timePassed / 1000;  // umwandlung von ms in sec
        return timePassed < 1;  // wenn timePassed kleiner ist als 1 sec heißt das, das wir getroffen worden. Gibt dadurch true raus und die Funktion Hurt wird oben ausgeführt weil sie ja dann true ist
    }

    
    isDead(energy) {
        return this.energy == 0;  //wenn der Energy Wert 0 ist, wird dann hier 0 ausgegeben
    }

   
    playAnimation(images) {
        let i = this.currentImage % images.length;  // vereinfacht gesagt steht hier let i = 0 % 5(die längte von Array) die % bedeuten Modulo(Mathematischer Rest)
        // i ist 0, wird nach dem 2ten durchlauf 1->2->3... nach dem 6ten durchlauf wo i = 5 ist würde die Zeile so aussehen i = 5 % 5 bedeutet 5/5 => 1 % 0 Modulo hebt nur den rest auf was bei 5/5 =0 ist und somit wird i im nächsten Durchlauf 0
        // Weiteres bsp i= 4 % 5(ist array länge) bedeutet 4/5 =0 %(rest) 4. Sobald der Wert 1 rauskommt beim Teilen geht es Quasi wieder von vorn los. Also bei 5/5
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }
            
    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 25;
    }

    /* ----------------------------------------------------Collecting Items---------------------------------------------------- */

    isCollidingCoin(coinInWorld) {
        return this.x + this.width > coinInWorld.x + coinInWorld.offsetW &&
            this.y + this.height - this.offsetH > coinInWorld.y - coinInWorld.offsetY &&
            this.x < coinInWorld.x &&
            this.y + this.offsetY < coinInWorld.y + coinInWorld.height - coinInWorld.offsetH;
        
    }

   
    isCollidingBottle(bottleInWorld) {
        return this.x + this.width - this.offsetW > bottleInWorld.x &&
            this.y + this.height > bottleInWorld.y &&
            this.x < bottleInWorld.x + bottleInWorld.offsetX &&
            this.y < bottleInWorld.y + bottleInWorld.height;
        
    }

}