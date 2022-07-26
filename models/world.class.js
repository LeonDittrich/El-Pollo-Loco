class World {

    //alle VAriablen von hier muss man mit this Öffnen bzw ansprechen
    character = new Character();
    level = level1;
    endboss = level1.enemies.find(e => e instanceof Endboss); //sucht mir den enemy raus der in der Instanz ein Endboss ist
    

    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    healthBar = new StatusBar(10, 0, 'health');
    coinBar = new StatusBar(10, 35, 'coin');
    bottleBar = new StatusBar(10, 75, 'bottle');
    bossBar = new StatusBar(510, 0, 'boss');
    throwableObjects = [];
    gameWon = false;
    gameLoose = false;
    direction = true;  

    

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');/* ist damit man in das Canvas was reinpacken kann, Bilder zb */
        this.canvas = canvas;   // mit this greifen wir auf das Canvas unterhalb des Arrays enemies zu, und sagen ihm er soll das canvis sein aus constructor
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.checkCollectCoin();
            this.checkCollectBottle();  
            this.checkCollisionBottleWithEnemy();  
            this.restart();
        }, 80);
        this.checkIDLE();
        
    }

    checkThrowObjects() {
        if(this.keyboard.SPACE && this.character.collectetBottles > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);  // wirft die Flasche
            this.character.collectetBottles -= 10;
            this.bottleBar.setPercentage(this.character.collectetBottles);
            console.log('Bottle', this.character.collectetBottles);
        }
    }


    checkCollisions() {
        this.level.enemies.forEach((enemy) => {  //hier checke ich jeden gegner aus level ab, ob er mit meinem character Kollidiert.
            if(this.character.isColliding(enemy) && this.character.isAboveGround() ) {
                if(enemy instanceof Endboss) {
                    enemy.hit(5);
                }else {
                    enemy.hit(100);
                }
               console.log('Chicken life', enemy.energy);

            }else if(this.character.isColliding(enemy)) {
                this.character.hit(5);
                this.healthBar.setPercentage(this.character.energy);
            }
        });
    }

    // Kollisionsabfrage Flasche mit Gegner
    checkCollisionBottleWithEnemy() { 
        this.throwableObjects.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {
                if(bottle.isColliding(enemy)) {
                    this.isEnemyChickenHit(enemy);
                    this.isEnemyEndbossHit(enemy);
                    this.bossBar.setPercentage(enemy.energy);
                }
            })
        })
    }


    isEnemyChickenHit(enemy) {
        if(enemy instanceof Chicken) {
            enemy.hit(100);
            if(enemy.energy < 0) {
                enemy.energy = 0;
            }    
            if(enemy.isDead()) {
                setTimeout(() => {
                    let position = this.level.enemies.indexOf(enemy);
                    this.level.enemies.splice(position, 1);
                }, 500);  //250
            }
            console.log('Enemy Life', enemy.energy);
        }
    }


    isEnemyEndbossHit(enemy) {
        if(enemy instanceof Endboss) {
            this.endboss.hit(20);
            if(this.endboss.energy < 0) {
                this.endboss.energy = 0;
            }    
            if(this.character.isDead()) {
                setTimeout(() => {
                    let position = this.level.enemies.indexOf(enemy);
                    this.level.enemies.splice(position, 1);
                }, 500);  //250
            } 
            console.log('Boss Life', this.endboss.energy);
        }
    }



    /* ---------------------------------Coin----------------------------------- */
    checkCollectCoin() {
        this.level.coins.forEach((coin, index) => {  // forEach ist wie eine For Schleife und  der Index das i. Der Index gibt an welchen Coin wir Löschen, an welcher stelle im Array
            if(this.character.isCollidingCoin(coin) ) {
                this.character.collectItem_sound.play();
                this.coinBar.setPercentage(this.character.collectetCoins += 10);
                this.level.coins.splice(index, 1);
            }
        });    
    }


     /* ---------------------------------Bottle----------------------------------- */
    checkCollectBottle() {
        this.level.bottles.forEach((bottle, index) => {  // forEach ist wie eine For Schleife und  der Index das i. Der Index gibt an welche Flasche wir Löschen, an welcher stelle im Array
            if(this.character.isCollidingBottle(bottle) ) {
                this.character.collectItem_sound.play();
                this.character.collectetBottles += 10;
                this.bottleBar.setPercentage(this.character.collectetBottles); 
                this.level.bottles.splice(index, 1);
            }
        });    
    }

    checkIDLE() {
        this.character.characterSleeping();
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addWorldGraphics();
        this.ctx.translate(-this.camera_x, 0);  //Back
        this.addStatusbars();
        this.ctx.translate(this.camera_x, 0);  //Forwards

        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addEndscreen();
        this.ctx.translate(-this.camera_x, 0);

        // draw wird immer wieder aufgerufen
        let self = this;   // erkennt in der Funktion this nicht mehr, deswegen die Variable self
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addStatusbars() {
        this.addToMap(this.healthBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        if(this.character.x > 2770) {
            this.addToMap(this.bossBar);
        }
    }

    addWorldGraphics() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addToMap(this.character);  // hier laden wir von dem Character das Bild, die x,y Koordinaten und die Höhe, breite 
        this.addObjectsToMap(this.level.clouds);
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        if(mo.otherDirection) {
           this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if(mo.otherDirection) {
           this.flipImageBack(mo);
        }    
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }


    /* ----------------------------------------------------Screen Settings---------------------------------------------------- */
    
    gameOverScreen() {
        let gameOverIMG = [new BackgroundObject('img/9.Intro _ Outro Image/_Game over_ screen/3.Game over.png', this.character.x - 100)];
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(gameOverIMG);
        this.keyboard = false;
        setTimeout (() => {
            location.reload();
        }, 2500);
    };

    gameWonScreen() {
        let gameWinnerIMG = [new BackgroundObject('img/9.Intro _ Outro Image/Winner_screen/winner.png', this.character.x - 100)];
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(gameWinnerIMG);
        this.keyboard.UP = false;
        this.keyboard.LEFT = false;
        this.keyboard.RIGHT = false;
        this.character.bg_sound.volume = 0;
        this.endboss.bossFight_sound.volume = 0;
    }

    restart() {
        if(this.keyboard.R == true) {
            location.reload();
        }
    }

    addEndscreen() {
        if(this.gameLoose == true) {
            this.gameOverScreen();
        }else if(this.gameWon == true) {
            this.gameWonScreen();
        }
    }


}