let level1;
function initLevel() {
    
    level1 = new Level(
        [
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Endboss()
        ],
        [
            new Cloud(-719),
            new Cloud(0),
            new Cloud(719),
            new Cloud(1440),
            new Cloud(2160),
            new Cloud(3320)
        ],
        [
            new Coin(200),
            new Coin(394),
            new Coin(500),
            new Coin(278),
            new Coin(821),
            new Coin(1020),
            new Coin(1534),
            new Coin(1840),
            new Coin(2300),
            new Coin(2700)
        ],
        [
            new Bottle(200),
            new Bottle(394),
            new Bottle(500),
            new Bottle(648),
            new Bottle(821),
            new Bottle(1020),
            new Bottle(1534),
            new Bottle(1840),
            new Bottle(2300),
            new Bottle(2700)
        ],
        [
            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),
    
            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),
    
            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*2),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719*2),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719*2),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719*2),
            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*3),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719*3),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719*3),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719*3),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*4),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719*4),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719*4),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719*4),
            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*5),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719*5),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719*5),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719*5)

        ],
        
    );
}


