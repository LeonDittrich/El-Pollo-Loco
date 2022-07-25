class Endboss extends MovableObject {

    height = 400;
    width = 250;
    y = 60;
    energy = 100;

    offsetW = 10;
    offsetH = 300;
    offsetY = 260;
    offsetX = 10;
    walkingDirection = true;  // true = left, false = right





    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png'
    ];  

    IMAGES_HURT = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png',
    ];

    IMAGES_DEATH = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png'
    ];

    IMAGES_ALERT = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png'

    ];

    IMAGES_ATTACK = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png'
    ];


     /* -----------------------Sounds----------------------- */
    gameWon_sound = new Audio('audio/gameWon.mp3');
    hit_sound = new Audio('audio/bottle-hit.mp3');
    bossFight_sound = new Audio('audio/bossFight.mp3');


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEATH);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.x = 3400;
        this.animate();
        this.energy = 100;
    }


    animateMovement() {
        if(this.isWaitingForCharacter()) {
            this.walk();
        }
        
        if(this.isCharacterToClose()) {
            this.attack();
            world.level.level_start_x = 3120;
            this.speed = 6 + Math.random() * 1;
            this.bossFight_sound.volume = 0.2;
            this.bossFight_sound.play();
        }
    }


    animateImages() {
       if(this.isDead()) {
           this.isDeadSettings();
            
        }else if (this.isHurt()) {
           this.isHurtSettings();

        }else if(this.isCharacterToClose()) {
            this.playAnimation(this.IMAGES_ATTACK);

        }else if(this.isSeeingCharacter()) {
            this.playAnimation(this.IMAGES_ALERT);

        }else if(this.isWaitingForCharacter()) {
            this.playAnimation(this.IMAGES_WALKING);
        }
       
    }

   
    animate() {
        setInterval(() => {
          this.animateMovement();
        }, 30);  


        setInterval(() => {
            this.animateImages();
        }, 100);

    }


    /* -------------------------------------------- Settings Endgegner ------------------------------- */

    isDeadSettings() {
        this.playAnimation(this.IMAGES_DEATH);
        this.speed = 0;  // damit der Boss sich nicht mehr bewegt
        this.offsetY = -800; // damit die Hitbox nicht mehr kollidiert
        this.gameWonSettings();
    }

    isHurtSettings() {
        this.playAnimation(this.IMAGES_HURT);  
        this.hit_sound.play();
        setTimeout(() => {  
            this.playAnimation(this.IMAGES_WALKING);
        }, 1000);    
        this.hit_sound.play();
    }


    /* -------------------------------------------- Verhalten Endgegner ------------------------------- */

    /* ---------Walk--------- */
    isWaitingForCharacter() {
        return world.character.x <= 2980; // return muss gemacht werden damit es es ein true zurück gebne kann wenn der fall eintritt
        
    }

    walk() {
        if(this.x >= 3600) {
            this.walkingDirection = true;
        }

        if(this.x <= 3400) {
            this.walkingDirection = false;
        }

        if(this.walkingDirection == true) {
            this.moveLeft();
        }else {
            this.moveRight();
        }
    }


     /* ---------Alert--------- */
    isSeeingCharacter() {
        return world.character.x >= 3000;
    }


    /* ---------Attack--------- */
    isCharacterToClose() {
        return world.character.x >= 3120;
    }

    attack() {
        if(this.x >= 3600) {
            this.walkingDirection = true;
        }

        if(this.x <= 3100) {
            this.walkingDirection = false;
        }

        if(this.walkingDirection == true) {
            this.moveLeft();
        }else {
            this.moveRight();
        }
    }

     

    /* -------------------------------------------- Spiel Gewonnen ------------------------------------ */ 
    gameWonSettings() {
        this.bossFight_sound.volume = 0;
        this.gameWon_sound.play();
        setTimeout(() => {  
            this.gameWon_sound.volume = 0;
        }, 2000);  
        setTimeout(() => {  
            world.gameWon = true;
        }, 2000);  
       this.muteSounds();
       
    }

    muteSounds() {
        world.character.yawning_sound.volume = 0;
        world.character.snark_sound.volume = 0;
    }

   

}