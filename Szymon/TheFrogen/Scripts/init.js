function initCanvas() {
    canvas.width = background.width;
    canvas.height = background.height;
    document.body.appendChild(canvas);
}

function initHero() {
    hero.image = heroImage;
    hero.x = 0;
    hero.y = background.height - heroImage.height;
    hero.w = heroImage.width;
    hero.h = heroImage.height;
    hero.speed = HERO_SPEED;
}

function initEnemies() {
    var k = 0;
    for (var j = 0; j < ENEMY_ROWS; j++)
        for (var i = 0; i < ENEMY_COLUMNS; i++)
            enemies[k++] =  {
                                visible : true,
                                image : enemyImage,
                                x : (i+4) * enemyImage.width,
                                y : (j + 1) * enemyImage.height,
                                w : enemyImage.width,
                                h : enemyImage.height
                            };
}
function initEnemies2() {
    var k = 0;
    for (var j = 0; j < ENEMY_ROWS2; j++)
        for (var i = 0; i < ENEMY_COLUMNS2; i++)
            enemies2[k++] =  {
                                visible : true,
                                image : enemyImage2,
                                x : (i+6) * enemyImage2.width,
                                y : (j + 1) * enemyImage2.height,
                                w : enemyImage2.width,
                                h : enemyImage2.height
                            };
}
function initEnemies4() {
    var k = 0;
    for (var j = 0; j < ENEMY_ROWS4; j++)
        for (var i = 0; i < ENEMY_COLUMNS4; i++)
            enemies4[k++] =  {
                                visible : true,
                                image : enemyImage4,
                                x : (i+8) * enemyImage4.width,
                                y : (j + 2) * enemyImage4.height,
                                w : enemyImage4.width,
                                h : enemyImage4.height
                            };
}
function initEnemies8() {
    var k = 0;
    for (var j = 0; j < ENEMY_ROWS8; j++)
        for (var i = 0; i < ENEMY_COLUMNS8; i++)
            enemies8[k++] =  {
                                visible : true,
                                image : enemyImage8,
                                x : (i+10) * enemyImage8.width,
                                y : (j + 2) * enemyImage8.height,
                                w : enemyImage8.width,
                                h : enemyImage8.height
                            };
}
function initEnemies16() {
    var k = 0;
    for (var j = 0; j < ENEMY_ROWS16; j++)
        for (var i = 0; i < ENEMY_COLUMNS16; i++)
            enemies16[k++] =  {
                                visible : true,
                                image : enemyImage16,
                                x : (i+12) * enemyImage16.width,
                                y : (j + 1) * enemyImage16.height,
                                w : enemyImage16.width,
                                h : enemyImage16.height
                            };
}
function initEnemies32() {
    var k = 0;
    for (var j = 0; j < ENEMY_ROWS32; j++)
        for (var i = 0; i < ENEMY_COLUMNS32; i++)
            enemies32[k++] =  {
                                visible : true,
                                image : enemyImage32,
                                x : (i+14) * enemyImage32.width,
                                y : (j + 1) * enemyImage32.height,
                                w : enemyImage32.width,
                                h : enemyImage32.height
                            };
}
function initEnemies64() {
    var k = 0;
    for (var j = 0; j < ENEMY_ROWS64; j++)
        for (var i = 0; i < ENEMY_COLUMNS64; i++)
            enemies64[k++] =  {
                                visible : true,
                                image : enemyImage64,
                                x : (i+16) * enemyImage64.width,
                                y : (j + 2) * enemyImage64.height,
                                w : enemyImage64.width,
                                h : enemyImage64.height
                            };
}

function initBullet() {
    bullet.visible = false;
    bullet.image = bulletImage;
    bullet.x = 0;
    bullet.y = 0;
    bullet.w = bulletImage.width;
    bullet.h = bulletImage.height;
    bullet.speed = BULLET_SPEED;
}
