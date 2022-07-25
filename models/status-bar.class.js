class StatusBar extends DrawableObject {

    IMAGES_HEALTH = [
        'img/7.Marcadores/Barra/Marcador vida/verde/0_.png',  // 0
        'img/7.Marcadores/Barra/Marcador vida/verde/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/100_.png'  // 5
    ];

    IMAGES_COINS = [
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/20_ .png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/80_ _1.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/100__1.png'
    ];

    IMAGES_BOTTLES = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png'
    ];

    IMAGES_ENDBOSS = [
        'img/7.Marcadores/Barra/Endboss/0_.png',
        'img/7.Marcadores/Barra/Endboss/20_.png',
        'img/7.Marcadores/Barra/Endboss/40_.png',
        'img/7.Marcadores/Barra/Endboss/60_.png',
        'img/7.Marcadores/Barra/Endboss/80_.png',
        'img/7.Marcadores/Barra/Endboss/100_.png'
    ];

    

    constructor(x, y, type) {
        super();
        this.x = x;
        this.y = y;

        if(type == 'coin') {
            this.coin();
        }
        if(type == 'health') {
            this.health();
        }
        
        if(type == 'bottle') {
            this.bottle();
        }

        if(type == 'boss') {
            this.boss();
        }

        this.loadImages(this.IMAGES);  // gebe hier die Bilder aus einem der 3 Arrays oben weiter an die loadImages Funktion in drawable-object.class.js. Dort ist es arr!
        this.width = 200;
        this.height = 50;
    }

    IMAGES;
    // setPercentage(100);
    setPercentage(percentage) {
        this.percentage = percentage;  // => 0....5 Zahl zwischen 0 und  5 ermitteln 
        let path = this.IMAGES[this.resolveImageIndex()];  // gibt eine Zahl von 0-5 raus aus dem Array oben
        this.img = this.imageCache[path];  //geben dann den Pfad von oben hier rein und laden somit das jeweilige Bild
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }

     /* -----------------------------------Health Bereich---------------------------------------- */

    health() {     
        this.IMAGES = this.IMAGES_HEALTH;
        this.loadImages(this.IMAGES);
        this.setPercentage(100);  // damit wir in der Funktion darunter schon einen Wert haben(100 Leben)       
    }

    /* -----------------------------------Coin Bereich---------------------------------------- */

    coin() {
        this.IMAGES = this.IMAGES_COINS;
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
    }


    /* -----------------------------------Bottle Bereich---------------------------------------- */

    bottle() {
        this.IMAGES = this.IMAGES_BOTTLES;
        this.loadImages(this.IMAGES_BOTTLES);
        this.setPercentage(0);       
    }


    /* -----------------------------------Boss Bereich---------------------------------------- */

    boss() {
        this.IMAGES = this.IMAGES_ENDBOSS;
        this.loadImages(this.IMAGES_ENDBOSS);
        this.setPercentage(100);       
    }
}