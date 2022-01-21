const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

//rozmiary planszy
canvas.width = innerWidth;
canvas.height = innerHeight;

//import elemtentów HTML
const startMenuEl = document.querySelector("#startMenuEl")
const easyDiff = document.querySelector("#easyGameButton")
const mediumDiff = document.querySelector("#mediumGameButton")
const hardDiff = document.querySelector("#hardGameButton")
const scoreEl= document.querySelector('#scoreEl')
const startGame = document.querySelector('#startGameButton')
const restartGame = document.querySelector('#restartGameButton')
const modelEl = document.querySelector('#modelEl')
const finalscoreEl = document.querySelector('#finalscore')

//import audio
const audio_effect = new Audio('./punch2.wav')
const audio_shoot = new Audio('./shoot.mp3')
const background_audio = new Audio('./soundtrack.mp3')
const audio_finish = new Audio('./punch_sound.wav')
const latwy_audio = new Audio('./latwy.wav')
const sredni_audio = new Audio('./sredni.ogg')
const trudny_audio = new Audio('./trudny.wav')
const ponow_audio = new Audio('./koniec_gry.wav')
const niezyje_audio = new Audio('./niezyje.wav')

//klasa bohatera
class Player {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    context.fillStyle = this.color;
    context.fill();
  }
}

//klasa pocisku
class Projectile{
  constructor(x, y, radius, color, velocity){
    
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    context.fillStyle = this.color;
    context.fill();
  }

  update() {
    this.draw()
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
  }
}

//klasa przeciwnika
class Enemy{
  constructor(x, y, radius, color, velocity){
    
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    context.fillStyle = this.color;
    context.fill();
  }

  update() {
    this.draw()
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
  }
}


const x = canvas.width / 2; //centrum
const y = canvas.height / 2;  

let player = new Player(x, y, 15, 'white'); 
let projectiles = [];
let enemies = [];

//funkcja poziomów
function easy(){
  player = new Player(x, y, 15, 'green'); 
  projectiles = [];
  enemies = [];
  score = 0;
  scoreEl.innerHTML = score;
  finalscoreEl.innerHTML = score;
  background_audio.play();
  background_audio.volume = 0.2;
  background_audio.loop = true
}

function medium(){
  player = new Player(x, y, 25, 'blue'); 
  projectiles = [];
  enemies = [];
  score = 0;
  scoreEl.innerHTML = score;
  finalscoreEl.innerHTML = score;
  background_audio.play();
  background_audio.volume = 0.2;
  background_audio.loop = true
}

function hard(){
  player = new Player(x, y, 40, 'red'); 
  projectiles = [];
  enemies = [];
  score = 0;
  scoreEl.innerHTML = score;
  finalscoreEl.innerHTML = score;
  background_audio.play();
  background_audio.volume = 0.2;
  background_audio.loop = true
}


//tworzenie przeciwnikow
function spawnEnemiesEasy(){
  setInterval(() => {
    const radius = Math.random() * (45 - 10) + 10;
    
    let x;
    let y;

    if (Math.random() < 0.5){
      x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
      y = Math.random() * canvas.height;
    } else {
      x = Math.random() * canvas.width;
      y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
    }
    const color = 'red';
    const angle = Math.atan2(canvas.height/2 - y, canvas.width/2 - x);
    const velocity = {x: Math.cos(angle), y:Math.sin(angle)};

    enemies.push(new Enemy(x, y, radius, color, velocity));
  }, 1500);
};

function spawnEnemiesMedium(){
  setInterval(() => {
    const radius = Math.random() * (55 - 10) + 10;
    
    let x;
    let y;

    if (Math.random() < 0.5){
      x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
      y = Math.random() * canvas.height;
    } else {
      x = Math.random() * canvas.width;
      y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
    }
    const color = 'green';
    const angle = Math.atan2(canvas.height/2 - y, canvas.width/2 - x);
    const velocity = {x: Math.cos(angle), y:Math.sin(angle)};

    enemies.push(new Enemy(x, y, radius, color, velocity));
  }, 1000);
};

function spawnEnemiesHard(){
  setInterval(() => {
    const radius = Math.random() * (70 - 10) + 10;
    
    let x;
    let y;

    if (Math.random() < 0.5){
      x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
      y = Math.random() * canvas.height;
    } else {
      x = Math.random() * canvas.width;
      y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
    }
    const color = 'blue';
    const angle = Math.atan2(canvas.height/2 - y, canvas.width/2 - x);
    const velocity = {x: Math.cos(angle), y:Math.sin(angle)};

    enemies.push(new Enemy(x, y, radius, color, velocity));
  }, 700);
};



let animationId
let score = 0
function animate() {
  animationId = requestAnimationFrame(animate);
  context.fillStyle = 'rgba(0,0,0,0.1)'; 
  context.fillRect(0, 0, canvas.width, canvas.height);
  player.draw();
  
  projectiles.forEach((projectile, index) => {
    projectile.update()
    //usuwanie pocisku z listy po wyjsciu poza margines ekranu
    if(
      projectile.x + projectile.radius < 0 || 
      projectile.x - projectile.radius > canvas.width || 
      projectile.y + projectile.radius < 0 || 
      projectile.y - projectile.radius > canvas.height){
      setTimeout(() => {
        projectiles.splice(index, 1)
      }, 0 )
    }
  });
  
  enemies.forEach((enemy, enemyIndex) => {
    enemy.update()

    const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y)
    
    //koniec gry
    if (dist - enemy.radius - player.radius < 1){
      niezyje_audio.pause()
      niezyje_audio.currentTime = 0
      niezyje_audio.play()

      cancelAnimationFrame(animationId)
      startMenuEl.style.display = 'none'
      modelEl.style.display = 'flex'
      finalscoreEl.innerHTML = score
    }

    projectiles.forEach((projectile, projectileIndex) => {
      const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)
      
      //pocisk zderza sie z przeciwnikiem
      if (dist - enemy.radius - projectile.radius < 1){
        
        //zwieksza wynik
        score += 10
        scoreEl.innerHTML = score
        
        //kurczenie przeciwnika
        if(enemy.radius -10 > 10){
          enemy.radius -= 10;

          audio_effect.pause();
          audio_effect.currentTime = 0;
          audio_effect.play();

          setTimeout(() => {
            projectiles.splice(projectileIndex, 1)}, 0 )
        } else {
          score += 25;
          scoreEl.innerHTML = score;

          audio_finish.pause();
          audio_finish.currentTime = 0;
          audio_finish.play();

          setTimeout(() => {
            enemies.splice(enemyIndex, 1)
            projectiles.splice(projectileIndex, 1)}, 0 )
        }
      }
    }
  )}

  )};

//tworzenie pocisku
addEventListener('click', (event) => {
  const angle = Math.atan2(event.clientY - canvas.height/2, event.clientX - canvas.width/2);
  const velocity = {x: Math.cos(angle) * 10, y: Math.sin(angle) * 10};
  audio_shoot.pause();
  audio_shoot.currentTime = 0;
  audio_shoot.play();
  projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, 5, 'white', velocity));
  
});



easyDiff.addEventListener('click', () => {
  latwy_audio.pause();
  latwy_audio.currentTime = 0;
  latwy_audio.play();


  easy();
  animate();
  spawnEnemiesEasy();
  startMenuEl.style.display = 'none'
  modelEl.style.display = 'none'
})

mediumDiff.addEventListener('click', () => {
  sredni_audio.pause();
  sredni_audio.currentTime = 0;
  sredni_audio.play();

  medium()
  animate()
  spawnEnemiesMedium()
  startMenuEl.style.display = 'none'
  modelEl.style.display = 'none'
})

hardDiff.addEventListener('click', () => {
  trudny_audio.pause()
  trudny_audio.currentTime = 0
  trudny_audio.play()
  
  hard()
  animate()
  spawnEnemiesHard()
  startMenuEl.style.display = 'none'
  modelEl.style.display = 'none'
})

startGame.addEventListener('click', () => {
  
  ponow_audio.pause()
  ponow_audio.currentTime = 0
  ponow_audio.play()
  modelEl.style.display = 'none'
  setTimeout(() => {
        document.location.reload()
      }, 2700 )
})