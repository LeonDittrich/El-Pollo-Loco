class Chicken extends MovableObject {
    y= 360;
    height = 60;
    width = 60;
    energy = 100;
    
    


    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];    

    IMAGES_DEATH = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];


    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');

        this.x = 600 + Math.random() * 2000;  // zufällige Zahl zwischen 200 und 700
        this.speed = 0.15 + Math.random() * 0.5;

        this.loadImages(this.IMAGES_WALKING);
        this.animate();
        this.energy = 100;
    }


    animate() {    
        this.animateMovement();   

        setInterval(() => {
            this.animateImages();
        }, 100);

    }

    animateImages() {
        if(this.isDead()) {
            this.loadImage(this.IMAGES_DEATH);
            this.speed = 0;
            this.offsetY = -460;
        }
       
    }

    animateMovement() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 100);

        setInterval(() => {  // () => bedeutet das selbe wie eine Funktion
            this.moveLeft();  // hier führen wir die Funktion moveLeft aus
        }, 1000 / 60);   // hier sagen wir wie oft das passieren soll, und zwar 60x Pro sec. 1000ms/60 weil 1000ms sind 1sec. alles was zwischen {} steht wird 60x Pro sec. ausgeführt
        
        

  
    }

}