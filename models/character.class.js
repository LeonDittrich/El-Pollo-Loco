class Character extends MovableObject {

    width = 150;
    height = 280;
    y = 55;
    speed = 10;
    offsetW = 40;   
    offsetH = 115;
    offsetY = 110;
    lastIdle = new Date().getTime();
    idle = false;
    longIdle = false;
    idleCounter = 0;
    energy = 100;
    


    
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png'
    ];

    IMAGES_DEAD = [
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png'
    ];

    IMAGES_HURT = [
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png'
    ];

    IMAGES_IDLE = [
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-2.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-3.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-4.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-5.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-6.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-7.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-8.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-9.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-10.png'
    ];

    IMAGES_LONG_IDLE = [
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-11.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-12.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-13.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-14.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-15.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-16.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-17.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-18.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-19.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-20.png'
    ];

    world;

    /* -----------------------Sounds----------------------- */
    walking_sound = new Audio('audio/walk.mp3');
    hit_sound = new Audio('audio/ayayay.mp3');
    jump_sound = new Audio('audio/jump.mp3');
    die_sound = new Audio('audio/death.mp3');
    gameOver_sound = new Audio('audio/gameOver.mp3');
    bg_sound = new Audio('audio/bg Musik.mp3');
    snark_sound = new Audio('audio/snarchen.mp3');
    yawning_sound = new Audio('audio/gähnen.mp3');
    collectItem_sound = new Audio('audio/coin.mp3');
    
  
    


    // sobald irgendwo Character aufgerufen wird, wird constructor und das was in den Klammern steht zuerst ausgeführt!
    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.applyGravity();
        this.animate();
        this.energy = 100;
    }

    animateMovement() {
        this.walking_sound.pause();
        this.bg_sound.volume = 0.2;
        this.bg_sound.play();
        if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {  //Mit this.world.level.level_end_x greifen wir auf die Variable zu die wir in level.class definiert haben und begrenzen das Level auf der Rechten Seite
            this.keyboardRightSetting();
        }

        if(this.world.keyboard.LEFT && this.x > this.world.level.level_start_x ) { //hier legen wir level begrenzungen nach Links fest, damit man nicht aus der Welt laufen kann. 
            this.keyboardLeftSetting();
        }

        if(this.world.keyboard.UP && !this.isAboveGround()) {
            this.keyboardUpSetting();
        }

        if(this.isDead()) {
           this.isDeadSetting(); 
        }

        if(this.world.keyboard.M) {
            this.muteMusic();
        }
        
        this.world.camera_x = -this.x + 100;
    }


    animateImages() {
        if(this.isDead()) {
           this.isDeadSettings();

        }else if (this.isHurt()) {
           this.isHurtSettings();

        }else if (this.isAboveGround()) {
          this.isAboveGroundSettings();
            
        }else if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {   // Die || bedeuten ein Logisches oder, entweder hat das LINKE den wert true oder das RECHTE
           this.keyboardLeftOrRightSettings();

        }else { 
            this.loadImage('img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png');
            this.characterSleeping();
        }  
    }


    animate() {
        setInterval(() => {
          this.animateMovement();
        }, 30);


        setInterval(() => {
            this.animateImages();
        }, 120);

    }


     /* -------------------------------------------- Animate Image Setting Character ------------------------------- */

    keyboardRightSetting() {
        this.moveRight();
        this.world.direction = true;  // neu
        this.walking_sound.play();
        this.otherDirection = false;
    }

    keyboardLeftSetting() {
        this.moveLeft();
        this.world.direction = false;  // neu
        this.walking_sound.play();
        this.otherDirection = true;
    }

    keyboardUpSetting() {
        this.jump();
        this.jump_sound.play();
    }

    isDeadSetting() {
        this.world.gameLoose = true;
        this.die_sound.play();
        setTimeout(this.gameOver, 3000);
        this.gameOver(); 
    }

    
    /* -------------------------------------------- Animate Image Settings Character ------------------------------- */

    isDeadSettings() {
        this.playAnimation(this.IMAGES_DEAD);
        this.world.gameOverScreen();
    }

    isHurtSettings() {
        this.playAnimation(this.IMAGES_HURT);    
        this.hit_sound.play();
        setTimeout(() => {  
            this.loadImage('img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png');
        }, 2000);
    }

    isAboveGroundSettings() {
        this.playAnimation(this.IMAGES_JUMPING);
        setTimeout(() => {  
            this.loadImage('img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png');
        }, 1000);
    }

    keyboardLeftOrRightSettings() {
        this.playAnimation(this.IMAGES_WALKING);  
        this.idleTime = new Date().getTime();
        this.idleCounter = 0;
        this.snark_sound.pause();
    }



    jump() {
       this.speedY = 27; 
    }

    gameOver() {
        this.gameOver_sound.play();
    }

    muteMusic() {
        this.bg_sound.pause();
    }

   
    characterSleeping() {
        this.idleTime = new Date().getTime() - this.lastIdle;
        this.idleCounter ++;
        if(this.idleCounter >= 150) {
          this.longerIdle();
                        
        }else if(this.idleCounter >= 80 && this.idleCounter <= 149) {
            this.shortIdle();
        }
       
    }

    shortIdle() {
        this.playAnimation(this.IMAGES_IDLE);
        this.idle = true;
        this.yawning_sound.play();
    }
    
    longerIdle () {
        this.longIdle = true;
        this.playAnimation(this.IMAGES_LONG_IDLE);
        this.yawning_sound.pause();
        this.snark_sound.play();
       
    }


   
}