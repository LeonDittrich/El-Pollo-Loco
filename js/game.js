let canvas;
let world;
let keyboard = new Keyboard();



function startGame() {
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    initLevel();
    init();
    bindBtsPressEvent();
}


function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);  //hier legen wir eine neue Welt an names world, die das Objekt World hat mit der Variable canvas im Gepäck
    

    console.log('My Character is', world.character);
}


function bindBtsPressEvent() {
    document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });

    document.getElementById('btnRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById('btnRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });

    document.getElementById('btnJump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.UP = true;
    });

    document.getElementById('btnJump').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.UP = false;
    });

    document.getElementById('btnThrow').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('btnThrow').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });

    document.getElementById('btnRestart').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.R = true;
    });

    document.getElementById('btnRestart').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.R = false;
    });
}


window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (e.keyCode == 82 ) {
        keyboard.R = true;
    }

    if (e.keyCode == 77) {
        if (keyboard.M == true) {  // wenn der Wert true ist
            keyboard.M =false;  // dann setzen wir ihn auf false
        }else {
            keyboard.M = true;  // ansonsten setzen wir ihn auf true(Wert ist standart auf false)
        }    
    }
    console.log(e);
});


window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (e.keyCode == 82 ) {
        keyboard.R = false;
    }

    console.log(e);
});





