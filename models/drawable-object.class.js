class DrawableObject {
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    img;
    imageCache = [];
    currentImage = 0;

    offsetW = 0;   
    offsetH = 0;
    offsetY = 0;
    offsetX = 0;




    

    // loading('img/test.png');
    loadImage(path) {
        this.img = new Image();   //  <--- das wäre das selbe(this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height); 
    }

    drawFrame(ctx) {
        //Collisionskasten

        if(this instanceof Character || this instanceof Chicken) {  // Zeichnet nur einen Rahmen drumherum wenn es einCharacter oder eine Chicken ist
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'transparent';
        ctx.rect(this.x + this.offsetX, this.y + this.offsetY, this.width - this.offsetW, this.height - this.offsetH);
        ctx.stroke();
       } 
   }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

   
}