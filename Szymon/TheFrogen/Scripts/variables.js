// Zdefiniowanie obiektow canvas oraz context.
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');

// Zdefiniowanie obiektu odpowiadajacacego za tlo gry.
var background = new Image();
// Zdefiniowanie obiektu odpowiadajacego za obraz samolotu gracza.
var heroImage = new Image();
// Zdefiniowanie obiektu odpowiadajacego za obraz samolotu wroga.
var enemyImage = new Image();
var enemyImage2 = new Image();
var enemyImage4 = new Image();
var enemyImage8 = new Image();
var enemyImage16 = new Image();
var enemyImage32 = new Image();
var enemyImage64 = new Image();
// Zdefiniowanie obiektu odpowiadajacego za obraz pocisku.
var bulletImage = new Image();

// Zdefiniowanie obiektu reprezentujacy gracza.
var hero = {};
// Poniewaz przeciwnikow jest wiecej, potrzebna jest tablica do ich przechowywania.
var enemies = [];
var enemies2 = [];
var enemies4 = [];
var enemies8 = [];
var enemies16 = [];
var enemies32 = [];
var enemies64 = [];
// Zdefiniowanie obiektu reprezentujacego pocisk wystrzeliwany przez gracza.
var bullet = {}
// Tablica pociskow wroga.

// Obiekt zarzadzajacy klawiatura.
var keysDown = {};

var enemySpeed = 0;

var score = 0;
var life = 3;
var gameOver = 0;
