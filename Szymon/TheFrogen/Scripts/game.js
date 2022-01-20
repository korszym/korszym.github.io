var liczba = Math.floor(Math.random()*100+1);





// Procedura detekcji kolizji.
function hittest(a, b) {
    if ((a.x < (b.x + b.w)) && ((a.x + a.w) > b.x) && (a.y < (b.y + b.h)) && ((a.y + a.h) > b.y))
        return true;
    else
        return false;
}

function areVisibleEnemies() {
    for (var i = 0; i < enemies.length; i++)
        if (enemies[i].visible)
            return true;
    return false;
}
function drawEnemies() {
    for (var i = 0; i < enemies.length; i++)
        if (enemies[i].visible)
            context.drawImage(enemies[i].image, enemies[i].x, enemies[i].y);

    var dropdown = false;
    for (var i = 0; i < enemies.length; i++) {
        if (enemies[i].visible) {
            enemies[i].x += enemySpeed;
            if (enemies[i].x > (background.width - enemies[i].w))
                dropdown = true;
            if (enemies[i].x < 0)
                dropdown = true;

            // Kolizja: nieprzyjaciel <-> pocisk gracza.
            if (hittest(enemies[i], bullet)) {
                enemies[i].visible = false;
                bullet.x = hero.x + (heroImage.width - bulletImage.width) / 2;
                bullet.y = background.height - heroImage.height;
                bullet.visible = false;
                score += 64;
            }

        }
    }

    if (dropdown) {
        enemySpeed = -enemySpeed;
        for (var i = 0; i < enemies.length; i++)
            enemies[i].y += ENEMY_DROP_DOWN;
    }
}


function areVisibleEnemies2() {
    for (var i = 0; i < enemies2.length; i++)
        if (enemies2[i].visible)
            return true;
    return false;
}
function drawEnemies2() {
    for (var i = 0; i < enemies2.length; i++)
        if (enemies2[i].visible)
            context.drawImage(enemies2[i].image, enemies2[i].x, enemies2[i].y);

    var dropdown = false;
    for (var i = 0; i < enemies2.length; i++) {
        if (enemies2[i].visible) {
            enemies2[i].x += enemySpeed;
            if (enemies2[i].x > (background.width - enemies2[i].w))
                dropdown = true;
            if (enemies2[i].x < 0)
                dropdown = true;

            // Kolizja: nieprzyjaciel <-> pocisk gracza.
            if (hittest(enemies2[i], bullet)) {
                enemies2[i].visible = false;
                bullet.x = hero.x + (heroImage.width - bulletImage.width) / 2;
                bullet.y = background.height - heroImage.height;
                bullet.visible = false;
                score += 32;
            }

        }
    }

    if (dropdown) {
        enemySpeed2 = -enemySpeed2;
        for (var i = 0; i < enemies2.length; i++)
            enemies2[i].y += ENEMY_DROP_DOWN2;
    }
}


function areVisibleEnemies4() {
    for (var i = 0; i < enemies4.length; i++)
        if (enemies4[i].visible)
            return true;
    return false;
}
function drawEnemies4() {
    for (var i = 0; i < enemies4.length; i++)
        if (enemies4[i].visible)
            context.drawImage(enemies4[i].image, enemies4[i].x, enemies4[i].y);

    var dropdown = false;
    for (var i = 0; i < enemies4.length; i++) {
        if (enemies4[i].visible) {
            enemies4[i].x += enemySpeed;
            if (enemies4[i].x > (background.width - enemies4[i].w))
                dropdown = true;
            if (enemies4[i].x < 0)
                dropdown = true;

            // Kolizja: nieprzyjaciel <-> pocisk gracza.
            if (hittest(enemies4[i], bullet)) {
                enemies4[i].visible = false;
                bullet.x = hero.x + (heroImage.width - bulletImage.width) / 2;
                bullet.y = background.height - heroImage.height;
                bullet.visible = false;
                score += 16;
            }

        }
    }

    if (dropdown) {
        enemySpeed4 = -enemySpeed4;
        for (var i = 0; i < enemies4.length; i++)
            enemies4[i].y += ENEMY_DROP_DOWN4;
    }
}

function areVisibleEnemies8() {
    for (var i = 0; i < enemies8.length; i++)
        if (enemies8[i].visible)
            return true;
    return false;
}
function drawEnemies8() {
    for (var i = 0; i < enemies8.length; i++)
        if (enemies8[i].visible)
            context.drawImage(enemies8[i].image, enemies8[i].x, enemies8[i].y);

    var dropdown = false;
    for (var i = 0; i < enemies8.length; i++) {
        if (enemies8[i].visible) {
            enemies8[i].x += enemySpeed;
            if (enemies8[i].x > (background.width - enemies8[i].w))
                dropdown = true;
            if (enemies8[i].x < 0)
                dropdown = true;

            // Kolizja: nieprzyjaciel <-> pocisk gracza.
            if (hittest(enemies8[i], bullet)) {
                enemies8[i].visible = false;
                bullet.x = hero.x + (heroImage.width - bulletImage.width) / 2;
                bullet.y = background.height - heroImage.height;
                bullet.visible = false;
                score += 8;
            }

        }
    }

    if (dropdown) {
        enemySpeed8 = -enemySpeed8;
        for (var i = 0; i < enemies8.length; i++)
            enemies8[i].y += ENEMY_DROP_DOWN8;
    }
}
function drawEnemies16() {
    for (var i = 0; i < enemies16.length; i++)
        if (enemies16[i].visible)
            context.drawImage(enemies16[i].image, enemies16[i].x, enemies16[i].y);

    var dropdown = false;
    for (var i = 0; i < enemies16.length; i++) {
        if (enemies16[i].visible) {
            enemies16[i].x += enemySpeed;
            if (enemies16[i].x > (background.width - enemies16[i].w))
                dropdown = true;
            if (enemies16[i].x < 0)
                dropdown = true;

            // Kolizja: nieprzyjaciel <-> pocisk gracza.
            if (hittest(enemies16[i], bullet)) {
                enemies16[i].visible = false;
                bullet.x = hero.x + (heroImage.width - bulletImage.width) / 2;
                bullet.y = background.height - heroImage.height;
                bullet.visible = false;
                score += 4;
            }

        }
    }

    if (dropdown) {
        enemySpeed16 = -enemySpeed;
        for (var i = 0; i < enemies16.length; i++)
            enemies16[i].y += ENEMY_DROP_DOWN16;
    }
}


function drawEnemies32() {
    for (var i = 0; i < enemies32.length; i++)
        if (enemies32[i].visible)
            context.drawImage(enemies32[i].image, enemies32[i].x, enemies32[i].y);

    var dropdown = false;
    for (var i = 0; i < enemies32.length; i++) {
        if (enemies32[i].visible) {
            enemies32[i].x += enemySpeed;
            if (enemies32[i].x > (background.width - enemies32[i].w))
                dropdown = true;
            if (enemies32[i].x < 0)
                dropdown = true;

            // Kolizja: nieprzyjaciel <-> pocisk gracza.
            if (hittest(enemies32[i], bullet)) {
                enemies32[i].visible = false;
                bullet.x = hero.x + (heroImage.width - bulletImage.width) / 2;
                bullet.y = background.height - heroImage.height;
                bullet.visible = false;
                score += 2;
            }

        }
    }

    if (dropdown) {
        enemySpeed32 = -enemySpeed32;
        for (var i = 0; i < enemies32.length; i++)
            enemies32[i].y += ENEMY_DROP_DOWN32;
    }
}
function drawEnemies64() {
    for (var i = 0; i < enemies64.length; i++)
        if (enemies64[i].visible)
            context.drawImage(enemies64[i].image, enemies64[i].x, enemies64[i].y);

    var dropdown = false;
    for (var i = 0; i < enemies64.length; i++) {
        if (enemies64[i].visible) {
            enemies64[i].x += enemySpeed;
            if (enemies64[i].x > (background.width - enemies64[i].w))
                dropdown = true;
            if (enemies64[i].x < 0)
                dropdown = true;

            // Kolizja: nieprzyjaciel <-> pocisk gracza.
            if (hittest(enemies64[i], bullet)) {
                enemies64[i].visible = false;
                bullet.x = hero.x + (heroImage.width - bulletImage.width) / 2;
                bullet.y = background.height - heroImage.height;
                bullet.visible = false;
                score += 1;
            }

        }
    }

    if (dropdown) {
        enemySpeed64 = -enemySpeed64;
        for (var i = 0; i < enemies64.length; i++)
            enemies64[i].y += ENEMY_DROP_DOWN64;
    }
}






function drawBullet() {
    if (bullet.visible) {
        context.drawImage(bullet.image, bullet.x, bullet.y);
        bullet.y -= bullet.speed;
        if (bullet.y < 0)
            bullet.visible = false;
    }
}


function drawScore() {
    context.fillStyle = "rgb(0, 0, 0)";
    context.font = "34px Helvetica";
    context.textAlign = "left";
    context.textBaseline = "top";

    var textLife = "Life: ";
    var textLifePosition = context.measureText(textLife);
    var textLifeNumber = life.toString();
    var textLifeNumberPosition = context.measureText(textLifeNumber);
    context.fillText(score , TEXT_OFFSET_X, TEXT_OFFSET_Y);
    context.fillText(liczba,
                     background.width - textLifePosition.width - textLifeNumberPosition.width - TEXT_OFFSET_X,
                     TEXT_OFFSET_Y);
}

function drawFinalText(text) {
    context.textBaseline = "bottom";
    context.fillStyle = "rgb(0, 0, 0)";
    context.font = "48px Helvetica";
    var textPosition = context.measureText(text);
    context.fillText(text, background.width / 2 - textPosition.width / 2, background.height / 2);
}

function render () {
    context.drawImage(background, 0, 0);
    if (gameOver === 0) {
        context.drawImage(hero.image, hero.x, hero.y);
        drawBullet();
        drawScore();
        if  ( score === liczba ) {
            drawFinalText("Zwycięstwo! Twoja liczba to: " + (liczba).toString(2)  );
            setTimeout("location.reload(true);", 3000);
}
    else
        drawEnemies();
        drawEnemies2();
        drawEnemies4();
        drawEnemies8();
        drawEnemies16();
        drawEnemies32();
        drawEnemies64();
}
if (score > liczba) {
drawFinalText("Porażka! Wybrałeś złe liczby!");
setTimeout("location.reload(true);", 2000);
}
}

function gameLoop() {
    keysUpdate();
    render();
    requestAnimationFrame(gameLoop);
}


//animacja jezora
document.body.onkeyup = function(e){
if(e.keyCode == 32){
heroImage.src = "Images/zabkaj.png";
var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "jezyk.mp3"
    audio.play()
}
}
setInterval(() => {
  heroImage.src = "Images/zabka.png";
}, 1000);



function main() {
    ImageLoader(["Images/background.png", "Images/zabka.png","Images/zabkaj.png", "Images/enemy.png", "Images/enemy2.png", "Images/bullet.png"], function(result){
        background.src = "Images/background.png";
        heroImage.src = "Images/zabka.png";
        enemyImage.src = "Images/enemy.png";
        enemyImage2.src = "Images/enemy2.png";
        enemyImage4.src = "Images/enemy.png";
        enemyImage8.src = "Images/enemy2.png";
        enemyImage16.src = "Images/enemy.png";
        enemyImage32.src = "Images/enemy2.png";
        enemyImage64.src = "Images/enemy.png";
        bulletImage.src = "Images/bullet.png";
        initCanvas();
        initHero();
        initEnemies();
        initEnemies2();
        initEnemies4();
        initEnemies8();
        initEnemies16();
        initEnemies32();
        initEnemies64();
        initBullet();

        gameLoop();
    });
}
