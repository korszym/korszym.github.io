addEventListener("keydown", function (e) { keysDown[e.keyCode] = true; });
addEventListener("keyup", function (e) { delete keysDown[e.keyCode]; });

function keysUpdate()
{
    if (SPACE_CODE in keysDown)
    {
        if (!bullet.visible)
        {
            bullet.visible = true;
            bullet.x = hero.x + (heroImage.width - bulletImage.width) / 2;
            bullet.y = background.height - heroImage.height;
        }
    }
    if (LEFT_CODE in keysDown)
        if (hero.x > 0)
            hero.x -= hero.speed;
    if (RIGHT_CODE in keysDown)
        if (hero.x < (background.width - heroImage.width))
            hero.x += hero.speed;
}
